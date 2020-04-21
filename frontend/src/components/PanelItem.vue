<!-- component to create content blocks inside panels -->
<!-- dependant on PanelList -->
<template>
  <div class="panel__block">
    <h1 v-if="blockTitle" class="panel__block-heading">{{ blockTitle }}</h1>
    <div class="panel__block-content">
      <slot name="block-content">
        <!-- slot for content -->
      </slot>
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
  name: 'PanelItem',
  props: {
    blockTitle: {
      type: String,
      required: false,
    }
  }
}
</script>

<style scoped>
  .panel__block {
    padding: 1.25rem 1.5rem 1.5rem 1.5rem;
    border-top: 1px solid #E9EEF4;
  }

  .panel__block:first-child {
    border-top: 0;
  }

  .panel__block-heading {
    font-size: 1rem;
    font-weight: normal;
    color: #2D3748;
    margin-bottom: 1.5rem;
  }
</style>