<template>
  <div class="wrap">
    <div class="component__wrap header__wrap" v-if="pageData">
      <div class="content__wrap">
				<div class="cell">
					<article v-html="pageData.content.rendered"></article>
				</div>
      </div>
		</div>
		<div class="component__wrap post__wrap">
      <div class="content__wrap">
				<div class="cell">
					<postList/>
				</div>
      </div>
		</div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import donationsCTA from '../../components/donations-cta.vue'
import postList from '../../components/postList.vue'
export default {
  async asyncData ({ store, params }) {
    let [neededNow, neededNowPosts] = await Promise.all([
			axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/16'),
			axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/needed_now')
		])
    const neededNowData = {
			neededNow: neededNow.data,
			neededNowPost: neededNowPosts.data
		}
		const pageData = neededNowData.neededNow
		store.commit('setPageData', pageData)
		const postsData = neededNowData.neededNowPost
		store.commit('setPosts', postsData)
  },
  head () {
    return {
      title: 'Love Fosters Hope — Needed Now',
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.'
        }
      ]
    }
  },
  data () {
    return {
      title: 'default'
    }
  },
  computed: {
  ...mapGetters({
    pageData: 'pageData'
  })
  },
  components: {
		donationsCTA,
		postList
  }
}
</script>
<style scoped>

	.header__wrap {
		background-size: cover !important;
		background-position: center center;
		position: relative;
		height: 100vh;
		color: #fff;
	}

	.header__wrap .content__wrap {
		justify-content: center;
		height: 100vh;
	}

	.header__wrap .content__wrap .cell {
		max-width: 61.875rem;
		align-self: center;
	}
	
	.header__wrap article >>> h1 {
		color: #FCCD00;
		font-weight: 400;
		font-size: 2.5rem;
	}

	.header__wrap article >>> p {
		color: #6C6D71;
		font-family: 'Merriweather'
	}

</style>
