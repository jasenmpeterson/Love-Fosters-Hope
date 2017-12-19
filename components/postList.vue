<template>
	<div class="component__wrap posts__list__component margin__top__10 margin__bottom__10" v-if="posts">
		<div class="content__wrap">
			<div class="cell cell__25" v-bind:class="[index === 0 ? 'latest__need' : '']" v-for="(post, index) in posts.slice(0,4)" v-bind:key="index">
        <nuxt-link :to="`/needed_now/${post.slug}`" class="material__wrap --medium">
          <article>
            <h1>{{post.title.rendered}}</h1>
            <article class="post__content" v-html="$options.filters.truncate(post.excerpt.rendered, '200')"></article>
            <div class="amount__to__date">
              <p class="paragraph__bold">Amount Raised: $100</p>
            </div>
          </article>
        </nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
// TODO: - Show current amount raised
import { mapGetters } from 'vuex';
import NuxtLink from '../.nuxt/components/nuxt-link';
export default {
	components: {
		NuxtLink
	},
	computed: {
		...mapGetters({
			posts: 'posts'
		})
	},
	filters: {
		truncate: function(string, value) {
			return string.substring(0, value) + '...';
		}
	}
};
</script>