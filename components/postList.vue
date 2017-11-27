<template>
	<div class="component__wrap">
		<div class="content__wrap">
			<div class="cell">
				Post List
			</div>
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

</style>
