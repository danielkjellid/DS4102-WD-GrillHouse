<!-- component to list reviews related to a menu item -->
<template>
  <div class="modal__content-reviews">
    <app-review-item v-for="review in 3" :key="review"></app-review-item>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

/// Module imports (components dependant on this one)
import ReviewItem from './ReviewItem'

export default {
  name: 'ReviewList',
  components: {
    'app-review-item': ReviewItem,
  }
}
</script>