<!-- component to show a list of payment items (cards) -->
<template>
  <div>
    <!-- use vuetifys radio group to controll data -->
    <v-radio-group v-model="cards">
      <app-panel-payment-item cardSummary="1234" :currentValue="cards" value="card-1" expiry="06/22"></app-panel-payment-item>
      <app-panel-payment-item cardSummary="5678" :currentValue="cards" value="card-2" expiry="05/21"></app-panel-payment-item>
    </v-radio-group>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
import PanelPaymentItem from './PanelPaymentItem'

export default {
  name: 'PanelPaymentList',
  components: {
    'app-panel-payment-item': PanelPaymentItem
  },
  data() {
    return {
      cards: 'card-1'
    }
  }
}
</script>

<style>

</style>