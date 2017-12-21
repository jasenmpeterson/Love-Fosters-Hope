<template>
  <div class="component__wrap padding__top__10">
	  <div class="content__wrap --center">
		<div class="cell cell__75">
			<article class="header__yellow paragraph__white paragraph__bold" v-html="pageData.donate.content.rendered"></article>
			<donateForm/>
		</div>		  
	  </div>
  </div>
</template>
<script>
// TODO: https://www.behance.net/gallery/52021539/Charitystarscom-Website-Redesign?tracking_source=curated_galleries_list
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
