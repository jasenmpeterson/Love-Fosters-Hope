import axios from 'axios'

export default {
  post (key, payerID, paymentID) {
    let config = {
      method: 'post',
      baseURL: 'https://api.sandbox.paypal.com/v1/',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      data: {
        'payer_id': payerID
      }
    }
    return axios.request(`/payments/payment/${paymentID}/execute/`, config)
  }
}
