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
      <p class="review__content-name">{{review.reviewer}}</p>
      <p class="review__content-review">
        {{review.reviewText}}
      </p>
      <app-review-stars :starValue="review.starValue"></app-review-stars>
      <!-- format date so it says 'x days since' instead of date -->
      <span v-if="formatDate(review.timeStamp) != 0 " class="review__content-timestamp">{{formatDate(review.timeStamp)}} dager siden</span>
      <!-- if the date is today, write 'today' -->
      <span v-else class="review__content-timestamp">I dag</span>
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
    review: {
      type: Object,
      required: true
    }
  },
  methods: {
    getReviews() {
      return this.reviews = this.$store.getters.getReviews
    },
    // method for formatting the date
    formatDate(date) {
      const today = new Date()
      // returns calculated difference between today and the date, so it displays x days since 
      return Math.round((today-date)/(1000*60*60*24))
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