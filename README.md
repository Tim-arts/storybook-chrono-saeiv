![Chrono Logo](./src/assets/logo/chrono-logo.png)

## Installing

Run `npm i`

⚠ Note: to launch Storybook you need to install
the [UI Kit](https://dev.azure.com/projetsrtm/EXO%20UI%20Kit/_git/ngx-chrono-ui-kit) before. In order to make it work,
you have to install your folders inside the same folder:

`parent-folder` containing:

- ngx-chrono-ui-kit
- storybook-chrono-saeiv

## Local development

<br />To get more familiar with the UI Kit, you can check
its [dedicated](https://dev.azure.com/projetsrtm/EXO%20UI%20Kit/_git/ngx-chrono-ui-kit?path=/projects/core)
documentation.

Run `npm run local` to start the local server. The default port is [6006](http://localhost:6006), the app will launch
the webpage automatically and reload if you change any source files.

## Production development

Run `npm run build-storybook` to build the project. The build artifacts will be stored in the `dist/` directory.

[comment]: <> (## Running unit tests)

[comment]: <> (Run `ng test` to execute the unit tests via [Karma]&#40;https://karma-runner.github.io&#41;.)

[comment]: <> (## Running end-to-end tests)

[comment]: <> (Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.)

## Update Chromatic

To update Storybook online hosted on [Chromatic](https://www.chromatic.com/), you need to run `npm run chromatic`
