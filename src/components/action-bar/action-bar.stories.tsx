import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import {
  ActionBarComponent,
  ActionBarModule,
  ButtonModule,
} from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';

export default {
  title: 'Components/Action Bar',
  component: ActionBarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDividerModule,
        MatTooltipModule,
        MatMenuModule,
        ButtonModule,
        ActionBarModule,
      ],
    }),
  ],
  argTypes: Metadata.ArgTypes,
  args: Metadata.ControlsDefaultValues,
  parameters: {
    design: {
      url: FigmaURL.ActionBar.design,
    },
    badges: [BADGE.STABLE],
    version: '1.4.0',
  },
} as Meta;

export const ActionBar: Story<ActionBarComponent> = {
  render: (args: ActionBarComponent) => ({
    props: {
      ...args,
    },
    template: `
      <ui-kit-action-bar [draggable]="draggable" [draggableBoundary]="draggableBoundary" [fragmented]="fragmented" [direction]="direction">
        <div class="icon-group">
          <mat-divider [vertical]="true" *ngIf="draggable"></mat-divider>
          <div class="icon-group-container">
            <ui-kit-button
            [matTooltipPosition]="direction === 'horizontal' ? 'below' : 'right'"
            [inverted]="fragmented"
            [type]="fragmented ? 'fab' : 'text'"
            [size]="fragmented ? 'regular' : 'mini'"
            iconPosition="center"
            matTooltip="Ajouter un détour"
            icon="add"></ui-kit-button>
            <ui-kit-button
            [matTooltipPosition]="direction === 'horizontal' ? 'below' : 'right'"
            [inverted]="fragmented" [type]="fragmented ? 'fab' : 'text'"
            [size]="fragmented ? 'regular' : 'mini'"
            iconPosition="center"
            matTooltip="Imprimer"
            icon="print"></ui-kit-button>
            <ui-kit-button
            [matTooltipPosition]="direction === 'horizontal' ? 'below' : 'right'"
            [inverted]="fragmented" [type]="fragmented ? 'fab' : 'text'"
            [size]="fragmented ? 'regular' : 'mini'"
            iconPosition="center"
            matTooltip="Sauvegarder"
            icon="save_alt"></ui-kit-button>
            <ui-kit-button
            [matTooltipPosition]="direction === 'horizontal' ? 'below' : 'right'"
            [inverted]="fragmented"
            [type]="fragmented ? 'fab' : 'text'"
            [size]="fragmented ? 'regular' : 'mini'"
            iconPosition="center"
            matTooltip="Publier"
            icon="publish"></ui-kit-button>
            <ui-kit-button
            [matTooltipPosition]="direction === 'horizontal' ? 'below' : 'right'"
            [inverted]="fragmented"
            [type]="fragmented ? 'fab' : 'text'"
            [size]="fragmented ? 'regular' : 'mini'"
            iconPosition="center"
            matTooltip="Sortir de la carte"
            icon="exit_to_app"></ui-kit-button>
          </div>
        </div>
        <div class="icon-group">
          <mat-divider [vertical]="true"></mat-divider>
          <div class="icon-group-container">
            <ui-kit-button
            [matTooltipPosition]="direction === 'horizontal' ? 'below' : 'right'"
            [inverted]="fragmented"
            [type]="fragmented ? 'fab' : 'text'"
            [size]="fragmented ? 'regular' : 'mini'"
            iconPosition="center"
            matTooltip="Paramètres de la carte"
            icon="settings"
            [matMenuTriggerFor]="menu"
            [hasMenu]="true">
              <mat-menu #menu>
                <div mat-menu-item>
                  <input id="choice-1" name="choice-1" type="checkbox" [checked]="true" />
                  <label for="choice-1">Choice 1</label>
                </div>
              </mat-menu>
            </ui-kit-button>
          </div>
        </div>
      </ui-kit-action-bar>
    `,
  }),
};
