<template>
	<div class="component__wrap">
		<div class="content__wrap">
			<div class="cell">
				<div class="wrap">
					<newsLetter/>
				</div>
			</div>
		</div>
		<footer>
			<div class="cell">
				&copy; {{currentYear}} LFH
			</div>
		</footer>
	</div>
</template>
<script>
import newsLetter from '../components/newsLetter.vue';
export default {
	components: {
		newsLetter
	},
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
	}
};
</script>
<style scoped>
footer {
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	background-color: #fccd00;
	color: #fff;
	width: 100%;
	font-size: 0.8rem;
	font-weight: 900;
}

.cell {
	width: 50%;
}

.content__wrap {
	justify-content: center;
}

.wrap {
	padding: 3.5rem;
}
</style>
