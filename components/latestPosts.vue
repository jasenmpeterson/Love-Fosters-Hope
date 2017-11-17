<template>
	<div class="component__wrap">
		<div class="content__wrap">
			<div class="cell">
					<article v-for="(item, index) in pageData.latestPostsData.latestPosts.slice(0,3)" v-bind:key="index" v-if="index !== 0" v-bind:class="[index === 1 ? 'first' : '']" class="small">
						<nuxt-link :to="item.slug">
							<div class="wrap">
								<h2>{{item.title.rendered}}</h2>
								<span class="post__date">{{ item.date | setDate }}</span>
								<div class="post__excerpt" v-html="$options.filters.truncate(item.content.rendered, '100')"></div>
							</div>
						</nuxt-link>
					</article>
				</div>
			<div class="cell">2</div>
		</div>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'
	import moment from 'moment'
  import NuxtLink from '../.nuxt/components/nuxt-link'
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
      truncate: function (string, value) {
        return string.substring(0, value) + '...'
      },
      setDate: function (date) {
        return moment(date).format('MMMM DD, YYYY')
      }
    }
	}
</script>
<style scoped>
	
	.content__wrap {
		justify-content: space-between;
	}

	.content__wrap .cell:first-of-type {
		width: 40%;
	}

	.content__wrap .cell:last-of-type {
		width: 65%;
	}

	a {
		text-decoration: none;
		display: flex;
		color: #fff;
	}

	article.small {
		background-color: #6C6D71;
	}

	article.small .wrap {
		padding: 2.5rem;
	}

	.cell article.small:first-of-type a {
		justify-content: flex-end;
	}

	.cell article.small:first-of-type .wrap {
		background-color: #C2C2C2;
		width: 60%;
	}

</style>
