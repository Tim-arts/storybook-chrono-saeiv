import React from 'react';
import { Badge, Div } from '@storybook/components';
import { BadgeProps } from '@storybook/components/dist/ts3.9/Badge/Badge';

import { Title } from './Title';

/**
 * Creates a React element that displays title and version altogether
 *
 * @param {any} context
 * @return {JSX.Element}
 */
export function TitleAndVersion({ context }: any): JSX.Element {
  const badgeProps: BadgeProps = {
    status: 'neutral',
  };

  return (
    <Div className="d-flex justify-content-space-between">
      <Title title={context.title} />
      <Badge {...badgeProps}>Version : {context.parameters.version}</Badge>
    </Div>
  );
}
