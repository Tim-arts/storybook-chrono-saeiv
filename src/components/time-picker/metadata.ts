import { TimePickerComponent } from '@ngx-chrono-ui-kit/core';

export const ControlsDefaultValues: TimePickerComponent = {
  allowsNullValue: false,
  setDefaultValue: true,
  time: 3600,
  value: '13:50',
  getTime: function(): number {
    return this.time;
  },
  getValue: function(): string | null {
    if (this.value !== undefined) {
      return this.value;
    } else {
      return null;
    }
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
  time: {
    type: {
      name: 'number',
      required: false,
    },
    description: `Allows to initialize the component with a numeric value. For example: a value of \`3600\` seconds would set the value to \`01:00\` hour.
    \n\`time\` takes precedence over \`value\` and \`setDefaultValue\``,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.time,
      },
    },
  },
  value: {
    type: {
      name: 'string',
      required: false,
    },
    description: `The value displayed to the user.
    \n\`value\` takes precedence over \`setDefaultValue\``,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.value,
      },
    },
  },
  getTime: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to get the picker time`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
      defaultValue: {
        summary: ControlsDefaultValues.getTime(),
      },
    },
  },
  getValue: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to get the picker value`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
      defaultValue: {
        summary: ControlsDefaultValues.getValue(),
      },
    },
  },
};
