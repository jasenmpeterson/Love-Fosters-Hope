<template>
  <div class="page__wrap">
    <siteHeader/>
    <nuxt/>
    <siteFooter/>
  </div>
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
