<template>
  <v-btn
    :color="color"
    @click="onClick"
    :variant="variant"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    >
    <slot></slot>
  </v-btn>
</template>
  
<script>
  export default {
    name: 'ds-button',
    
    props: {
      color: {
        type: String,
        default: '',
        validator: function (v) {
          return ['primary', 'secondary', 'warning', 'error', 'success'].indexOf(v) !== -1
        }
      },
      size: {
        type: String,
        default: 'default',
        validator: function (v) {
          return ['x-small', 'small', 'large', 'x-large'].indexOf(v) !== -1
        }
      },
      variant: {
        type: String,
        default: 'elevated',
        validator: function (v) {
          return ['flat', 'tonal', 'outlined', 'text', 'plain'].indexOf(v) !== -1
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
    },
    methods: {
      onClick () {
        this.$emit('onClick')
      }
    }
  }
  </script>