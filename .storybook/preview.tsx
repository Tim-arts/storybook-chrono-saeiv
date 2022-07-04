import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withDesign } from 'storybook-addon-designs';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs';
import { DocsContainer, DocsContext } from '@storybook/addon-docs';

import docJson from '../documentation.json';
import { BADGES } from './constants';
import { viewports as breakpoints } from '../src/styles/breakpoints';
import { CustomDocsContainer } from '../src/shared/components';
import FigmaProperties from '../src/figma/figma-properties';

// @ts-ignore
setCompodocJson(docJson);

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  };
  return acc;
}, {} as typeof INITIAL_VIEWPORTS);

export const parameters = {
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: '#FFF',
      },
      {
        name: 'Dark',
        value: '#111',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  design: {
    type: 'figspec',
  },
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  badgesConfig: {
    BADGES,
  },
  previewTabs: {
    'storybook/docs/panel': {
      title: 'Documentation',
    },
    canvas: {
      index: -1,
      title: 'Code / Visuel',
    },
  },
  options: {
    storySort: {
      order: [
        'Pour commencer',
        [
          'Introduction',
          'Installation du UI Kit',
          'Utilisation du UI Kit',
          'Librairies recommandées',
          'Nouveautés',
          'Support',
        ],
        'Système de Design',
        [
          'Atomes',
          [
            'Couleurs',
            'Typographies',
            'Points de rupture',
            'Espacements',
            'Icônes',
            'Grilles',
            'Élévations',
          ],
          'Molécules',
        ],
        'Components',
        ['Action Bar', 'Button', ['Buttons', 'Button']],
      ],
    },
  },
  docs: {
    inlineStories: true,
    source: {
      state: 'open',
    },
    container: ({
      children,
      context,
    }: React.ComponentProps<typeof DocsContainer> & {
      children?: React.ReactNode;
    }) =>
      context.parameters?.version
        ? (() => {
            const IDocsContainer = {
              children: children,
              context: context,
            };

            return (
              <DocsContainer {...IDocsContainer}>
                <CustomDocsContainer {...IDocsContainer} />
              </DocsContainer>
            );
          })()
        : (() => {
            const IDocsContainer = {
              children: children,
              context: context,
            };

            return <DocsContainer {...IDocsContainer} />;
          })(),
    page: () => {
      const { parameters } = React.useContext(DocsContext);
      const Documentation: any = parameters?.documentation;
      const figmaProperties = parameters?.figmaProperties;

      return (
        <>
          {parameters?.version ? null : <Title />}
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          {figmaProperties ? <FigmaProperties argTypes={figmaProperties.argTypes} url={figmaProperties.url} /> : null}
          <Stories />
          {Documentation ? <Documentation /> : null}
        </>
      );
    },
    transformSource: (src: string) => transformSource(src),
  },
  controls: { sort: 'alpha' },
};

function transformSource(src: string) {
  const regexp = /(<style[\w\W]+style>)/g;
  const containsHTMLTags = regexp.test(src);

  if (!containsHTMLTags) {
    return src;
  }

  return src.replace(regexp, '');
}

export const decorators = [withDesign];
