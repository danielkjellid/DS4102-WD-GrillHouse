<!-- component to display a single item -->
<template>
  <div>
    <div class="menu-item">
      <div class="menu-item__info">
        <h2 class="menu-item__info-title">{{ title }}</h2>
        <p class="menu-item__info-price">kr {{ (Math.round(price * 100) / 100).toFixed(2) }}</p>
      </div>
      <div class="menu-item__meta">
        <div>
          <p class="menu-item__meta-desc">{{ desc }}</p>
          <div class="menu-item__meta-reviews">
            <div class="d-flex align-center">
              <svg v-for="(star, index) in 5" :key="index" class="menu-item__meta-reviews-star" fill="currentColor" :class="{'menu-item__meta-reviews-star--selected': index < starValue}">
                <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z" />
              </svg>
            </div>
            <span class="menu-item__meta-reviews-amount">{{ amountOfReviews }} anmeldelser</span>
          </div>
        </div>
        <div>
          <v-img class="menu-item__meta-img" :src="require('@/assets/images/products/cheese.jpg')" max-height="65px" max-width="100px"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Item title'
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    desc: {
      type: String,
      required: true,
      default: 'Item description'
    },
    starValue: {
      type: Number,
      required: true,
      default: 0,
    },
    amountOfReviews: {
      type: Number,
      required: true,
      default: 0,
    }
  }
}
</script>

<style scoped>
  .menu-item {
    border-bottom: 1px solid #E2E8F0;
    width: 100%;
    padding: 1.25rem;
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

  @media only screen and (min-width: 1280px){
    .menu-item {
      width: 430px;
    }
  }

</style>