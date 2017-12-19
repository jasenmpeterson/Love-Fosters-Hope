<template>
  <div class="component__wrap">
    <div class="content__wrap">
      <div class="cell">
        <div class="wrap">
          <div class="cell">
            <h3>Featured Need</h3>
            <h1>{{pageData.featuredNeedData.featuredNeed[0].title.rendered}}</h1>
            <article v-html="pageData.featuredNeedData.featuredNeed[0].content.rendered"></article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NuxtLink from '../.nuxt/components/nuxt-link';
import donateForm from '../components/donateForm.vue';
export default {
	components: {
		NuxtLink,
		donateForm
	},
	computed: {
		...mapGetters({
			pageData: 'pageData'
		})
	}
};
</script>