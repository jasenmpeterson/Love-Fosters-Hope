<template>
	<div class="component__wrap">
		<footer>
			<div class="cell">
				<span>&copy; {{currentYear}} LFH</span>
			</div>
			<div class="cell">
				<socialIcons/>
			</div>
		</footer>
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