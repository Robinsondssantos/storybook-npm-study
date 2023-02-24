import { DsButton } from "../../lib/";

export default {
  title: 'DS/Button',
  component: DsButton,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'warning', 'error', 'success']
    },
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      // default: 'elevated'
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      // default: 'default'
    },
    loading: {
      control: { type: 'boolean' },
      // default: false
    },
    disabled: {
      control: { type: 'boolean' },
      // default: false
    }
  }
};

const Template = (args) => ({
  components: { DsButton },

  setup() {
    return { args }
  },

  template: '<ds-button v-bind="args">Button Test</ds-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'warning'
}