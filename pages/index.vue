<template>
  <div class="wrap">
    <ourMissionComponent/>
  </div>
</template>
<script>
  // TODO - Dynamic meta name and content
  import axios from 'axios'
  import ourMissionComponent from '../components/ourMission.vue'
  export default {
    // retrieve data and commit it so that page components can access via the store.
    async asyncData ({ store, params }) {
      let [ourMission, ourCamps] = await Promise.all([
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/5'),
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/9')
      ])
      // our mission
      const missionData = {
        mission: ourMission.data
      }
      // our camps
      const campsData = {
        camps: ourCamps.data
      }
      const pageData = {
        missionData,
        campsData
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
      ourMissionComponent
    }
  }
</script>
