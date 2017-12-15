<template>			
  <div class="wrap">
    <div class="component__wrap header__wrap">
      <div class="content__wrap">
				<div class="cell">
					<div class="title__wrap" v-if="pageData.title">
            <h1>{{pageData.title.rendered}}</h1>
            <div class="line__icon">
              <span></span>
              <img src="icons/mbri-hearth-bold.svg">
            </div>
          </div>
					<article v-if="pageData.content"v-html="pageData.content.rendered"></article>
				</div>
      </div>
		</div>
		<div class="component__wrap sub__content__wrap">
			<div class="content__wrap">
				<div class="cell">
					<article v-if="pageData.acf" v-html="pageData.acf.sub_content"></article>
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
<style scoped>
.post__wrap {
	margin-top: 2rem;
	margin-bottom: 6rem;
}

.cell {
	position: relative;
}

.header__wrap {
	background-size: cover !important;
	background-position: center center;
	position: relative;
	color: #fff;
	margin-top: 15rem;
}

.header__wrap .content__wrap,
.sub__content__wrap .content__wrap {
	justify-content: center;
	position: relative;
	z-index: 2;
}

.header__wrap .content__wrap .cell,
.sub__content__wrap .content__wrap .cell {
	max-width: 61.875rem;
	align-self: center;
}

.header__wrap article>>>h1 {
	color: #fccd00;
	font-weight: 400;
	font-size: 2.5rem;
}

.sub__content__wrap {
	padding-bottom: 6rem;
}

.sub__content__wrap article>>>p {
	color: #6c6d71;
	font-family: 'Merriweather';
}

.sub__content__wrap .cell:after {
	display: block;
	content: url(/static/icons/hearts_big_small.svg);
	width: 5rem;
	position: absolute;
	right: 0;
	top: -5rem;
}
</style>
