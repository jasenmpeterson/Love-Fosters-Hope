<template>
 	<div class="page page__our-mission">
		 <div class="intro align__text__center">
			<img class="heart__emblem" src="/icons/heart_emblem.svg">
			<h1 class="title uppercase">Love<br/>Fosters<br/>Hope</h1>
			<h2 class="uppercase">This is my home.<br/>This is my family.</h2>			 
		 </div>
		<div class="about__content__wrap home__page">
			<div v-for="(componentData, index) in pageData.missionData" v-bind:key="index">
				<div class="row align-right">
					<div class="col col-5">
						<article class="about__content home__page" v-html="componentData.acf.our_mission_page_content.content_block_b"></article>
					</div>				 
				</div>
			</div>		
		</div>
		<div v-for="(componentData, index) in pageData.missionData" v-bind:key="index" class="statistics">
			<div class="row">
				<div class="col col-3">
					<div class="statistic__wrap material__wrap">
						<h1>{{componentData.acf.our_mission_page_content.statistics[0].statistic}}</h1>
						<h2>{{componentData.acf.our_mission_page_content.statistics[0].content}}</h2>
					</div>
				</div>
				<div class="col col-3">
					<div class="statistic__wrap material__wrap">
						<h1>{{componentData.acf.our_mission_page_content.statistics[1].statistic}}</h1>
						<h2>{{componentData.acf.our_mission_page_content.statistics[1].content}}</h2>
					</div>
				</div>
				<div class="col col-3">
					<div class="statistic__wrap material__wrap">
						<h1>{{componentData.acf.our_mission_page_content.statistics[2].statistic}}</h1>
						<h2>{{componentData.acf.our_mission_page_content.statistics[2].content}}</h2>
					</div>
				</div>
				<div class="col col-3">
					<div class="statistic__wrap material__wrap">
						<h1>{{componentData.acf.our_mission_page_content.statistics[3].statistic}}</h1>
						<h2>{{componentData.acf.our_mission_page_content.statistics[3].content}}</h2>
					</div>
				</div>																			 
			</div>
		</div>		
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			backgroundImage: null
		};
	},
	computed: {
		// fetch navigation from store
		...mapGetters({
			pageData: 'pageData'
		})
	}
};
</script>
