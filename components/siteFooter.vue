<template>
	<footer>
		<div class="row">
			<div class="col col-4">
				&copy; {{currentYear}} LFH
			</div>
			<div class="col col-4">
				
			</div>
		</div>
	</footer>
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