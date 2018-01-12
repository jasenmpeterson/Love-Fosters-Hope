<template>
  <div class="donate__page">
	  <section class="featured__need__wrap">
		<banner>
			<template slot="header">
				<h1 class="upper">Needed Now:</h1>
				<h1>Shoes</h1>
			</template>
			<template slot="paragraph">
				<p class="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
			</template>
		</banner>
	  	<button class="donate__button">Donate</button>		  
	  </section>
	  <section class="featured__needs__wrap">
		  <div class="row between gutters">
			  <div class="col col-3">
				  <div class="featured_need_modal">
					  <div class="image">
						  <img src="http://via.placeholder.com/600x250">
					  </div>
					  <div class="featured__need__modal__content">
						<p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
					  </div>
					  <button class="donate__button">Donate</button>
				  </div>
			  </div>
			  <div class="col col-3">
				  <div class="featured_need_modal">
					  <div class="image">
						  <img src="http://via.placeholder.com/600x250">
					  </div>
					  <div class="featured__need__modal__content">
						<p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
					  </div>
					  <button class="donate__button">Donate</button>
				  </div>
			  </div>
			  <div class="col col-3">
				  <div class="featured_need_modal">
					  <div class="image">
						  <img src="http://via.placeholder.com/600x250">
					  </div>
					  <div class="featured__need__modal__content">
						<p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
					  </div>
					  <button class="donate__button">Donate</button>
				  </div>
			  </div>
			  <div class="col col-3">
				  <div class="featured_need_modal">
					  <div class="image">
						  <img src="http://via.placeholder.com/600x250">
					  </div>
					  <div class="featured__need__modal__content">
						<p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
					  </div>
					  <button class="donate__button">Donate</button>
				  </div>
			  </div>			  			  			  
		  </div>
	  </section>
	  <section class="donations__wrap">
		  <div class="row align-center">
			  <div class="col col-6 align__text__center">
				  <h1>Love Fosters Hope’s mission is to not just halt these trends but to reverse them, and it starts by showing every young person we reach that the pain associated with their foster care past doesn’t define them or their potential for a more fulfilling life.</h1>
				  <p>There is so much that needs to be done and so many individuals to be impacted, that we simply cannot do it alone. Please consider giving of your time and/or resources, knowing that every moment and every dollar add up to changed hearts and better futures … theirs and ours.</p>
				  <button class="donate__button">Donate</button>
			  </div>
		  </div>
	  </section>
  </div>
</template>
<script>
// TODO: https://www.behance.net/gallery/52021539/Charitystarscom-Website-Redesign?tracking_source=curated_galleries_list
import axios from 'axios';
import banner from '../components/banner.vue';
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
		banner
	}
};
</script>
