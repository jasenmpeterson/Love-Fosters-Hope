<template>
  <div class="component__wrap" v-bind:style="{ backgroundImage: 'url(' + pageData.campsData.camps.better_featured_image.source_url + ')' }">
    <div class="content__wrap" v-for="(componentData, index) in pageData.campsData">
      <div class="cell">
        <h4 v-html="componentData.title.rendered"></h4>
        <article v-html="componentData.content.rendered"></article>
        <nuxt-link class="btn red" :to="componentData.slug"><span>Learn More</span></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import NuxtLink from '../.nuxt/components/nuxt-link'
  export default {
    components: {NuxtLink},
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
    box-shadow: inset 0 15px 15px -15px rgba(0,0,0,.5)
  }
  .cell {
    width: 50%;
    padding: 3.5rem;
  }
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
  }
  article >>> p:last-child {
    font-family: 'Merriweather';
    font-weight: 700;
    font-style: italic;
  }
</style>
