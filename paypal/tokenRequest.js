import axios from 'axios'

export default {
  request () {
    const basicAuthCreds = window.btoa('AYZHDYBO6yx3aNpQcMiYKgLktBi8sXi0Iw5FIS1yquqitfHnwiCNh5F5lWgv9ZG-sjyE_pwCSbn9qUW6:EHEwm6hDTmfmevEXVqGydCVyExSdBUUH6QmaSQSTzxvnAw0wDsdOYEtOLhShLU0ajb-xi47MiWYxbgIm')

    let config = {
      method: 'post',
      baseURL: 'https://api.sandbox.paypal.com/v1/oauth2/',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en_US',
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + basicAuthCreds
      },
      data: 'grant_type=client_credentials'
    }
    return axios.request('/token', config)
  }
}
