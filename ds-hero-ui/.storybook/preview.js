import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'
import { myCustomLightTheme } from "../src/plugins/vuetify";

export const globalTypes = {
  vuetify: {
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  }
}

export const decorators = [
  withVuetify
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}