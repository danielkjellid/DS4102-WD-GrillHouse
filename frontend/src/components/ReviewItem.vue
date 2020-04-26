<!-- component to display each review item related to a place -->
<!-- dependant on ReviewList -->
<template>
  <div class="modal__content-review">
    <div>
      <div class="review__avatar">
        <!-- avatar image -->
      </div>
    </div>
    <div class="review__content">
      <p class="review__content-name">Fornavn Etternavn</p>
      <p class="review__content-review">
        {{ this.reviews }}
      </p>
      <app-review-stars :starValue="4"></app-review-stars>
      <span class="review__content-timestamp">4 dager siden</span>
    </div>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
import ReviewStars from './AppReviewStars'

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'ReviewItem',
  components: {
    'app-review-stars': ReviewStars
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  methods: {
    getReviews() {
      return this.reviews = this.$store.getters.getReviews;
    }
  }
}
</script>

<style>
  .modal__content-review {
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
  }

  .review__avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: salmon;
  }

  .review__content {
    margin-left: 0.75rem; 
  }

  .review__content-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #2D3748; 
  }

  .review__content-review {
    font-weight: normal;
    font-size: 0.875rem;
    color: #718096;
    margin-top: 0.5rem !important;
    margin-bottom: 0.75rem !important;
  }

  .review__content-timestamp {
    font-weight: normal;
    font-size: 0.75rem;
    color: #718096;
  }
</style>