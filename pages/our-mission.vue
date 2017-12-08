<template>
  <div class="wrap">
    <div class="component__wrap" v-if="pageData.ourMission">
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
      <div class="content__wrap content__block__one">
        <div class="cell">
          <article v-html="pageData.ourMission.acf.our_mission_page_content.content_block"></article>
        </div>
      </div>
      <div class="content__wrap content__block__two">
        <div class="cell">
          <div class="title__wrap">
            <h1>{{pageData.ourMission.title.rendered}}</h1>
            <div class="line__icon">
              <span></span>
              <img src="icons/mbri-hearth-bold.svg">
            </div>
          </div>
          <article v-html="pageData.ourMission.acf.our_mission_page_content.content_block_b"></article>
        </div>
      </div>
    </div>
    <div class="content__wrap content__block__three" v-if="pageData.ourMission" v-bind:style="{ backgroundImage: 'url(' + pageData.ourMission.better_featured_image.source_url + ')' }">
        <div class="cell">
          <article v-html="pageData.ourMission.acf.our_mission_page_content.content_block_c"></article>
        </div>
    </div>
    <div class="content__wrap donate__wrap">
      <div class="cell">
        <donationsCTA/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import donationsCTA from '../components/donations-cta.vue'
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
  },
  components: {
    donationsCTA
  }
}
</script>
<style scoped>

  .component__wrap {
    padding-top: 12rem;
  }

  .content__wrap {
    padding: 0 6.5rem;
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

  .content__wrap .statistic__wrap .icon img {
    margin: 0 auto;
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
    padding-right: 3.5rem;
  }

  .icon__wrap {
    width: 2.5rem;
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

  .content__block__one {
    margin: 5rem 0;
  }

  .content__block__one .cell {
    max-width: 65%;
    margin-left: auto;
    border-left: 1px solid #F6F6F6;
    padding-left: 5rem;
    position: relative;
  }

  .content__block__one .cell:before {
    display: block;
    content: url(/static/icons/balloon_man.svg);
    width: 1.5rem;
    position: absolute;
    left: -5rem;
    top: 0;
  }

  .content__block__one .cell:after {
    display: block;
    content: url(/static/icons/hearts_big_small.svg);
    width: 5rem;
    position: absolute;
    right: 0;
    top: -1rem;
  }

  .content__block__one .cell >>> h1 {
    color: #F35D54;
    font-size: 2.5rem;
    font-weight: 900;
  }

  .content__block__one .cell >>> p,
  .content__block__two article >>> p {
    color: #6C6D71;
  }

  .content__block__two article >>> p {
    font-size: 1.6rem;
    font-weight: 300;
  }

  .content__block__two {
    max-width: 100%;
    margin: 8rem auto 2.5rem auto;
    position: relative;
  }

  .content__block__two:after {
    display: block;
    content: url(/static/icons/hearts_big_small.svg);
    width: 5.5rem;
    position: absolute;
    left: 2rem;
    bottom: -4rem;
  }

  .content__block__two article {
    position: relative;
  }

  .content__block__two article:after {
    display: block;
    content: url(/static/icons/mbri-hearth-bold.svg);
    width: 1.5rem;
    position: absolute;
    right: -2rem;
    bottom: 10rem;
    opacity: 0.5;
  }

  .content__block__two article >>> h1 {
    color: #FCCD00;
    font-size: 3rem;
  }

  .content__block__three {
    background-size: cover !important;
    background-position: center center !important;
    height: 100vh;
    justify-content: center;
    color: #fff;
    margin-top: 8rem;
  }

  .content__block__three .cell {
    max-width: 40%;
  }

  .donate__wrap {
    margin-bottom: 8rem;
  }

</style>
