import { TimeRangePickerComponent } from '@ngx-chrono-ui-kit/core';

export const ControlsDefaultValues: TimeRangePickerComponent = {
  allowsNullValue: false,
  endTime: 7200,
  endValue: '15:30',
  setDefaultValue: true,
  startTime: 3600,
  startValue: '13:50',
  getStartTime: function(): number {
    return this.startTime;
  },
  getEndTime: function(): number {
    return this.endTime;
  },
  getStartValue: function(): string | null | undefined {
    return this.startValue;
  },
  getEndValue: function(): string | null | undefined {
    return this.endValue;
  },
};

export const ArgTypes = {
  allowsNullValue: {
    description: 'Whether the component should accept a value equal to `null`',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.allowsNullValue,
      },
    },
  },
  setDefaultValue: {
    description: 'Defines whether the component should set the time to the current time if no default value has been set',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.setDefaultValue,
      },
    },
  },
  startTime: {
    type: {
      name: 'number',
      required: false,
    },
    description: `Allows to initialize the start input with a numeric value. For example: a value of \`3600\` seconds would set the value to \`01:00\` hour.
    \n\`startTime\` takes precedence over \`startValue\` and \`setDefaultValue\``,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.startTime,
      },
    },
  },
  endTime: {
    type: {
      name: 'number',
      required: false,
    },
    description: `Allows to initialize the end input with a numeric value. For example: a value of \`3600\` seconds would set the value to \`01:00\` hour.
    \n\`endTime\` takes precedence over \`endValue\` and \`setDefaultValue\``,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.endTime,
      },
    },
  },
  startValue: {
    type: {
      name: 'string',
      required: false,
    },
    description: `Start value displayed to the user.
    \n\`value\` takes precedence over \`setDefaultValue\``,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.startValue,
      },
    },
  },
  endValue: {
    type: {
      name: 'string',
      required: false,
    },
    description: `End value displayed to the user.
    \n\`value\` takes precedence over \`setDefaultValue\``,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.endValue,
      },
    },
  },
  getStartTime: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to get the picker start time`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
      defaultValue: {
        summary: ControlsDefaultValues.getStartTime(),
      },
    },
  },
  getEndTime: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to get the picker end time`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
      defaultValue: {
        summary: ControlsDefaultValues.getEndTime(),
      },
    },
  },
  getStartValue: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to get the picker start value`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
      defaultValue: {
        summary: ControlsDefaultValues.getStartValue(),
      },
    },
  },
  getEndValue: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to get the picker end value`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
      defaultValue: {
        summary: ControlsDefaultValues.getEndValue(),
      },
    },
  },
};

