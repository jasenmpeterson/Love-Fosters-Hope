<template>
  <article></article>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
	async asyncData({ store, params }) {
		let [camp] = await Promise.all([
			axios.get(`${store.state.wordpressAPI}/wp/v2/needed__now?slug=${params.slug}`)
		]);
		const campData = {
			campData: camp.data
		};
		const pageData = campData;
		store.commit('setPageData', pageData);
	},
	head() {
		return {
			title: 'Love Fosters Hope — Our Mission',
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
	}
};
</script>
