<template>
  <div class="navigation__wrap">
    <nuxt-link to="/" class="logo__container">
      <img src="logo/logo.svg">
    </nuxt-link>
    <ul>
      <li v-for="(page, index) in navigation.data">
        <nuxt-link :to="page.slug">
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
