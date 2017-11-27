<template>
  <div class="component__wrap tint" v-if="pageData.missionData" v-bind:style="{ backgroundImage: 'url(' + pageData.missionData.mission.better_featured_image.source_url + ')' }">
    <div class="content__wrap" v-for="(componentData, index) in pageData.missionData" v-bind:key="index">
      <div class="cell">
        <article class="testimonial" v-html="componentData.acf.testimonial"></article>
      </div>
      <div class="cell">
        <div class="wrap">
          <h2 v-html="componentData.title.rendered"></h2>
          <article v-html="componentData.content.rendered"></article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        backgroundImage: null
      }
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
    display: flex;
    align-items: center;
    background-size: cover !important;
    background-position: center center !important;
    color: #fff;
    box-shadow: inset 0 -15px 15px -15px rgba(0,0,0,.5);
  }
  .cell {
    width: 50%;
  }
  article.testimonial,
  .wrap {
    padding: 0 3.5rem;
  }
  article >>> h1 {
    margin-bottom: 3.5rem;
  }
  .wrap >>> h2 {
    font-size: 2rem;
  }
  .wrap >>> p:last-child {
    margin-top: 1.5rem;
  }
  .testimonial >>> p {
    border-bottom: 1px solid #fff;
    padding-bottom: 1.5rem;
  }
  article >>> p:last-child,
  .wrap >>> p:last-child {
    font-weight: 700;
  }
</style>
