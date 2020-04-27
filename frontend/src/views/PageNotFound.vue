<!-- view that displays whenever a route is not found -->
<template>
  <div>
    <!-- display image with message with the error -->
    <!-- message can be cusomized, but defaults to "page not found" -->
    <app-404></app-404>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
import NotFound from '../components/App404'

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  components: {
    'app-404': NotFound
  }
}
</script>