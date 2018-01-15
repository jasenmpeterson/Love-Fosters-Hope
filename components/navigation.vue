<template>
	<nav>
		<ul>
			<li v-for="(page, index) in navigation[0]" :key="index">
				<nuxt-link :to="`/${page.object_slug}`">
					{{ page.title }}
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>
<script>
import { mapGetters } from 'vuex';
import NuxtLink from '../.nuxt/components/nuxt-link';
export default {
	components: { NuxtLink },
	computed: {
		// fetch navigation from store
		...mapGetters({
			navigation: 'navigation'
		})
	}
};
</script>