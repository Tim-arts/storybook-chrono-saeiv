import {
  AlertOptions,
  AlertStatuses,
  AlertTypes,
} from '@ngx-chrono-ui-kit/core';

import { convertToText } from '../../shared/utils';

export interface Interface {
  classes?: string | string[];
  content?: string;
  title?: string;
  type?: AlertTypes;
  toastOptions?: AlertOptions;
  status?: AlertStatuses;

  close(): void;
}

export const ControlsDefaultValues: Interface = {
  classes: ['additional-class'],
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  toastOptions: {
    allowsMultiple: true,
    duration: 5000,
    horizontalPosition: 'center',
    limit: 0,
    preventDuplicates: false,
    verticalPosition: 'top',
  },
  status: 'default',
  title: 'Default message.',
  type: 'alert',
  close: function(): void {
    //
  },
};

export const ArgTypes = {
  classes: {
    type: {
      name: 'string | array',
      required: false,
    },
    description:
      'A list of classes that can be added into the component wrapper',
    table: {
      type: {
        summary: 'string | array',
      },
      category: 'Inputs',
      defaultValue: {
        summary: convertToText(ControlsDefaultValues.classes),
      },
    },
  },
  content: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Defines the content of the alert',
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.content,
      },
    },
  },
  toastOptions: {
    type: {
      name: 'object',
      required: false,
    },
    description: `• \`allowsMultiple - boolean\` Sets if it's possible to display alerts simultaneously
    \n• \`duration - number\` The length of time in milliseconds to wait before automatically dismissing the alert
    \n• \`horizontalPosition - string\` The horizontal position to place the alert
    \n Possible values \`start\` \`left\` \`center\` \`right\` \`end\`
    \n• \`verticalPosition - string\` The vertical position to place the alert
    \n Possible values \`top\` \`bottom\`
    \n• \`preventDuplicates - boolean\` If preventDuplicates is true, toasts with the same title, content and status will not be rendered
    \n• \`limit - number\` Sets a limit of alerts displayed simultaneously. Only works when the \`stackable\` option is true
    If the number of alerts exceeds the allowed limit, the oldest alerts will be deleted. 0 is infinite
    `,
    table: {
      type: {
        summary: 'object',
      },
      category: 'Inputs',
      defaultValue: {
        summary: convertToText(ControlsDefaultValues.toastOptions),
      },
    },
  },
  status: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Defines the background-color of the component and its icon',
    control: {
      type: 'radio',
    },
    options: ['default', 'error', 'success', 'warning', 'information'],
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.status,
      },
    },
  },
  title: {
    type: {
      name: 'string',
      required: true,
    },
    description: 'Defines the title of the alert',
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.title,
      },
    },
  },
  type: {
    type: {
      name: 'string',
      required: false,
    },
    description: `Defines the type of the alert -
    \`Alert\` is a text alert shown to the user to display important information
    \`Inline\` is a contextual feedback usually located nearby a text
    \`Toast\` is a notification usually following user actions
    `,
    control: {
      type: 'radio',
    },
    options: ['alert', 'inline', 'toast'],
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
  close: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to close the toast. While closing it, emits an event containing the toast id to the parent component`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
    },
  },
};
