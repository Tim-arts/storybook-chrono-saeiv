import { ActionBarComponent } from '@ngx-chrono-ui-kit/core';

export const ControlsDefaultValues: ActionBarComponent = {
  draggable: true,
  draggableBoundary: 'body',
  fragmented: false,
  direction: 'horizontal',
};

export const ArgTypes = {
  draggable: {
    description: 'Whether the action bar should be draggable or not. If true, it\'ll display the corresponding icon',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.draggable,
      },
    },
  },
  draggableBoundary: {
    type: {
      name: 'string',
      required: false,
    },
    description: `Node or selector that will be used to determine the element to which the draggable's position will be constrained. If a string is passed in, 
    it'll be used as a selector that will be matched starting from the element's parent and going up the DOM until a match has been found`,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.draggableBoundary,
      },
    },
  },
  fragmented: {
    description: 'Whether the component includes separated icons',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.fragmented,
      },
    },
  },
  direction: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Which direction to display the component',
    control: {
      type: 'radio',
    },
    options: ['horizontal', 'vertical'],
    table: {
      type: {
        summary: 'string',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.direction,
      },
    },
  },
};
