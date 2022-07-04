import React from 'react';
import { useEffect, useState } from 'react';
import { BadgeProps } from '@storybook/components/dist/ts3.9/Badge/Badge';

import {
  getFileKey,
  getNodeId,
  getFigmaProperties,
  compareProperties,
} from './helpers';

import { Div, H1, Table, Loader, Badge } from '@storybook/components';

type Props = {
  argTypes: any;
  url: string;
};
type ComparisonProps = {
  figmaProperties: string[];
  componentProperties: string[];
  same: string[];
  different: string[];
};

enum Messages {
  NotAvailable = 'Data not available',
}

const Elements = {
  H1: <H1>Properties</H1>,
};

const FigmaProperties = (props: Props) => {
  const [properties, setProperties] = useState<ComparisonProps>();
  const [loading, setLoading] = useState(true);

  const figmaFileKey: string = getFileKey(props.url);
  const figmaNodeIds: string[] = getNodeId(props.url);
  const badgeProps: BadgeProps = {
    status: 'neutral',
  };

  let array: string[];

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const figmaProperties: string[] = await getFigmaProperties(figmaFileKey,
            figmaNodeIds);
        setProperties(compareProperties(props.argTypes, figmaProperties));

        setLoading(false);
      } catch (err) {
        setLoading(false);

        console.log(err);
        return <span>{err}</span>;
      }
    })();
  }, []);

  if (loading) {
    return (
      <Div className="position-relative">
        {Elements.H1}
        <Loader role="progressbar" />
      </Div>
    );
  }

  if (
    !properties ||
    properties?.figmaProperties.length === 0 ||
    properties?.componentProperties.length === 0
  ) {
    return (
      <Div>
        {Elements.H1}
        {Messages.NotAvailable}
      </Div>
    );
  }

  // Table will display correctly
  if (properties?.same?.length > properties?.different?.length) {
    array = [
      ...Array(properties.same.length - properties.different.length).keys(),
    ].map((x: number) => '');
    properties.different = [...properties.different, ...array];
  } else {
    array = [
      ...Array(properties.different.length - properties.same.length).keys(),
    ].map((x: number) => '');
    properties.same = [...properties.same, ...array];
  }

  const figmaProperties = properties?.figmaProperties.map((prop: string, index: number) => (
    <span key={index} style={{ marginLeft: '5px' }}>
      <Badge {...badgeProps}>{prop}</Badge>
    </span>
  ));
  const componentProperties = properties?.componentProperties.map((prop: string, index: number) => (
    <span key={index} style={{ marginLeft: '5px' }}>
      <Badge {...badgeProps}>{prop}</Badge>
    </span>
  ));
  const listSimilaritiesItems = properties?.same.map((prop: string, index: number) => <td key={index}>{prop}</td>);
  const listDifferencesItems = properties?.different.map((prop: string, index: number) => <td key={index}>{prop}</td>);

  return (
    <Div className="position-relative">
      {Elements.H1}
      <br />
      Figma component: {figmaProperties}
      <br />
      UI Kit component: {componentProperties}
      <Table>
        <tbody>
          <tr style={{ backgroundColor: 'transparent' }}>
            <th className="text-align-left">Similar</th>
            {listSimilaritiesItems}
          </tr>
          <tr style={{ backgroundColor: 'transparent' }}>
            <th className="text-align-left">Different</th>
            {listDifferencesItems}
          </tr>
        </tbody>
      </Table>
      <br />
    </Div>
  );
};

export default FigmaProperties;
