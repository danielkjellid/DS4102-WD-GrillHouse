<!-- component to display and color review stars dynamically -->
<!-- app component, does not contain logic or have dependancies -->
<template>
  <div class="star__conatainer">
    <svg 
      v-for="(star, index) in 5" 
      :key="index" class="star__star" 
      fill="currentColor" 
      :class="{'star__star--selected': index < starValue}"
    >
      <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z" />
    </svg>
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
  name: 'ReviewStars',
  props: {
    starValue: {
      type: Number,
      required: true,
      default: 0,
    }
  }
}
</script>

<style scoped>
  .star__container {
    display: flex;
    align-items: center;
  }

  .star__star {
    height: 1rem;
    width: 1rem;
    color: #CBD5E0;
  }

  .star__star--selected {
    color: #4633E8;
  }

</style>