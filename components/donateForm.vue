<template>
  <div class="form__wrap">
    <div class="form">
      <form>
        <label>Donation Amount:</label>
        <input type="text" v-model="amount" placeholder="0.00">
        <a href="javascript:void(0)" class="btn red" v-on:click="donateSubmit">Submit</a>
      </form>
    </div>
  </div>
</template>
<script>
  // TODO - Confirmation Page for Donation
  // TODO - Plugin input amount
  import paypalTokenRequest from '../paypal/tokenRequest'
  import paypalPayment from '../paypal/payment'
  export default {
    data () {
      return {
        key: null,
        donationDescription: this.donationDescription,
        donationTitle: this.donationTitle,
        amount: null
      }
    },
    props: [
      'donationTitle',
      'donationDescription'
    ],
    methods: {
      payPal: function () {
        return paypalTokenRequest.request()
          .then(result => {
            this.key = result.data.access_token
            this.payPalCreatePayment(this.key, this.amount)
          }).catch(error => {
            console.log(error)
          })
      },
      payPalCreatePayment: function (key, amount) {
        return paypalPayment.post(key, amount, this.donationDescription, this.donationTitle)
          .then(result => {
            const approvalURL = result.data.links[1].href
            window.location = approvalURL
            console.log(result)
          }).catch(error => {
            console.log(error)
          })
      },
      donateSubmit () {
        this.payPal()
      }
    }
  }
</script>
<style scoped>
  .form__wrap {
    margin-top: 2.5rem;
    text-align: left;
  }

  .btn {
    box-shadow: 0 0 0.625rem rgba(0,0,0,0.1);
  }
</style>
