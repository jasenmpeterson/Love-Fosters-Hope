<template>
  <div class="form__wrap">
    <div class="form">
      <form>
        <label>Donation Amount:</label>
        <input type="text" placeholder="0.00">
        <a href="javascript:void(0)" class="btn red" v-on:click="donateSubmit">Submit</a>
      </form>
    </div>
  </div>
</template>
<script>
  import paypalTokenRequest from '../paypal/tokenRequest'
  import paypalPayment from '../paypal/payment'
  export default {
    data () {
      return {
        key: null
      }
    },
    methods: {
      payPal: function () {
        return paypalTokenRequest.request()
          .then(result => {
            this.key = result.data.access_token
            this.payPalCreatePayment(this.key)
          }).catch(error => {
            console.log(error)
          })
      },
      payPalCreatePayment: function (key) {
        return paypalPayment.post(key, '10.00')
          .then(result => {
            console.log(result)
            const approvalURL = result.data.links[1].href
            window.location = approvalURL
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
