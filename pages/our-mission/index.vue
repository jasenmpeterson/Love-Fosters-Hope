<template>
  <div class="wrap">
    <div class="component__wrap">
      <div class="content__wrap">
        <div class="statistic__wrap" v-for="(statisticsData, index) in pageData.ourMission.acf.our_mission_page_content.statistics" v-bind:key="index">
          <div class="icon">
            <div class="icon__wrap">
              <img src="icons/mbri-hearth-bold.svg">
            </div>   
          </div>
          <div class="stat statistic">
            <h1>{{statisticsData.statistic}}</h1>
          </div>
          <div class="stat">
            <h2>{{statisticsData.content}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
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
  },
  computed: {
  ...mapGetters({
    pageData: 'pageData'
  })
}
}
</script>
<style scoped>

  .component__wrap {
    padding-top: 15rem;
  }

  .content__wrap {
    max-width: 75rem;
    margin: 0 auto;
    flex-direction: column;
  }

  .statistic__wrap {
    display: flex;
    align-items: center;
  }

  .statistic__wrap .stat:last-of-type {
    width: 45%;
  }

  .statistic__wrap h1,
  .statistic__wrap h2 {
    margin: 0;
  }

  .statistic {
    padding-left: 2.5rem;
  }

  .statistic__wrap h1 {
    color: #FCCD00;
    font-family: 'Lato';
    font-size: 6.875rem;
  }

  .statistic__wrap h2 {
    color: #6C6D71;
    font-weight: 300;
    padding: 0 1.2rem;
  }

  .content__wrap .statistic__wrap:nth-of-type(odd) .icon img {
    width: 1rem;
  }

  .content__wrap .statistic__wrap:nth-of-type(even) .icon img {
    width: 2rem;
  }

  .icon {
    position: relative;
    display: flex;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    padding-right: 3.5rem;
  }

  .icon:after {
    display: block;
    content: '';
    position: absolute;
    background: #F6F6F6;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
  }
</style>
