<template>
  <div class="component__wrap" v-if="pageData.campData">
	  <div class="row margin__top__10 margin__bottom__5">
		<div class="content__wrap" v-for="(data, index) in pageData.campData" v-bind:key="index">
			<div class="cell cell__75">
				<div class="material__wrap --small --sharp__corners date__wrapper">
					<span>{{data[0].acf.camp_page_content.date_information.start_date}} - {{data[0].acf.camp_page_content.date_information.end_date}} </span>
				</div>
			</div>
		</div>		  
	  </div>	  
	  <div class="row">
		<div class="content__wrap" v-for="(data, index) in pageData.campData" v-bind:key="index">
			<div class="cell cell__50">
				<div class="material__wrap --medium --sharp__corners header__yellow hearts__list">
					<h1>{{data[0].title.rendered}}</h1>
					<article v-html="data[0].content.rendered"></article>
				</div>
			</div>
			<div class="cell cell__50">
				<article class="header__yellow paragraph__white paragraph__bold padding__left__5 padding__right__5" v-html="data[0].acf.camp_page_content.content_block"></article>
			</div>
		</div>		  
	</div>	 
	<div class="row margin__bottom__10">
		<no-ssr>
			<carousel :perPage="2">
				<slide v-for="(data, index) in pageData.campsData.campsData" v-bind:key="index">
					<div class="material__wrap --medium height__100 flex --center --columns header__yellow">
						<h1>{{data.title.rendered}}</h1>
						<article v-html="$options.filters.truncate(data.content.rendered, '300')"></article>
						<nuxt-link :to="`/camps/${data.slug}`" class="btn --yellow">Learn More</nuxt-link>
					</div>
				</slide>
			</carousel>
		</no-ssr>
	</div>
	<div class="row margin__bottom__5">
		<div class="content__wrap" v-for="(data, index) in pageData.campData" v-bind:key="index">
			<div class="cell cell__50">
				<article class="header__yellow paragraph__white paragraph__bold padding__left__5 padding__right__5" v-html="data[0].acf.camp_page_content.content_block_b"></article>
			</div>
		</div>
	</div>
	<div class="row margin__bottom__10">
		<div class="content__wrap --flex__end" v-for="(data, index) in pageData.campData" v-bind:key="index">
			<div class="cell cell__50">
				<article class="header__yellow paragraph__white paragraph__bold padding__left__5 padding__right__5" v-html="data[0].acf.camp_page_content.content_block_c"></article>
			</div>
		</div>
	</div>
	<div class="row margin__top__5 margin__bottom__10">
		<div class="content__wrap button__row">
			<div class="cell text__align__center">
				<a class="btn --yellow">Volunteer</a>
				<a class="btn --yellow">Sign Up</a>
			</div>
		</div>
	</div>
  </div>
</template>
<script>
import axios from 'axios';
import NuxtLink from '../../.nuxt/components/nuxt-link';
import { mapGetters } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';
// TODO: Latest events can be pulled via tag or categorization using the name of the camp (via WP)
export default {
	async asyncData({ store, params }) {
		let [camp, camps] = await Promise.all([
			axios.get(`${store.state.wordpressAPI}/wp/v2/lfh_camps?slug=${params.slug}`),
			axios.get(`${store.state.wordpressAPI}/wp/v2/lfh_camps`)
		]);
		const campData = {
			campData: camp.data
		};
		const campsData = {
			campsData: camps.data
		};
		const pageData = {
			campData,
			campsData
		};
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
	},
	components: {
		Carousel,
		Slide
	},
	filters: {
		truncate: function(string, value) {
			return string.substring(0, value) + '...';
		}
	}
};
</script>
