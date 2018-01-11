<template>
	<div class="component__wrap">
	</div>
</template>
<script>
import socialIcons from './social.vue';
export default {
	data() {
		return {
			currentYear: null
		};
	},
	methods: {
		getCurrentYear: function() {
			this.currentYear = new Date().getFullYear();
		}
	},
	created() {
		this.getCurrentYear();
	},
	components: {
		socialIcons
	}
};
</script>