<template>
  <v-dialog max-width="540px" width="540px" :value="active" @input="closeModal">
    <v-card class="mx-auto modal">
      <v-img class="menu-item__meta-img" :src="require('@/assets/images/products/cheese.jpg')" max-height="205px" min-width="100%"></v-img>
      <div class="modal__header">
        <div class="modal__header-info">
          <h2 class="modal__header-info-title">Cheese</h2>
          <app-review-stars :starValue="4"></app-review-stars>
        </div>
        <p class="modal__header-desc">
          Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.
        </p>
      </div>
      <div class="modal__content">
        <div class="modal__content-form">
           <app-btn-secondary :buttonText="'Skriv en anmeldelse'" width="100%"></app-btn-secondary>
        </div>
        <div class="modal__content-reviews">
          <div class="modal__content-review">
            <div>
              <div class="modal__content-review-avatar">
                
              </div>
            </div>
            <div class="modal__content-review-content">
              <p class="modal__content-review-content-name">Fornavn Etternavn</p>
              <p class="modal__content-review-content-review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet mauris in nulla vehicula interdum.
              </p>
              <app-review-stars :starValue="4"></app-review-stars>
              <span class="modal__content-review-content-timestamp">4 dager siden</span>
            </div>
          </div>
          <div class="modal__content-review">
            <div>
              <div class="modal__content-review-avatar">
                <!-- avatar image -->
              </div>
            </div>
            <div class="modal__content-review-content">
              <p class="modal__content-review-content-name">Fornavn Etternavn</p>
              <p class="modal__content-review-content-review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet mauris in nulla vehicula interdum.
              </p>
              <app-review-stars :starValue="4"></app-review-stars>
              <span class="modal__content-review-content-timestamp">4 dager siden</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <div class="modal__footer-amount-controller">
          <v-btn @click="decreaseAmount" icon color="#4633E8">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="modal__footer-amount-amount">{{ itemAmount }}</span>
          <v-btn @click="increaseAmount" icon color="#4633E8">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <app-btn-primary :buttonText="'Legg til i kurven'"></app-btn-primary>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ButtonPrimary from './AppButtonPrimary'
import ButtonSecondary from './AppButtonSecondary'
import ReviewStars from './ReviewStars'

export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  components: {
    'app-btn-primary': ButtonPrimary,
    'app-btn-secondary': ButtonSecondary,
    'app-review-stars': ReviewStars
  },
  data() {
    return {
      itemAmount: 1,
    }
  },
  methods: {
    increaseAmount() {
      this.itemAmount += 1;
    },
    decreaseAmount() {
      this.itemAmount -= 1;
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
  .v-dialog {
    margin: 1rem;
  }

  .modal {
    position: relative;
  }

  .modal-close {

  }

  .modal__header {
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    border-bottom: 1px solid #E2E8F0;
  }

  .modal__header-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal__header-info-title {
    font-weight: 700;
    font-size: 1rem;
    color: #2D3748;
  }

  .modal__header-desc {
    font-weight: normal;
    font-size: 0.875rem;
    color: #718096;
  }

  .modal__content {
    overflow-y: auto;
  }

  .modal__content-form {
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    border-bottom: 1px solid #E2E8F0;
  }

  .modal__content-form-btn {
    background-color: #fff;
    border: 1px solid #E2E8F0;
    color: #2D3748;
    font-size: 0.875rem;
    font-weight: 500;
    width: 100%;
    padding: 0.75rem 0 0.75rem 0;
    border-radius: 4px;
  }

  .modal__content-form-btn:hover {
    background-color: #F7FAFC;
  }

  .modal__content-review {
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
  }

  .modal__content-review-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: salmon;
  }

  .modal__content-review-content {
    margin-left: 0.75rem; 
  }

  .modal__content-review-content-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #2D3748; 
  }

  .modal__content-review-content-review {
    font-weight: normal;
    font-size: 0.875rem;
    color: #718096;
    margin-top: 0.5rem !important;
    margin-bottom: 0.75rem !important;
  }

  .modal__content-review-content-timestamp {
    font-weight: normal;
    font-size: 0.75rem;
    color: #718096;
  }

  .modal__footer {
    background-color: #F7FAFC;
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal__footer-amount-controller {
    display: flex;
    align-items: center;
  }

  .modal__footer-amount-amount {
    font-size: 1.5rem;
    font-weight: normal;
    color: #2D3748;
  }
</style>