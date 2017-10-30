<template>
  <div class="navigation__wrap">
    <ul>
      <li v-for="(page, index) in navigation[0]">
        <nuxt-link :to="page.object_slug">
          {{ page.title }}
        </nuxt-link>
      </li>
    </ul>
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
        navigation: 'navigation'
      })
    }
  }
</script>
<style scoped>
  .navigation__wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    visibility: visible;
    width: 300px;
    height: 100vh;
    background: linear-gradient(135deg, #FCCD00 20%, #E3B901 80%);
    transform: translate3d(-100%, 0, 0);
    transition: all 0.5s ease-out;
    padding: 2.5rem;
    box-shadow: inset 0 0 15px rgba(44,62,80,.3);
  }
  .navigation__wrap.open {
    visibility: visible;
    transition: transform 0.5s ease-out;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }
  li a {
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    padding: 0.9rem;
  }
  li:not(:last-child) {
    border-bottom: 1px solid rgba(255,255,255,.3);
  }
</style>
