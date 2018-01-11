<template>
  <div class="our__camps home__page" v-if="pageData.campsData">
    <div class="row" v-for="(componentData, index) in pageData.campsData" v-bind:key="index">
      <div class="col col-5">
        <article class="our__camps__content home__page" v-html="componentData.content.rendered"></article>
      </div>
      <div class="col col-7">
        <div class="our__camps__bg__placeholder"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NuxtLink from '../.nuxt/components/nuxt-link';
export default {
	components: { NuxtLink },
	computed: {
		...mapGetters({
			pageData: 'pageData'
		})
	}
};
</script>