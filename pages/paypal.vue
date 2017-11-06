<template>
  <div>
    paypal
  </div>
</template>
<script>
  import paypalTokenRequest from '../paypal/tokenRequest'
  import paypalExecutePayment from '../paypal/executePayment'
  export default {
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
            console.log(result)
          }).catch(error => {
            console.log(error)
          })
      }
    },
    mounted () {
      this.payPal()
    }
  }
</script>
