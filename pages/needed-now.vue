<template>			
  <div class="wrap padding__top__10">
    <div class="component__wrap">
      <div class="content__wrap --center">
		<div class="cell cell__75">
			<article class="paragraph__yellow" v-if="pageData.content" v-html="pageData.content.rendered"></article>
		</div>
      </div>
	</div>
	<div class="component__wrap sub__content__wrap">
		<div class="content__wrap --center">
			<div class="cell cell__75">
				<article class="paragraph__white paragraph__bold" v-if="pageData.acf" v-html="pageData.acf.sub_content"></article>
			</div>
		</div>
	</div>
	<div class="component__wrap post__wrap">
		<div class="content__wrap">
			<div class="cell">
				<postList/>
			</div>
		</div>
	</div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import postList from '../components/postList.vue';

export default {
	async asyncData({ store, params }) {
		let [neededNow, neededNowPosts] = await Promise.all([
			axios.get(`${store.state.wordpressAPI}/wp/v2/pages/16`),
			axios.get(`${store.state.wordpressAPI}/wp/v2/needed_now`)
		]);
		const neededNowData = {
			neededNow: neededNow.data,
			neededNowPost: neededNowPosts.data
		};
		const pageData = neededNowData.neededNow;
		store.commit('setPageData', pageData);
		const postsData = neededNowData.neededNowPost;
		store.commit('setPosts', postsData);
	},
	head() {
		return {
			title: 'Love Fosters Hope — Needed Now',
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
		postList
	}
};
</script>