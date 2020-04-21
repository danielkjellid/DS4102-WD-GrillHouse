<!-- component to display a panel -->
<template>
  <div class="panel">
    <slot name="panel-blocks">
      <!-- slot for content blocks -->
      <!-- as there can be more than one block, a slot is more logcal to use then a for loop and an item -->
    </slot>
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
  name: 'PanelList',
  props: {
    panelTitle: {
      type: String,
      required: true,
      default: 'Panel title'
    }
  }
}
</script>

<style scoped>
  .panel {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    position: relative;
  }
</style>