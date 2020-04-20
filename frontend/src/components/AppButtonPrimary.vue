<!-- component to display a secondary button -->
<!-- app component, does not contain logic or have dependancies -->
<template>
  <v-btn :width="width" link dark :color="'#4633E8'" :elevation="0">{{ buttonText }}</v-btn>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  props: {
    buttonText: {
      type: String,
      required: true,
      default: 'Button text'
    },
    width: {
      type: String,
      required: false,
      default: 'auto'
    },
  }
}
</script>