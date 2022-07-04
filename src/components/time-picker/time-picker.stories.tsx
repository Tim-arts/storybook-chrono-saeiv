import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import {
  TimePickerComponent,
  TimePickerSeparatedModule,
} from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';

export default {
  title: 'Components/Time Picker',
  component: TimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        FormsModule,
        TimePickerSeparatedModule,
      ],
    }),
  ],
  argTypes: Metadata.ArgTypes,
  args: Metadata.ControlsDefaultValues,
  parameters: {
    design: {
      url: FigmaURL.TimePicker.design,
    },
    badges: [BADGE.STABLE],
    version: '1.5.0',
  },
} as Meta;

export const Default: Story<TimePickerComponent> = {
  args: {
    allowsNullValue: Metadata.ControlsDefaultValues.allowsNullValue,
    setDefaultValue: Metadata.ControlsDefaultValues.setDefaultValue,
    time: Metadata.ControlsDefaultValues.time,
    value: Metadata.ControlsDefaultValues.value,
  },
  render: (args: TimePickerComponent) => ({
    props: {
      ...args,
    },
    template: `
      <ui-kit-time-picker
        [time]="time"
        [value]="value"
        [setDefaultValue]="setDefaultValue"
        [allowsNullValue]="allowsNullValue"
      ></ui-kit-time-picker>
    `,
  }),
};

export const WithTime: Story<TimePickerComponent> = {
  args: {
    ...Default.args,
    time: 3600,
    value: ''
  },
  render: (args: TimePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-picker
        [time]="time"
      ></ui-kit-time-picker>
    `,
  }),
};

export const WithValue: Story<TimePickerComponent> = {
  args: {
    ...Default.args,
    time: undefined,
    value: '10:50'
  },
  render: (args: TimePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-picker
        [value]="value"
      ></ui-kit-time-picker>
    `,
  }),
};

export const WithDefaultValue: Story<TimePickerComponent> = {
  args: {
    ...Default.args,
    time: undefined,
    value: ''
  },
  render: (args: TimePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-picker></ui-kit-time-picker>
    `,
  }),
};

export const WithNullValue: Story<TimePickerComponent> = {
  args: {
    ...Default.args,
    allowsNullValue: true,
    setDefaultValue: false,
    time: undefined,
    value: null
  },
  render: (args: TimePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-picker
        [allowsNullValue]="allowsNullValue"
        [setDefaultValue]="setDefaultValue"
        [value]="value"
      ></ui-kit-time-picker>
    `,
  }),
};
