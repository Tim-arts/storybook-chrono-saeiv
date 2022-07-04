import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { ButtonComponent, ButtonModule } from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule, ButtonModule],
    }),
  ],
  argTypes: Metadata.ArgTypes,
  args: Metadata.ControlsDefaultValues,
  parameters: {
    design: {
      url: FigmaURL.Button.design,
    },
    badges: [BADGE.STABLE],
    version: '1.4.0',
  },
} as Meta;

export const Button: Story<ButtonComponent> = {};
