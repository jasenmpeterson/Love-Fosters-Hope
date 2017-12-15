<template>
  <div class="wrap">
    <div class="component__wrap" v-if="pageData.ourMission">
      <div class="content__wrap">
        <div class="content__wrap content__block__one">
          <div class="cell">
            <article v-html="pageData.ourMission.acf.our_mission_page_content.content_block"></article>
          </div>
        </div>
      </div>
        <div class="statistic__container">
          <div class="statistic__wrap">
            <h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[0].statistic}}</h1>
            <h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[0].content}}</h2>
          </div>
          <div class="statistic__wrap">
            <h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[1].statistic}}</h1>
            <h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[1].content}}</h2>
          </div>
          <div class="statistic__wrap">
            <h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[2].statistic}}</h1>
            <h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[2].content}}</h2>
          </div>
          <div class="statistic__wrap">
            <h1>{{pageData.ourMission.acf.our_mission_page_content.statistics[3].statistic}}</h1>
            <h2>{{pageData.ourMission.acf.our_mission_page_content.statistics[3].content}}</h2>
          </div>
        </div>
      <div class="content__wrap content__block__two">
        <div class="cell">
          <div class="title__wrap">
            <h1>{{pageData.ourMission.title.rendered}}</h1>
            <div class="line__icon">
              <span></span>
              <img src="icons/mbri-hearth-bold.svg">
            </div>
          </div>
          <article v-html="pageData.ourMission.acf.our_mission_page_content.content_block_b"></article>
        </div>
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
<style scoped>
.donate__wrap {
	margin-top: 12rem;
}

.content__wrap {
	padding: 0 6.5rem;
	flex-direction: column;
}

.statistic__container {
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 12px rgba(0, 0, 0, 0.16);
}

.statistic__wrap {
	width: 25%;
}

.statistic__wrap:nth-of-type(odd) {
	background: #f35d54;
}

.statistic__wrap:nth-of-type(even) {
	background: #f05449;
}

.statistic__wrap {
	padding: 4rem;
	text-align: center;
	color: #ffffff;
}

.statistic__wrap h1,
.statistic__wrap h2 {
	margin: 0;
}

.statistic {
	padding-left: 2.5rem;
}

.statistic__wrap h1 {
	color: #fccd00;
	font-family: 'Lato';
	font-size: 6.875rem;
}

.statistic__wrap h2 {
	font-weight: 300;
	padding: 0 1.2rem;
}

.content__block__one {
	align-items: center;
	margin-top: 10rem;
	margin-bottom: 6rem;
}

.content__block__one .cell {
	width: 65%;
	position: relative;
}

.content__block__one .cell:before {
	display: block;
	content: url(/static/icons/balloon_man.svg);
	width: 1.5rem;
	position: absolute;
	left: -5rem;
	top: 0;
}

.content__block__one .cell:after {
	display: block;
	content: url(/static/icons/hearts_big_small.svg);
	width: 5rem;
	position: absolute;
	right: 0;
	top: -1rem;
}

.content__block__one .cell>>>h1 {
	color: #fccd00;
	font-size: 2.5rem;
	font-weight: 900;
}

.content__block__two article>>>p {
	font-size: 1.6rem;
}

.content__block__two {
	width: 65%;
	margin: 10rem auto;
	position: relative;
}

.content__block__two:after {
	display: block;
	content: url(/static/icons/hearts_big_small.svg);
	width: 5.5rem;
	position: absolute;
	left: 2rem;
	bottom: -4rem;
}

.content__block__two article {
	position: relative;
}

.content__block__two article:after {
	display: block;
	content: url(/static/icons/mbri-hearth-bold.svg);
	width: 1.5rem;
	position: absolute;
	right: -2rem;
	bottom: 10rem;
	opacity: 0.5;
}

.content__block__two article>>>h1 {
	color: #fccd00;
	font-size: 3rem;
}

.content__block__three {
	background-size: cover !important;
	background-position: center center !important;
	height: 100vh;
	justify-content: center;
	color: #fff;
	margin-top: 8rem;
}

.content__block__three article>>>p {
	font-size: 1.5rem;
}

.content__block__three .cell {
	max-width: 40%;
}

.donate__wrap {
	margin-bottom: 8rem;
}
</style>
