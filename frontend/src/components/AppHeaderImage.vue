<!-- component to dynamically change header image based on viewport -->
<!-- app component, does not contain logic or have dependancies -->
<template>
  <div>
    <!-- change image based on viewport -->
    <v-img 
      v-if="$vuetify.breakpoint.name == 'xs'" 
      :src="require('@/assets/images/' + imagePathMobile)" 
      :max-height="200" :min-width="'100%'" 
      :alt="'Image of burgers'"
    >
    </v-img>
    <v-img 
      v-else-if="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'md'" 
      :src="require('@/assets/images/' + imagePathTablet)" 
      :max-height="200" :min-width="'100%'" 
      :alt="'Image of burgers'"
    >
    </v-img>
    <v-img 
      v-if="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl'" 
      :src="require('@/assets/images/' + imagePathDesktop)" 
      :max-height="200" 
      :min-width="'100%'" 
      :alt="'Image of burgers'"
    >
    </v-img>
  </div>
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
    imagePathMobile: {
      type: String,
      required: false,
    },
    imagePathTablet: {
      type: String,
      required: false,
    },
    imagePathDesktop: {
      type: String,
      required: false,
    },
  }
}
</script>

<style>

</style>