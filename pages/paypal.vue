<template>
  <div class="component__wrap tint" v-bind:style="{ backgroundImage: 'url(' + pageData.payPalConfirmationData.payPal.better_featured_image.source_url + ')' }">
    <div class="content__wrap">
      <div class="cell">
        <div class="thank__you__message" v-for="(componentData, index) in pageData.payPalConfirmationData">
          <article v-html="componentData.content.rendered"></article>
        </div>
        <article class="payment__confirmation">
          <div class="modal" v-bind:class="[isActive ? activeClass : '']">
            <svg version="1.1" class="svg-loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" xml:space="preserve">
              <path id="spinner" fill="#FFFFFF" d="M40,72C22.4,72,8,57.6,8,40C8,22.4,22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,28,28,28c.1,0,2,0.9,2,2S41.1,72,40,72z">
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="0.6s" repeatCount="indefinite"/>
              </path>
            </svg>
            <p>Loading Donation Summary...</p>
          </div>
          <article v-for="(data, index) in payPalConfirmationDetails">
            <h1>Donation Summary</h1>
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
  // TODO - Check for existence of data before executing payPal() - need to show existing data in the event of page refresh.
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
        paymentID: null,
        isActive: true,
        activeClass: 'active'
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
            this.isActive = false
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
  .payment__confirmation {
    position: relative;
    margin-top: 1.875rem;
  }
  .payment__confirmation h1 {
    font-size: 1.5rem;
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
  .modal {
    position: absolute;
    top: 0;
  }
  .modal p {
    color: #fff;
  }
</style>
