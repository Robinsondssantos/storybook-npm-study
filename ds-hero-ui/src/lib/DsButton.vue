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
        validator(v) {
          return [
            'primary', 
            'secondary', 
            'warning', 
            'error', 
            'success'
          ].includes(v)
        }
      },
      size: {
        type: String,
        default() {
          return 'default'
        },
        validator(v) {
          return [
            'x-small', 
            'small', 
            'large',
             'x-large'
          ].includes(v)
        }
      },
      variant: {
        type: String,
        default() {
          return 'elevated'
        },
        validator(v) {
          return [
            'flat', 
            'tonal', 
            'outlined', 
            'text', 
            'plain'
          ].includes(v)
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