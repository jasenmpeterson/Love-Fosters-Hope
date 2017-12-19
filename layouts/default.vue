<template>
  <main>
      <siteHeader/>
      <div class="page__wrap">
        <nuxt/>
        <siteFooter/>
      </div>
  </main>
</template>

<script>
import siteHeader from '../components/siteHeader.vue';
import siteFooter from '../components/siteFooter.vue';
import social from '../components/social.vue';
export default {
	components: {
		siteHeader,
		siteFooter,
		social
	}
};
</script>
