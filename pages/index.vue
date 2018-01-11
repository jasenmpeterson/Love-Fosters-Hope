<template>
  <div class="wrap">
	  <banner/>
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
import ourCamps from '../components/ourCamps.vue';
import mentors from '../components/mentors.vue';
export default {
	// retrieve data and commit it so that page components can access via the store.
	async asyncData({ store, params }) {
		let [ourMission, ourCamps, mentors, camps] = await Promise.all([
			axios.get(`${store.state.wordpressAPI}/wp/v2/pages/5`),
			axios.get(`${store.state.wordpressAPI}/wp/v2/pages/9`),
			axios.get(`${store.state.wordpressAPI}/wp/v2/pages/7`),
			axios.get(`${store.state.wordpressAPI}/wp/v2/lfh_camps`)
		]);
		// our mission
		const missionData = {
			mission: ourMission.data
		};
		// our camps page
		const campsData = {
			camps: ourCamps.data
		};
		// mentors
		const mentorsData = {
			mentors: mentors.data
		};
		// our camps post
		const campsPostData = {
			campsPosts: camps.data
		};
		const pageData = {
			missionData,
			campsData,
			mentorsData,
			campsPostData
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
		ourCamps,
		mentors,
		banner
	}
};
</script>
