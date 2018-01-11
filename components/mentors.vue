<template>
	<div class="mentors home__page" v-if="pageData.mentorsData">
		<div class="row align-right">
			<div class="col col-5">
				<article class="mentors__content home__page" v-html="pageData.mentorsData.mentors.content.rendered"></article>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			pageData: 'pageData'
		})
	}
};
</script>