<template>
  <div class="component__wrap margin__top__20" v-if="pageData.campsData">
    <div class="content__wrap" v-for="(componentData, index) in pageData.campsData" v-bind:key="index">
      <div class="cell cell__50">
        <div class="material__wrap --sharp__corners --no__shadow">
          <article class="header__yellow paragraph_white" v-html="componentData.content.rendered"></article>
        </div>
      </div>
      <div class="cell cell__50">
        <div class="background__yellow" style="height: 100%"></div>
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