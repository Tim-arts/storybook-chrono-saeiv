import { MenuExpansionPanelComponent } from '@ngx-chrono-ui-kit/core';

import { convertToText } from '../../shared/utils';

export const ControlsDefaultValues: MenuExpansionPanelComponent = {
  title: { number: 20, text: 'Titre du menu' },
  disabled: false,
  expanded: true,
  hideToggle: false,
  hideClose: false,
  draggable: true,
  draggableBoundary: 'body',
  visible: true,
  headerIcons: [
    {
      icon: {
        fontIcon: 'edit',
        action: () => {
          return alert('Edit icon clicked!');
        },
      },
    },
    {
      icon: {
        fontIcon: 'close',
      },
    },
  ],
  togglePanelVisibility: function(): void {
    this.visible = !this.visible;
  },
};

export const ArgTypes = {
  title: {
    type: {
      name: 'object',
      required: true,
    },
    description: 'Allows to display a number followed by a title',
    table: {
      type: {
        summary: 'object',
      },
      category: 'Inputs',
      defaultValue: {
        summary: convertToText(ControlsDefaultValues.title),
      },
    },
  },
  disabled: {
    type: {
      name: 'boolean',
      required: false,
    },
    description: 'Whether the component is disabled',
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
  expanded: {
    description: 'Whether the component is expanded',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.expanded,
      },
    },
  },
  hideToggle: {
    description: 'Whether the chevron icon is displayed',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.hideToggle,
      },
    },
  },
  hideClose: {
    description: 'Whether the close icon is displayed',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.hideClose,
      },
    },
  },
  draggable: {
    description: 'Whether the draggable icon is displayed',
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
  visible: {
    description: 'Whether the component is visible',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Inputs',
      defaultValue: {
        summary: ControlsDefaultValues.visible,
      },
    },
  },
  headerIcons: {
    type: {
      name: 'array',
      required: false,
    },
    description:
      'A list of icons that can be added into the header, on the right side',
    table: {
      type: {
        summary: 'array',
      },
      category: 'Inputs',
      defaultValue: {
        summary: convertToText(ControlsDefaultValues.headerIcons),
      },
    },
  },
  togglePanelVisibility: {
    type: {
      name: 'function',
      required: false,
    },
    description: `Public method to toggle the panel visibility`,
    table: {
      type: {
        summary: 'function',
      },
      category: 'Methods',
    },
  },
};
