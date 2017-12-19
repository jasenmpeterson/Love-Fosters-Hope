<template>
	<div class="component__wrap mentors__wrap">
    <div class="content__wrap --flex__end">
		<div class="cell cell__50 padding__10">
			<article class="header__yellow paragraph__white" v-html="pageData.mentorsData.mentors.content.rendered"></article>
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