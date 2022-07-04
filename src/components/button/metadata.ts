import { ButtonComponent } from '@ngx-chrono-ui-kit/core';

import { convertToText } from '../../shared/utils';

export const ControlsDefaultValues: ButtonComponent = {
  color: 'default',
  type: 'elevated',
  size: 'regular',
  icon: 'add',
  iconPosition: 'left',
  disabled: false,
  inverted: false,
  hasMenu: false,
  textContent: 'Button',
  rippleOptions: {
    disabled: false,
  },
};

export const ArgTypes = {
  color: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Theme color palette for the component',
    control: {
      type: 'radio',
    },
    options: ['default', 'primary', 'secondary', 'tertiary'],
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.color,
      },
    },
  },
  type: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Defines the type of the button',
    control: {
      type: 'radio',
    },
    options: [
      'elevated',
      'filled',
      'filled-tonal',
      'outlined',
      'text',
      'fab',
      'extended-fab',
    ],
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.type,
      },
    },
  },
  size: {
    type: {
      name: 'string',
      required: false,
    },
    description:
      'Defines the size of the button. Only working for FAB and text button with an icon',
    control: {
      type: 'radio',
    },
    options: ['mini', 'regular', 'large'],
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.size,
      },
    },
  },
  icon: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Defines the icon shown',
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.icon,
      },
    },
  },
  iconPosition: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Which direction to display the icon',
    control: {
      type: 'radio',
    },
    options: ['none', 'left', 'center', 'right'],
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.iconPosition,
      },
    },
  },
  disabled: {
    type: {
      name: 'boolean',
      required: false,
    },
    description: 'Whether the button is disabled',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.disabled,
      },
    },
  },
  inverted: {
    description: 'Whether the background is white',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.inverted,
      },
    },
  },
  hasMenu: {
    description: 'Whether the icon has a menu',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.hasMenu,
      },
    },
  },
  textContent: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Text displayed inside the button',
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.textContent,
      },
    },
  },
  rippleOptions: {
    type: {
      name: 'object',
      required: false,
    },
    description: 'Options for the ripple',
    control: {
      type: 'object',
    },
    table: {
      type: {
        summary: 'object',
      },
      category: 'Inputs',
      defaultValue: {
        summary: convertToText(ControlsDefaultValues.rippleOptions),
      },
    },
  },
};
