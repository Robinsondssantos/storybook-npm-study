import { DsTemperatureCard } from "../../lib/index.js";

export default {
  title: 'DS/Card',
  component: DsTemperatureCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {}
};

const Template = (args) => ({
  components: { DsTemperatureCard },

  setup() {
    return { args }
  },

  template: '<ds-temperature-card v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {}