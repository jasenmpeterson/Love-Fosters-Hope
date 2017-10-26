<template>
  <main class="home">
    <navigation/>
    <nuxt/>
  </main>
</template>

<script>
  import navigation from '../components/navigation.vue'
  export default {
    components: {
      navigation
    }
  }
</script>
