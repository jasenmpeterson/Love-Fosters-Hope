import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
    state: {
      pageData: null,
      siteNavigation: null
    },
    actions: {
      async nuxtServerInit ({ commit }) {
        return axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages').then((response) => {
          const success = Object.is(response.statusText, 'OK')
          if (success) {
            const data = [...response.data]
            const navigationData = {
              data: data.map(item => ({
                id: item.id,
                title: item.title.rendered,
                slug: item.slug
              }))
            }
            commit('setSiteNavigation', navigationData)
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
      }
    },
    getters: {
      navigation: state => {
        return state.siteNavigation
      },
      pageData: state => {
        return state.pageData
      }
    }
  })
}

export default store
