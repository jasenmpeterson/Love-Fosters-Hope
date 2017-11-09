<template>
  <div class="component__wrap tint" v-bind:style="{ backgroundImage: 'url(' + pageData.payPalConfirmationData.payPal.better_featured_image.source_url + ')' }">
    <div class="content__wrap">
      <div class="cell">
        <div class="thank__you__message" v-for="(componentData, index) in pageData.payPalConfirmationData">
          <article v-html="componentData.content.rendered"></article>
        </div>
        <article class="payment__confirmation">
          <h1>Donation Summary</h1>
          <article v-for="(data, index) in payPalConfirmationDetails">
            <h2>Donation Amount: {{data.amount.total}}</h2>
            <h3>Donation For: {{data.item_list.items[0].name}}</h3>
            <h3>Transaction ID: {{data.related_resources[0].sale.id}}</h3>
            <article class="donation__description" v-html="data.description"></article>
          </article>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
  // TODO - Figure out why menu isn't working on this page.
  // TODO - Don't render page until paypal payment data is avaialble
  import axios from 'axios'
  import paypalTokenRequest from '../paypal/tokenRequest'
  import paypalExecutePayment from '../paypal/executePayment'
  import { mapGetters } from 'vuex'
  export default {
    async asyncData ({ store, params }) {
      let [payPal] = await Promise.all([
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/146')
      ])
      // paypal
      const payPalConfirmationData = {
        payPal: payPal.data
      }
      const pageData = {
        payPalConfirmationData
      }
      store.commit('setPageData', pageData)
    },
    data () {
      return {
        key: null,
        payerID: null,
        paymentID: null
      }
    },
    methods: {
      payPal: function () {
        return paypalTokenRequest.request()
          .then(result => {
            this.key = result.data.access_token
            this.paymentID = this.$route.query.paymentId
            this.payerID = this.$route.query.PayerID
            this.payPalExecutePayment(this.key, this.payerID, this.paymentID)
          }).catch(error => {
            console.log(error)
          })
      },
      payPalExecutePayment: function (key, payerID, paymentID) {
        return paypalExecutePayment.post(key, payerID, paymentID)
          .then(result => {
            this.payPalPaymentConfirmation(result)
          }).catch(error => {
            console.log(error)
          })
      },
      payPalPaymentConfirmation: function (result) {
        this.$store.commit('setPayPalConfirmationDetails', result.data.transactions)
      }
    },
    mounted () {
      this.payPal()
    },
    computed: {
      ...mapGetters({
        pageData: 'pageData',
        payPalConfirmationDetails: 'payPalConfirmationDetails'
      })
    }
  }
</script>
<style scoped>
  .component__wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-size: cover !important;
    background-position: center center !important;
    color: #fff;
    box-shadow: inset 0 -15px 15px -15px rgba(0,0,0,.5);
  }
  .content__wrap {
    max-width: 37.5rem;
    margin: 0 auto;
  }
  .thank__you__message {
    padding-top: 3.75rem;
  }
  .thank__you__message article >>> h1 {
    text-align: center;
    font-size: 3.75rem;
  }
  .thank__you__message article >>> p {
    font-family: 'Merriweather', Arial;
  }
  .thank__you__message article >>> p:not(:first-of-type) {
    font-weight: 700;
  }
  .thank__you__message article >>> p:not(:last-child) {
    font-style: italic;
  }
  .payment__confirmation h1 {
    font-size: 1.5rem;
    margin-top: 1.875rem;
    border-bottom: rgba(252,205,0, .2) 0.0625rem solid;
    padding-bottom: 1.40625rem;
    margin-bottom: 1.40625rem;
  }
  .payment__confirmation h2 {
    font-size: 1.125rem;
    border-bottom: rgba(255,255,255, .2) 0.0625rem solid;
    padding-bottom: 1.40625rem;
  }
  .payment__confirmation h3 {
    font-size: 1rem;
    font-family: 'Lato', Arial;
  }
  .donation__description >>> h2 {
    display: none;
  }
  .donation__description >>> p {
    font-size: 0.875rem;
    font-family: 'Merriweather', Arial;
  }
</style>
