import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from "@storybook/angular/types-7-0";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import {
  MenuExpansionPanelComponent,
  MenuExpansionPanelModule
} from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';

export default {
  title: 'Components/Menu Expansion Panel',
  component: MenuExpansionPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatIconModule,
        MenuExpansionPanelModule,
      ],
    }),
  ],
  argTypes: Metadata.ArgTypes,
  args: Metadata.ControlsDefaultValues,
  parameters: {
    design: {
      url: FigmaURL.MenuExpansionPanel.design,
    },
    badges: [BADGE.STABLE],
    version: '1.4.0',
  },
} as Meta;

export const MenuExpansionPanel: Story<MenuExpansionPanelComponent> = {
  render: (args: MenuExpansionPanelComponent) => ({
    props: {
      ...args,
    },
    template: `
      <ui-kit-menu-expansion-panel
        [title]='title'
        [disabled]='disabled'
        [expanded]='expanded'
        [hideToggle]='hideToggle'
        [hideClose]='hideClose'
        [draggable]='draggable'
        [draggableBoundary]='draggableBoundary'
        [visible]='visible'
        [headerIcons]='headerIcons'
      >
        Contenu dynamique
      </ui-kit-menu-expansion-panel>
    `,
  }),
};
