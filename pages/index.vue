<template>
  <header>
    <div class="section__wrap">
      <ourMissionComponent/>
    </div>
  </header>
</template>
<script>
  // TODO - Dynamic meta name and content
  import axios from 'axios'
  import ourMissionComponent from '../components/ourMission.vue'
  export default {
    async asyncData ({ store, params }) {
      let [ourMission, ourCamps] = await Promise.all([
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/5'),
        axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/9')
      ])
      const missionData = {
        mission: ourMission.data
      }
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
