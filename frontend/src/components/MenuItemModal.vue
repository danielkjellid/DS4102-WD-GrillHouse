<!-- component to display item modal upon click -->
<template>
  <!-- set modal state to 'active' (true or false). This is controlled by parent through prop -->
  <!-- @input="closeModal" emits change to parent to close down modal when overlay is clicked -->
  <v-dialog max-width="540px" width="540px" :value="active" @input="closeModal">
    <v-card class="mx-auto modal">
      <v-btn @click="closeModal" class="modal-close" fab dark small color="#fff">
        <v-icon color="#4633E8">mdi-close</v-icon>
      </v-btn>
      <v-img class="menu-item__meta-img" :src="require('@/assets/images/products/cheese.jpg')" max-height="205px" min-width="100%"></v-img>
      <div class="modal__header">
        <div class="modal__header-info">
          <h2 class="modal__header-info-title">{{ product.name }}</h2>
          <!-- component that shows and color stars dynamically -->
          <app-review-stars :starValue="product.starValue"></app-review-stars>
        </div>
        <p class="modal__header-desc">{{ product.desc }}</p>
        <p class="modal__header-price">kr {{ product.price }}</p>
      </div>
      <div class="modal__content">
        <div class="modal__content-form">
          <!-- to dynamically switch between components in modal, we check if form is active -->
          <div v-if="!formActive">
            <!-- if it isnt, display component with seondary button styling to open form -->
            <app-btn-secondary @click.native="formActive = true" :buttonText="'Skriv en anmeldelse'" width="100%"></app-btn-secondary>
          </div>
          <div v-else>
            <!-- if it is, and review is not submitted -->
            <div v-if="!reviewSubmitted">
              <!-- display form -->
              <app-menu-item-modal-form @close-form="reviewSubmitted = true"></app-menu-item-modal-form>
            </div>
            <div v-else>
              <!-- if it is submitted, display confirmation message -->
              <v-alert type="success" text>Anmdelse publisert!</v-alert>
            </div>
          </div>
        </div>
        <!-- compoent to display reviews associated with the item -->
        <app-review-list></app-review-list>
      </div>
      <div class="modal__footer">
        <div class="modal__footer-amount-controller">
          <!-- buttons to increase and decrease amount -->
          <v-btn @click="decreaseAmount" icon color="#4633E8">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="modal__footer-amount-amount">{{ itemAmount }}</span>
          <v-btn @click="increaseAmount" icon color="#4633E8">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <!-- component to style the applications primary button -->
        <app-btn-primary :buttonText="'Legg til i kurven'"></app-btn-primary>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
// App imports (components without logic and dependancy)
import ButtonPrimary from './AppButtonPrimary'
import ButtonSecondary from './AppButtonSecondary'
import ReviewStars from './AppReviewStars'

// General imports (componetns with logic)
import ReviewList from './ReviewList'

// Module imports (components dependant on this one)
import MenuItemModalForm from './MenuItemModalForm'

export default {
  name: 'MenuItemModal',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    product: {
      type: Object,
      required: true,
    }
  },
  components: {
    'app-btn-primary': ButtonPrimary,
    'app-btn-secondary': ButtonSecondary,
    'app-review-stars': ReviewStars,
    'app-review-list': ReviewList,
    'app-menu-item-modal-form': MenuItemModalForm,
  },
  data() {
    return {
      itemAmount: 1,
      formActive: false,
      reviewSubmitted: false,
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
      // reset component data properties
      this.formActive = false;
      this.reviewSubmitted = false;

      // emit change to parent to change data state 
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
  .v-dialog {
    margin: 1rem;
  }

  .v-alert {
    margin-bottom: 0;
  }

  .modal {
    position: relative;
  }

  .modal-close {
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
    z-index: 10;
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
    margin-top: 0.5rem;
  }

  .modal__header-price {
    font-size: 0.875rem;
    font-weight: 500;
    color: #2D3748;
    margin-top: 0.5rem;
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