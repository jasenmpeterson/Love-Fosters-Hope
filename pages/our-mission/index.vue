<template>
  <div class="wrap">

  </div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData ({ store, params }) {
    let [ourMission] = await Promise.all([axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/5')])
    const missionData = {
      ourMission: ourMission.data
    }
    const pageData = missionData
    store.commit('setPageData', pageData)
  },
  head () {
    return {
      title: 'Love Fosters Hope — Our Mission',
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
  }
}
</script>
<style scoped>

</style>
