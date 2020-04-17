<!-- component to display form shown in item modal -->
<!-- dependant on MenuItemModal -->
<template>
  <form>
    <div class="form__input">
      <label class="form__label" for="star-slider">Hvor mange stjerner vil du gi Cheese?</label>
      <v-slider
        id="star-slider"
        color="#4C51BF" 
        track-color="#667EEA" 
        v-model="starValue" 
        :tick-labels="tickLabels"
        :min="1"
        :max="5" 
        step="1" 
        ticks="always" 
        tick-size="4">
      </v-slider>
    </div>
    <div class="form__input">
      <label class="form__label" for="review">Hva synes du om Cheese?</label>
      <textarea v-model="review" id="review" class="form__input-textarea" rows="4"></textarea>
    </div>
    <app-btn-secondary @click.native="submitReview" buttonText="Publiser anmeldelse" width="100%"></app-btn-secondary>
  </form>
</template>

<script>
// App imports (components without logic and dependancy)
import ButtonSecondary from './AppButtonSecondary'

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'MenuItemModalForm',
  components: {
    'app-btn-secondary': ButtonSecondary
  },
  data() {
    return {
      starValue: 1,
      review: '',
      tickLabels: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    submitReview() {
      // TODO: create order

      // emit change to parent to close down form
      this.$emit('close-form');
    }
  }
}
</script>

<style>
  .v-slider__tick {
    background-color: #4C51BF !important;
  }
  .v-slider__tick-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #718096;
    margin-left: 2px;
  }

  .form__input {
    margin-bottom: 1rem;
  }

  .form__label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #2D3748;
  }

  .form__input-textarea {
    display: block;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #7F9CF5;
  }

</style>