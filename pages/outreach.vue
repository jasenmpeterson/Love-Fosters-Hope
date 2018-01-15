<template>
  <div class="our__camps__page">
		<banner>
			<template slot="header">
				<h1 class="upper">Outreach</h1>
			</template>
			<template slot="paragraph">
				<p class="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
			</template>
		</banner>
		<section class="camps__list__wrap">
			<div class="row">
				<div class="col col-2">
					<aside>
						<span class="close big"></span>
						<ul>
							<li>Royal Family Kids</li>
							<li>Bridge</li>
							<li>Teen Reach (Girls)</li>
							<li>Teen Reach (Boys)</li>
						</ul>
					</aside>					
				</div>
				<div class="col col-10">
					<div class="row">
						<div class="col col-6">
							<section class="camps__list__content">
								<h1 class="upper">Royal <br> Family <br/> Kids</h1>
								<h4 class="camp__ages upper">Ages: 7-11</h4>
								<h4 class="camp__start__date">January 10th - January 15th</h4>
								<p class="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
								<button>Sign Up</button>
								<button>Volunteer</button>
							</section>							
						</div>
					</div>
				</div>
			</div>
		</section>		
  </div>
</template>

<script>
import axios from 'axios';
import NuxtLink from '../.nuxt/components/nuxt-link';
import banner from '../components/banner.vue';
import { mapGetters } from 'vuex';
export default {
	async asyncData({ store, params }) {
		let [ourCamps] = await Promise.all([axios.get(`${store.state.wordpressAPI}/wp/v2/pages/9`)]);
		const campsData = {
			ourCamps: ourCamps.data
		};
		const pageData = campsData;
		store.commit('setPageData', pageData);
	},
	head() {
		return {
			title: 'Love Fosters Hope — Camps',
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
	filters: {
		truncate: function(string, value) {
			return string.substring(0, value) + '...';
		}
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