import * as Figma from 'figma-api';

interface ICompareProperties {
  figmaProperties: string[];
  componentProperties: string[];
  same: string[];
  different: string[];
}

/**
 * Gets the key file from a specific Figma frame
 *
 * @param {String} url
 * @return {String}
 */
export function getFileKey(url: string): string {
  return url.split('/')[4];
}

/**
 * Gets the node id from a specific Figma frame. There might be multiple nodes for one document
 *
 * @param {String} url
 * @return {String[]}
 */
export function getNodeId(url: string): string[] {
  const array = url.split('/');
  const lastEntry = array[array.length - 1];
  const nodeId = lastEntry.split('=')[1];

  return [decodeURIComponent(nodeId)];
}

/**
 * Gets the Figma properties from a component as an array of values
 *
 * @param {String} figmaFileKey
 * @param {String[]} figmaNodeIds
 * @return {Promise}
 */
export async function getFigmaProperties(figmaFileKey: string,
    figmaNodeIds: string[]): Promise<string[]> {
  const api = new Figma.Api({
    personalAccessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN!,
  });

  const file = await api.getFileNodes(figmaFileKey,
      figmaNodeIds.map((x) => decodeURIComponent(x)));
  const nodes = file.nodes;
  const keyNodes = Object.keys(nodes);
  const components = nodes[keyNodes[0]]!.components;
  const keyComponents = Object.keys(components);
  const componentName =
    components[keyComponents[keyComponents.length - 1]]!.name.split(', ');

  return componentName.map((x) => x.split('=')[0].toLowerCase());
}

/**
 * Builds an object filled with:
 * - properties from the Figma component implementation (design)
 * - properties from the UI Kit component implementation (integration)
 * - properties that are similar
 * - properties that are different
 *
 * @param {String[]} componentProperties
 * @param {String[]} figmaProperties
 *
 * @return {String[]}
 */
export function compareProperties(componentProperties: string[],
    figmaProperties: string[]): ICompareProperties | undefined {
  componentProperties = Object.keys(componentProperties);

  if (!componentProperties || !figmaProperties) {
    return undefined;
  }

  return {
    figmaProperties: figmaProperties,
    componentProperties: componentProperties,
    same: componentProperties.filter((type: string) =>
      figmaProperties.includes(type)),
    different: (() => {
      const filteredFigmaProperties = componentProperties.filter((type: string) => !figmaProperties.includes(type));
      const filteredComponentProperties = figmaProperties.filter((type: string) => !componentProperties.includes(type));

      return [
        ...filteredFigmaProperties,
        ...filteredComponentProperties,
      ].sort();
    })(),
  };
}
