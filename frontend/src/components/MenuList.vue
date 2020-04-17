<!-- component to display lists of products -->
<template>
  <div class="menu-list">
    <h1 class="menu-list__header">{{ title }}</h1>
    <div class="menu-list__content">
      <!-- use vuetify grid system -->
      <v-row dense justify="space-around">
        <slot name="menu-items">
          <!-- menu items -->
        </slot>
      </v-row>
    </div>
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
  name: 'MenuList',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    } 
  }
}
</script>

<style scoped>
  .menu-list {
    background-color: #fff;
    margin-top: 1rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .menu-list__header {
    font-size: 1.125rem;
    font-weight: 600;
    color: #2D3748;
    padding: 1.25rem 1.25rem 0 1.25rem;
  }

  @media only screen and (min-width: 768px){
    .menu-list__content {
      padding: 1.25rem;
    }
  }

  @media only screen and (min-width: 1280px){
    .menu-list__header {
      padding: 3rem 3rem 0 3rem
    }

    .menu-list__content {
      padding: 1.5rem 3rem 3rem 3rem;
      margin-right: 44px;
    }
  }
</style>