<template>
  <div class="component__wrap">
    <div class="content__wrap" v-for="(componentData, index) in pageData.featuredNeedData">
      <div class="cell featured__need__background" v-bind:style="{ backgroundImage: 'url(' + pageData.featuredNeedData.featuredNeed[0].better_featured_image.source_url + ')' }"></div>
      <div class="cell">
        <div class="wrap">
          <div class="cell">
            <h3>Featured Need</h3>
            <h1>{{pageData.featuredNeedData.featuredNeed[0].title.rendered}}</h1>
            <article v-html="pageData.featuredNeedData.featuredNeed[0].content.rendered"></article>
            <donateForm :donationDescription="pageData.featuredNeedData.featuredNeed[0].content.rendered" :donationTitle="pageData.featuredNeedData.featuredNeed[0].title.rendered"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import NuxtLink from '../.nuxt/components/nuxt-link'
  import donateForm from '../components/donateForm.vue'
  export default {
    components: {
      NuxtLink,
      donateForm
    },
    computed: {
      // fetch navigation from store
      ...mapGetters({
        pageData: 'pageData'
      })
    }
  }
</script>
<style scoped>

  .component__wrap {
    height: 100vh;
    box-shadow: inset 0 15px 15px -15px rgba(0,0,0,.5)
  }

  .featured__need__background {
    background-size: cover !important;
    background-position: center center !important;
    height: 100vh;
  }

  .cell {
    width: 50%;
  }

  .wrap {
    padding: 3.5rem;
    display: flex;
    align-items: center;
    height: 100vh;
    text-align: center;
  }

  .wrap >>> .cell {
    width: 100%;
    position: relative;
  }

  .wrap >>> p {
    font-size: 1rem;
    color: #6C6D71;
    line-height: 1.5;
  }

  .wrap >>> h2 {
    font-family: 'MerriWeather';
    color: #6C6D71;
    font-weight: 400;
    font-size: 1.2rem;
  }

  h1,
  h3 {
    font-family: 'Lato'
  }

  h3 {
    font-size: 0.9rem;
    color: #C2C2C2;
    text-transform: uppercase;
    margin-bottom: 0;
  }

  h1 {
    color: #FCCD00;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }
</style>
