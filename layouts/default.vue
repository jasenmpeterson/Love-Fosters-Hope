<template>
  <main>
    <div class="push__menu__container">
      <siteHeader/>
      <navigation/>
      <div class="page__wrap">
        <div class="page__wrap__inner">
          <nuxt/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import navigation from '../components/navigation.vue'
  import siteHeader from '../components/siteHeader.vue'
  export default {
    components: {
      navigation,
      siteHeader
    }
  }
</script>
