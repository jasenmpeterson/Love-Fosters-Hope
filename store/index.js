import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
    state: {
      pageData: null,
      siteNavigation: null,
      payPalPaymentConfirmation: null
    },
    actions: {
      async nuxtServerInit ({ commit }) {
        return axios.get('http://localhost.lovefostershope:9999/wp-json/wp-api-menus/v2/menus/5').then((response) => {
          const success = Object.is(response.statusText, 'OK')
          if (success) {
            const data = [response.data.items]
            commit('setSiteNavigation', data)
          }
        })
      }
    },
    mutations: {
      setSiteNavigation (state, data) {
        state.siteNavigation = data
      },
      setPageData (state, data) {
        state.pageData = data
      },
      setPayPalConfirmationDetails (state, data) {
        console.log(data)
        state.payPalPaymentConfirmation = data
      }
    },
    getters: {
      navigation: state => {
        return state.siteNavigation
      },
      pageData: state => {
        return state.pageData
      },
      payPalConfirmationDetails: state => {
        return state.payPalPaymentConfirmation
      }
    }
  })
}

export default store
