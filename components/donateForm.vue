<template>
  <div class="form__wrap">
    <div class="form">
      <form>
        <label>Donation Amount:</label>
        <input type="text" v-model="amount" placeholder="0.00">
        <a href="javascript:void(0)" class="btn red" v-on:click="donateSubmit">Submit</a>
      </form>
    </div>
    <div class="modal" v-bind:class="[isActive ? activeClass : '']">
      <svg version="1.1" class="svg-loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" xml:space="preserve">
        <path id="spinner" fill="#F35D54" d="M40,72C22.4,72,8,57.6,8,40C8,22.4,22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,28,28,28c.1,0,2,0.9,2,2S41.1,72,40,72z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="0.6s" repeatCount="indefinite"/>
        </path>
      </svg>
      <p>Redirecting to PayPal...</p>
    </div>
  </div>
</template>
<script>
  // TODO - Form Validation.
  import paypalTokenRequest from '../paypal/tokenRequest'
  import paypalPayment from '../paypal/payment'
  export default {
    data () {
      return {
        key: null,
        description: this.donationDescription,
        title: this.donationTitle,
        amount: null,
        isActive: false,
        activeClass: 'active'
      }
    },
    props: [
      'donationTitle',
      'donationDescription'
    ],
    methods: {
      payPal: function () {
        this.isActive = true
        return paypalTokenRequest.request()
          .then(result => {
            this.key = result.data.access_token
            this.payPalCreatePayment(this.key, this.amount)
          }).catch(error => {
            console.log(error)
          })
      },
      payPalCreatePayment: function (key, amount) {
        return paypalPayment.post(key, amount, this.description, this.title)
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
  .modal {
    height: 0;
  }
  .modal.active {
    height: auto;
  }
</style>
