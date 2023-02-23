<template>
  <v-btn
    :dark="dark"
    :color="customColoer"
    @click="onClick"
    :small="small"
    :large="large"
    depressed
    :text="text"
    :outlined="outlined"
    :block="block"
    :loading="loading"
    :disabled="disabled"
    >
    {{ title || 'Button' }}
  </v-btn>
</template>
  
<script>
  export default {
    // name: "app-button",
    props: {
      // valid: {
      //   type: Boolean,
      //   default: true,
      //   required: false
      // },
      // loading: {
      //   type: Boolean,
      //   required: false
      // },
      title: {
        type: String,
        required: false
      },
      color: {
        type: String,
        default: 'normal',
        validator: function (v) {
          return ['normal','primary','error'].indexOf(v) !== -1
        }
      },
      size: {
        type: String,
        default: 'medium',
        validator: function (v) {
          return ['small', 'medium', 'large'].indexOf(v) !== -1
        }
      },
      fill: {
        type: String,
        default: 'solid',
        validator: function (v) {
          return ['text', 'solid', 'outline'].indexOf(v) !== -1
        }
      },
      fullWidth: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // variant: {
      //   type: String,
      //   default: 'primary',
      //   validator: function (v) {
      //     return ['success','primary','secondary','destructive'].indexOf(v) !== -1
      //   }
      // }
    },
    computed: {
      small () {
        return this.size === 'small'
      },
      large () {
        return this.size === 'large'
      },
      text () {
        return this.fill === 'text'
      },
      outlined () {
        return this.fill === 'outline'
      },
      block () {
        return this.fullWidth
      },
      customColoer () {
        let color = null;
        if (this.color === 'primary') {
          color = '#a2c745'
        } else if (this.color === 'error' ) {
          color = '#d50000'
        }
        return color
      },
      dark () {
        return this.color !== 'normal'
      }  
    },
    methods: {
      onClick () {
        this.$emit('onClick')
      }
    }
  }
  </script>