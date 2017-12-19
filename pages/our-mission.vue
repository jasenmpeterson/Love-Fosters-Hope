<template>
    <div class="component__wrap padding__top__10" v-if="pageData.ourMission">
      <div class="content__wrap">
        <div class="content__wrap --center">
          <div class="cell cell__75">
						<div class="material__wrap">
							<article class="header__yellow paragraph__black" v-html="pageData.ourMission.acf.our_mission_page_content.content_block"></article>
						</div>
          </div>					
        </div>
      </div>
			<div class="content__wrap  --space__between margin__bottom__10 margin__top__10">
				<div class="cell cell__25">
					<div class="statistic__wrap material__wrap">
						<h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[0].statistic}}</h1>
						<h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[0].content}}</h2>
					</div>
				</div>
				<div class="cell cell__25">
					<div class="statistic__wrap material__wrap">
						<h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[1].statistic}}</h1>
						<h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[1].content}}</h2>
					</div>
				</div>
				<div class="cell cell__25">
					<div class="statistic__wrap material__wrap">
						<h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[2].statistic}}</h1>
						<h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[2].content}}</h2>
					</div>
				</div>
				<div class="cell cell__25">
					<div class="statistic__wrap material__wrap">
						<h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[3].statistic}}</h1>
						<h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[3].content}}</h2>
					</div>
				</div>									
			</div>
      <div class="content__wrap content__block__two">
        <div class="cell">
					<h1>{{pageData.ourMission.title.rendered}}</h1>
          <article v-html="pageData.ourMission.acf.our_mission_page_content.content_block_b"></article>
        </div>
      </div>
			<div class="content__wrap content__block__three" v-if="pageData.ourMission" v-bind:style="{ backgroundImage: 'url(' + pageData.ourMission.better_featured_image.source_url + ')' }">
					<div class="cell">
						<article v-html="pageData.ourMission.acf.our_mission_page_content.content_block_c"></article>
					</div>
			</div>			
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
	async asyncData({ store, params }) {
		let [ourMission] = await Promise.all([axios.get(`${store.state.wordpressAPI}/wp/v2/pages/5`)]);
		const missionData = {
			ourMission: ourMission.data
		};
		const pageData = missionData;
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