<template>
	<div class="component__wrap">
		<div class="content__wrap">
			<div class="cell">
				<article>
					<div class="inner" v-html="data[0].acf.donations_cta"></div>
					<div class="button__wrap">
						<nuxt-link class="btn yellow" :to="linkData[0][3].object_slug"><span>Donate</span></nuxt-link>
						<nuxt-link class="btn yellow" :to="linkData[0][7].object_slug"><span>Volunteer</span></nuxt-link>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			data: 'pageOptions',
			linkData: 'navigation'
		})
	}
};
</script>
<style scoped>
.btn {
	position: relative;
	z-index: 2;
}

article {
	border: 4px solid #f5f5f5;
	background-color: #ffffff;
	box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);
	max-width: 61.875rem;
	margin: 0 auto;
	padding: 2.5rem;
	height: 21.875rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
}

article:before {
	display: block;
	content: url(/static/icons/heart_emblem.svg);
	width: 11.875rem;
	position: absolute;
	top: -6rem;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}

article .inner>>>p {
	color: #f27f79;
	font-size: 1.5rem;
	font-family: 'Merriweather';
	text-align: center;
}

article .button__wrap {
	text-align: center;
}

article .button__wrap .btn.yellow {
	box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.1);
}

article .button__wrap .btn:first-child {
	margin-right: 2rem;
}
</style>
