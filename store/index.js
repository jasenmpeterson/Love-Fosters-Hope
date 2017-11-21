import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
    state: {
      pageData: null,
      siteNavigation: null,
      pageOptions: null,
      payPalPaymentConfirmation: null
    },
    actions: {
      async nuxtServerInit ({ commit }) {
        return axios.all([
          axios.get('http://localhost.lovefostershope:9999/wp-json/wp-api-menus/v2/menus/5'),
          axios.get('http://localhost.lovefostershope:9999/wp-json/acf/v3/options/options')
        ]).then(axios.spread(function (navigation, pageOptions) {
          const navigationData = [navigation.data.items]
          commit('setSiteNavigation', navigationData)
          const pageOptionsData = [pageOptions.data]
          commit('setPageOptions', pageOptionsData)
        }))
      }
    },
    mutations: {
      setSiteNavigation (state, data) {
        state.siteNavigation = data
      },
      setPageOptions (state, data) {
        state.pageOptions = data
      },
      setPageData (state, data) {
        state.pageData = data
      },
      setPayPalConfirmationDetails (state, data) {
        state.payPalPaymentConfirmation = data
      }
    },
    getters: {
      navigation: state => {
        return state.siteNavigation
      },
      pageOptions: state => {
        return state.pageOptions
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
