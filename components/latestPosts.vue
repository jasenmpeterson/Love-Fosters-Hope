<template>
	<div class="component__wrap" v-if="pageData.latestPostsData">
		<div class="content__wrap">
			<div class="cell">
				<article v-for="(item, index) in pageData.latestPostsData.latestPosts.slice(0,1)" v-bind:key="index">
					<div class="wrap">
							<h4>Latest News</h4>
							<h2>{{item.title.rendered}}</h2>
							<span class="post__date">{{ item.date | setDate }}</span>
							<div class="post__excerpt" v-html="$options.filters.truncate(item.content.rendered, '500')"></div>
							<nuxt-link class="btn yellow" :to="item.slug"><span>Read More</span></nuxt-link>
						</div>
				</article>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import NuxtLink from '../.nuxt/components/nuxt-link';
export default {
	components: {
		NuxtLink
	},
	computed: {
		...mapGetters({
			pageData: 'pageData'
		})
	},
	filters: {
		truncate: function(string, value) {
			return string.substring(0, value) + '...';
		},
		setDate: function(date) {
			return moment(date).format('MMMM DD, YYYY');
		}
	}
};
</script>
<style scoped>
.component__wrap {
	height: 100vh;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.content__wrap {
	height: 100%;
}

.content__wrap .cell article {
	height: 100%;
}

article {
	height: 100%;
	display: flex;
	justify-content: center;
	color: #ffffff;
}

article .wrap {
	max-width: 61.875rem;
	margin: 0 auto;
	align-self: center;
}

.post__date {
	font-size: 0.8rem;
	font-family: 'Merriweather';
	display: block;
	margin-bottom: 1rem;
}

h4 {
	font-size: 1rem;
	text-transform: uppercase;
	margin-bottom: 1.2rem;
	color: #fccd00;
}

.btn {
	box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.1);
}
</style>
