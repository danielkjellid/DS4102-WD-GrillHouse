<!-- component to display a single item -->
<!-- dependant on MenuList -->
<template>
  <div v-if="typeof product != 'undefined'">
    <!-- when the menu item itself is clicked, we activate a modal to display more info -->
    <div class="menu-item" @click.stop="activateItemModal(product)">
      <div class="menu-item__info">
        <h2 class="menu-item__info-title">{{ product.name }}</h2>
        <p class="menu-item__info-price">{{ product.price | formatPrice | nokPrefix }}</p>
      </div>
      <div class="menu-item__meta">
        <div>
          <p class="menu-item__meta-desc">{{ product.desc }}</p>
          <div class="menu-item__meta-reviews">
            <!-- component to show star rating and color stars dynamically -->
            <app-review-stars :starValue="product.starValue"></app-review-stars>
            <span class="menu-item__meta-reviews-amount">{{ product.amountOfReviews }} anmeldelser</span>
          </div>
        </div>
        <div>
          <v-img class="menu-item__meta-img" :src="require('@/assets/images/products/' + product.image)" max-height="65px" max-width="100px"></v-img>
        </div>
      </div>
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
  name: 'MenuItem',
  components: {
    'app-review-stars': ReviewStars
  },
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    activateItemModal(object) {
      console.log(object.id)
      // emit event to parent so it can control data state 
      this.$emit('activate-item-modal', object.id);
    }
  }
}
</script>

<style scoped>
  .menu-item {
    border-bottom: 1px solid #E2E8F0;
    width: 100%;
    padding: 1.25rem;
    cursor: pointer;
  }

  .menu-item__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu-item__info-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #2D3748;
  }

  .menu-item__info-price {
    font-size: 0.875rem;
    font-weight: 400;
    color: #2D3748;
  }

  .menu-item__meta {
    display: flex;
    justify-content: space-between;
    margin-top: 0.75rem;
  }

  .menu-item__meta-desc {
    font-size: 0.875rem;
    font-weight: normal;
    color: #718096;
  }

  .menu-item__meta-reviews {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  .menu-item__meta-reviews-star {
    height: 1rem;
    width: 1rem;
    color: #CBD5E0;
  }

  .menu-item__meta-reviews-star--selected {
    color: #4633E8;
  }

  .menu-item__meta-reviews-amount {
    font-size: 0.75rem;
    font-weight: normal;
    color: #64748B;
    margin-left: 0.5rem;
  }

  .menu-item__meta-img {
    border-radius: 5px;
    margin-left: 1rem;
  }

  @media only screen and (min-width: 768px){
    .menu-item {
      width: 357px;
      background-color: #fff;
      border-radius: 6px;
      border-bottom: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
  }

  @media only screen and (min-width: 930px){
    .menu-item {
      width: 430px;
    }
  }
  

  @media only screen and (min-width: 1100px){
    .menu-item {
      width: 357px;
    }
  }

  @media only screen and (min-width: 1180px){
    .menu-item {
      width: 390px;
    }
  }

  @media only screen and (min-width: 1270px){
    .menu-item {
      width: 430px;
    }
  }

</style>