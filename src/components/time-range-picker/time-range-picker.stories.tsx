import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-7-0';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from "@angular/material/core";
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import {
  TimeRangePickerComponent,
  TimeRangePickerSeparatedModule,
} from '@ngx-chrono-ui-kit/core';

import * as Metadata from './metadata';
import FigmaURL from '../../figma/urls.json';

export default {
  title: 'Components/Time Range Picker',
  component: TimeRangePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        TimeRangePickerSeparatedModule,
      ],
    }),
  ],
  argTypes: Metadata.ArgTypes,
  args: Metadata.ControlsDefaultValues,
  parameters: {
    design: {
      url: FigmaURL.TimeRangePicker.design,
    },
    badges: [BADGE.STABLE],
    version: '1.7.0',
  },
} as Meta;

export const Default: Story<TimeRangePickerComponent> = {
  args: {
    allowsNullValue: Metadata.ControlsDefaultValues.allowsNullValue,
    endTime: Metadata.ControlsDefaultValues.endTime,
    endValue: Metadata.ControlsDefaultValues.endValue,
    setDefaultValue: Metadata.ControlsDefaultValues.setDefaultValue,
    startValue: Metadata.ControlsDefaultValues.startValue,
    startTime: Metadata.ControlsDefaultValues.startTime,
  },
  render: (args: TimeRangePickerComponent) => ({
    props: {
      ...args,
    },
    template: `
      <ui-kit-time-range-picker
        [allowsNullValue]="allowsNullValue"
        [endTime]="endTime"
        [endValue]="endValue"
        [setDefaultValue]="setDefaultValue"
        [startTime]="startTime"
        [startValue]="startValue"
      ></ui-kit-time-range-picker>
    `,
  }),
};

export const WithStartTimeAndEndTime: Story<TimeRangePickerComponent> = {
  args: {
    ...Default.args,
    endTime: 86340,
    endValue: '',
    startTime: 60,
    startValue: ''
  },
  render: (args: TimeRangePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-range-picker
        [endTime]="endTime"
        [startTime]="startTime"
      ></ui-kit-time-range-picker>
    `,
  }),
};

export const WithStartValueAndEndValue: Story<TimeRangePickerComponent> = {
  args: {
    ...Default.args,
    endTime: undefined,
    endValue: '20:00',
    startTime: undefined,
    startValue: '10:00'
  },
  render: (args: TimeRangePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-range-picker
        [endValue]="endValue"
        [startValue]="startValue"
      ></ui-kit-time-range-picker>
    `,
  }),
};

export const WithDefaultValue: Story<TimeRangePickerComponent> = {
  args: {
    ...Default.args,
    endTime: undefined,
    endValue: '',
    startTime: undefined,
    startValue: ''
  },
  render: (args: TimeRangePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-range-picker></ui-kit-time-range-picker>
    `,
  }),
};

export const WithNullValues: Story<TimeRangePickerComponent> = {
  args: {
    ...Default.args,
    allowsNullValue: true,
    endTime: undefined,
    endValue: null,
    setDefaultValue: false,
    startTime: undefined,
    startValue: null
  },
  render: (args: TimeRangePickerComponent) => ({
    props: args,
    template: `
      <ui-kit-time-range-picker
        [allowsNullValue]="allowsNullValue"
        [endValue]="endValue"
        [setDefaultValue]="setDefaultValue"
        [startValue]="startValue"
      ></ui-kit-time-range-picker>
    `,
  }),
};
