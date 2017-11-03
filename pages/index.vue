<template>
  <div class="wrap">
    <ourMission/>
    <ourCamps/>
    <featuredNeed/>
  </div>
</template>
<script>
  // TODO - Dynamic meta name and content
  // TODO - Camps Section
  import axios from 'axios'
  import ourMission from '../components/ourMission.vue'
  import ourCamps from '../components/ourCamps.vue'
  import featuredNeed from '../components/featuredNeed.vue'
  export default {
    // retrieve data and commit it so that page components can access via the store.
    async asyncData ({ store, params }) {
      let [ourMission, ourCamps, featuredNeed] = await Promise.all([
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/5'),
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/9'),
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/needed_now')
      ])
      // our mission
      const missionData = {
        mission: ourMission.data
      }
      // our camps
      const campsData = {
        camps: ourCamps.data
      }
      // featured need
      const featuredNeedData = {
        featuredNeed: featuredNeed.data
      }
      const pageData = {
        missionData,
        campsData,
        featuredNeedData
      }
      store.commit('setPageData', pageData)
    },
    head () {
      return {
        title: `Love Fosters Hope — Home`,
        meta: [
          {
            name: 'description',
            content: 'This is the meta description of the content.'
          }
        ]
      }
    },
    data () {
      return {
        title: 'default'
      }
    },
    components: {
      ourMission,
      ourCamps,
      featuredNeed
    }
  }
</script>
