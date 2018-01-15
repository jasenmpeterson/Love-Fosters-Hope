<template>
  <div class="wrap">
	  <banner>
		  <template slot="header">
			<h1 class="title upper">Night<br/>of Hope<br/>April 14th</h1>
		  </template>
		 <template slot="paragraph">
			<p class="large">
				By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
			</p>
		 </template>
	  </banner>
	  <ourMission/>
	  <ourCamps/>
	  <mentors/>
  </div>
</template>
<script>
// TODO - Dynamic meta name and content
// TODO - Camps Section
import axios from 'axios';
import banner from '../components/banner.vue';
import ourMission from '../components/ourMission.vue';
import mentors from '../components/mentors.vue';
export default {
	// retrieve data and commit it so that page components can access via the store.
	async asyncData({ store, params }) {
		let [ourMission, mentors] = await Promise.all([
			axios.get(`${store.state.wordpressAPI}/wp/v2/pages/5`),
			axios.get(`${store.state.wordpressAPI}/wp/v2/pages/7`)
		]);
		// our mission
		const missionData = {
			mission: ourMission.data
		};
		// mentors
		const mentorsData = {
			mentors: mentors.data
		};
		const pageData = {
			missionData,
			mentorsData
		};
		store.commit('setPageData', pageData);
	},
	head() {
		return {
			title: 'Love Fosters Hope — Home',
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
	components: {
		ourMission,
		mentors,
		banner
	}
};
</script>
