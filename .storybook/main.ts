const path = require('path');

// @ts-ignore
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },

    /**
     * Present including 'essential' Storybook addons, such as:
     *
     * - Actions - Storybook Addon Actions can be used to display data received by event handlers in Storybook.
     *    It's where the action you do are being logged.
     *
     * - Backgrounds - Storybook Addon Backgrounds can be used to change background colors inside the preview in Storybook.
     *
     * - Controls - Controls gives you a graphical UI to interact with a component's arguments dynamically, without needing to code.
     *    It creates an addon panel next to your component examples ('stories'), so you can edit them live.
     *
     * - Docs - Storybook Docs transforms your Storybook stories into world-class component documentation.
     *    - DocsPage: Out of the box, all your stories get a DocsPage. DocsPage is a zero-config aggregation
     *      of your component stories, text descriptions, docgen comments, props tables, and code examples into clean, readable pages.
     *    - MDX: If you want more control, MDX allows you to write long-form markdown documentation and stories in one file.
     *      You can also use it to write pure documentation pages and embed them inside your Storybook alongside your stories.
     *
     * - Viewport - Storybook Viewport Addon allows your stories to be displayed in different sizes and layouts in Storybook.
     *    This helps build responsive components inside of Storybook.
     *
     * - Toolbars - The Toolbars addon controls global story rendering options from Storybook's toolbar UI. It's a general purpose addon that can be used to:
     *    - set a theme for your components
     *    - set your components' internationalization (i18n) locale
     *    - configure just about anything in Storybook that makes use of a global variable
     *
     * @see https://github.com/storybookjs/storybook/tree/master/addons/essentials
     * @see https://github.com/storybookjs/storybook/tree/next/addons/actions
     * @see https://github.com/storybookjs/storybook/tree/next/addons/backgrounds
     * @see https://github.com/storybookjs/storybook/tree/next/addons/controls
     * @see https://github.com/storybookjs/storybook/tree/next/addons/docs
     * @see https://github.com/storybookjs/storybook/tree/next/addons/viewport
     * @see https://github.com/storybookjs/storybook/tree/next/addons/toolbars
     *
     * You can disable addons you don't want through configuration.
     * @see https://github.com/storybookjs/storybook/tree/master/addons/essentials#disabling-addons
     */
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: true,
      },
    },

    /**
     * This storybook addon can be helpful to make your UI components more accessible.
     *
     * Adds an 'Accessibility' tab.
     *
     * @see https://www.npmjs.com/package/@storybook/addon-a11y
     */
    '@storybook/addon-a11y',

    /**
     * A Storybook addon that embed Figma, websites, PDF or images in the addon panel.
     *
     * Adds a 'Design' tab.
     *
     * @see https://github.com/pocka/storybook-addon-designs
     */
    'storybook-addon-designs',

    /**
     * A Storybook addon that adds a status label to components.
     *
     * Adds a visual status label on a component page.
     *
     * @see https://github.com/geometricpanda/geometricpanda/tree/main/libs/storybook-addon-badges
     */
    '@geometricpanda/storybook-addon-badges',

    /**
     * A Storybook addon that includes SCSS by default in Storybook
     *
     * @see https://github.com/storybookjs/presets/tree/master/packages/preset-scss
     */
    '@storybook/preset-scss',

    /**
     * This addon is used to show stories source in the addon panel.
     *
     * Adds a 'Story' tab. Warning: currently, doesn't work with CSF3
     */
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: require('../../ngx-chrono-ui-kit/projects/prettier-config/index'),
        },
      },
    },
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  features: {
    postcss: false,
    buildStoriesJson: true,
    storyStoreV7: true,
    babelModeV7: true,
  },
  angularOptions: {
    enableIvy: true,
  },
  framework: '@storybook/angular',
};
