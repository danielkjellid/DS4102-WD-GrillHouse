<!-- component to display a payment block indicating a card to use to pay for an order -->
<!-- dependant on PanelPaymentList -->
<template>
  <!-- set active state if the radio is selected -->
  <div class="panel__block-content-payment-box" :class="{'panel__block-content-payment-box--active' : currentValue === value}">
    <div class="panel__block-content-payment-box-info">
        <!-- radio buttons controls, and emmits, changes to parent -->
        <v-radio on-icon="mdi-checkbox-marked-circle" color="#9AE6B4" :label="'Kort **** ' + cardSummary" :value="value"></v-radio>
        <span class="panel__block-content-payment-box-info-text">- Utløper {{ expiry }}</span>
    </div>
    <div class="panel__block-content-payment-box-image">
      <svg width="56" height="18" viewBox="0 0 56 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M24.0432 17.565H19.5322L22.369 0.322754H26.8801L24.0432 17.565Z" fill="#1A1F71"/>
        <path d="M15.7188 0.322714L11.3938 12.171L10.8822 9.63537L9.34756 1.84409C9.34756 1.84409 9.16154 0.276611 7.20831 0.276611H0.0930105L0 0.599327C0 0.599327 2.18575 1.06035 4.74354 2.58172L8.69648 17.565H13.3935L20.6018 0.322714H15.7188Z" fill="#1A1F71"/>
        <path d="M51.2951 17.565H55.4341L51.8067 0.322754H48.1793C46.5051 0.322754 46.0865 1.61362 46.0865 1.61362L39.3433 17.565H44.0868L45.0169 15.0294H50.7836L51.2951 17.565ZM46.3191 11.4334L48.6908 4.97908L50.0395 11.4334H46.3191Z" fill="#1A1F71"/>
        <path d="M39.7153 4.47196L40.3664 0.783779C40.3664 0.783779 38.3667 0.0461426 36.3204 0.0461426C34.0882 0.0461426 28.7401 1.01429 28.7401 5.76282C28.7401 10.2347 35.0183 10.2808 35.0183 12.6321C35.0183 14.9833 29.3912 14.5684 27.531 13.0931L26.8799 16.9657C26.8799 16.9657 28.9261 17.9338 31.9955 17.9338C35.0648 17.9338 39.7618 16.3663 39.7618 12.0327C39.7618 7.56081 33.4371 7.14589 33.4371 5.2096C33.3906 3.13499 37.8086 3.41161 39.7153 4.47196Z" fill="#1A1F71"/>
        <path d="M10.8822 9.63537L9.34756 1.84409C9.34756 1.84409 9.16153 0.276611 7.20831 0.276611H0.0930105L0 0.599327C0 0.599327 3.44139 1.29086 6.74326 3.96479C9.85911 6.45431 10.8822 9.63537 10.8822 9.63537Z" fill="#F7B600"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="55.4808" height="17.8416" fill="white"/>
        </clipPath>
        </defs>
      </svg>
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
  name: 'PanelPaymentItem',
  props: {
    cardSummary: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
    },
    expiry: {
      type: String,
      required: true,
    },
    currentValue: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
  .panel__block-content-payment-box {
    border: 1px solid #E2E8F0;
    padding: 0.875rem 0.875rem 0.875rem 0.875rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .panel__block-content-payment-box--active {
    background-color: #F2FAF6;
    border: 1px solid #00685E;
  }

  .panel__block-content-payment-box-info {
    display: flex;
    align-items: center;
  }

  .panel__block-content-payment-box-info-text {
    font-size: 0.875rem;
    color: #718096;
    font-weight: normal;
    margin-left: 0.25rem;
  }

  .panel__block-content-payment-box-image {
    display: flex;
    align-items: center;
  }
</style>