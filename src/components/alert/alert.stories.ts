import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { AlertComponent, AlertModule } from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';

export default {
  title: 'Components/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule, AlertModule],
    }),
  ],
  argTypes: {
    ...Metadata.ArgTypes,
    toastOptions: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    design: {
      url: FigmaURL.Alert.design,
    },
    badges: [BADGE.STABLE],
    version: '1.4.8',
    figmaProperties: {
      argTypes: Metadata.ArgTypes,
      url: FigmaURL.Alert.prototype,
    },
  },
} as Meta;

export const Alert: Story<AlertComponent> = {
  args: {
    classes: Metadata.ControlsDefaultValues.classes,
    type: Metadata.ControlsDefaultValues.type,
    content: Metadata.ControlsDefaultValues.content,
    status: Metadata.ControlsDefaultValues.status,
    title: Metadata.ControlsDefaultValues.title,
  },
};

export const Inline: Story<AlertComponent> = {
  args: {
    ...Alert.args,
    type: 'inline'
  },
  render: (args: Metadata.Interface) => ({
    props: args,
    template: `
      <ui-kit-alert title="Message inline" type="inline" [status]="status" [classes]="classes" [content]="content"></ui-kit-alert>
      Contenu additionnel
    `,
  }),
};
