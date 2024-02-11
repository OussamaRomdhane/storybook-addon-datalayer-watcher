# storybook-addon-datalayer-watcher

## Installation

First, install the package.

```sh
npm install --save-dev storybook-addon-datalayer-watcher
```

Then, register it as an addon in `.storybook/main.js`.

```js
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  // ...rest of config
  addons: [
    '@storybook/addon-essentials'
    'storybook-addon-datalayer-watcher', // 👈 register the addon here
  ],
};

export default config;
```

## Usage

This addon allows you to debug GTM dataLayer events in Storybook.

If your component pushes to the dataLayer array (directly or using a library), you can interact with it in Storybook and see the GTM events it triggers.

![Demo image](demo-screenshot.png)


## Credits

Thanks [@cmarcchen](https://github.com/cmarcchen) for the idea
