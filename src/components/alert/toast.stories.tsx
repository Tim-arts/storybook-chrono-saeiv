import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import {
  AlertModule,
  ButtonModule,
  Alert,
  ToastContainerComponent,
} from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';
import Documentation from './documentation.mdx';

import { ToastExampleComponent } from './toast-example/toast-example.component';
import { Alert as StoryAlert } from './alert.stories';

export default {
  title: 'Components/Alert/Toast',
  component: ToastExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToastContainerComponent],
      imports: [CommonModule, MatIconModule, AlertModule, ButtonModule],
    }),
  ],
  argTypes: {
    ...Metadata.ArgTypes,
    open: {
      table: {
        disable: true,
      },
    },
    toastService: {
      table: {
        disable: true,
      },
    },
  },
  args: Metadata.ControlsDefaultValues,
  parameters: {
    design: {
      url: FigmaURL.Alert.design,
    },
    badges: [BADGE.STABLE],
    version: '1.4.8',
    documentation: Documentation,
    figmaProperties: {
      argTypes: Metadata.ArgTypes,
      url: FigmaURL.Alert.prototype,
    },
  },
} as Meta;

export const Toast: Story<ToastExampleComponent> = {
  args: {
    ...StoryAlert.args,
    type: 'toast',
  },
  render: (args: Metadata.Interface) => ({
    props: {
      ...args,
      create: function(params: Alert) {
        const toastComponent: ToastExampleComponent = this.storyComponentElementRef;
        toastComponent.toastService.create(params, this);
      },
    },
    template: `
      <toast-example>
        <ui-kit-button
          color="primary"
          type="filled-tonal"
          textContent="Create toast!"
          (click)="create({
            classes: classes,
            content: content,
            status: status,
            title: title,
            type: type,
            toastOptions: toastOptions
          })"
        ></ui-kit-button>
      </toast-example>
    `,
  }),
};
