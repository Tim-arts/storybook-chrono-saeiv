import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { ButtonComponent, ButtonModule } from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';
import ButtonsStyle from './buttons.scss';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonModule, MatIconModule, MatRippleModule],
    }),
    componentWrapperDecorator((story: string) => `
      <style>${ButtonsStyle}</style>
      ${story}
    `),
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

export const Buttons: Story<ButtonComponent> = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
    template: `
      <ui-kit-button
        textContent="Elevated"
      ></ui-kit-button>
      <ui-kit-button
        textContent="Filled"
        type="filled"
      ></ui-kit-button>
      <ui-kit-button
        type="filled-tonal"
        textContent="Filled tonal"
      ></ui-kit-button>
      <ui-kit-button
        type="outlined"
        textContent="Outlined"
      ></ui-kit-button>
      <ui-kit-button
        type="text"
        size="mini"
        icon="add"
        ></ui-kit-button>
        <ui-kit-button
        type="text"
        size="mini"
        icon="settings"
        ></ui-kit-button>
      <ui-kit-button
        type="text"
        textContent="Text"
      ></ui-kit-button>
      <ui-kit-button
        type="fab"
        size="mini"
        icon="add"
        ></ui-kit-button>
      <ui-kit-button
        type="fab"
        size="mini"
        icon="add"
        [inverted]="true"
      ></ui-kit-button>
      <ui-kit-button
        type="extended-fab"
        textContent="Extended FAB"
      ></ui-kit-button>
    `,
  }),
};
