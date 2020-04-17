<template>
  <v-btn :width="width" link dark :color="'#4633E8'" :elevation="0">{{ buttonText }}</v-btn>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
      default: 'Button text'
    },
    width: {
      type: String,
      required: true,
      default: 'auto'
    }
  }
}
</script>