<template>
  <div class="component__wrap">
	  <h1 v-html="pageData.donate.title.rendered"></h1>
      <article v-html="pageData.donate.content.rendered"></article>
      <donateForm/>
  </div>
</template>
<script>
import axios from 'axios';
import donateForm from '../components/donateForm.vue';
import { mapGetters } from 'vuex';
export default {
	async asyncData({ store, params }) {
		let [donate] = await Promise.all([axios.get(`${store.state.wordpressAPI}/wp/v2/pages/18`)]);
		const donateData = {
			donate: donate.data
		};
		const pageData = donateData;
		store.commit('setPageData', pageData);
	},
	head() {
		return {
			title: 'Love Fosters Hope — Donations',
			meta: [
				{
					name: 'description',
					content: 'This is the meta description of the content.'
				}
			]
		};
	},
	data() {
		return {
			title: 'default'
		};
	},
	computed: {
		...mapGetters({
			pageData: 'pageData'
		})
	},
	components: {
		donateForm
	}
};
</script>
<style>
.component__wrap {
	margin: 12rem 0;
	width: 65%;
	margin: 12rem auto;
}

.component__wrap > h1 {
	font-size: 3rem;
	color: #fccd00;
}
</style>
