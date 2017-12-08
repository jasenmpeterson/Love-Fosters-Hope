<template>
	<div class="component__wrap">
    <div class="content__wrap" v-for="(componentData, index) in pageData.mentorsData" v-bind:key="index">
			<div class="cell">
				<div class="wrap">
					<article v-html="pageData.mentorsData.mentors.content.rendered"></article>
					<nuxt-link class="btn" :to="pageData.mentorsData.mentors.slug"><span>Learn More</span></nuxt-link>
				</div>
      </div>
      <div class="cell mentors__background" v-bind:style="{ backgroundImage: 'url(' + pageData.mentorsData.mentors.better_featured_image.source_url + ')' }"></div>
    </div>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import NuxtLink from '../.nuxt/components/nuxt-link'
	export default {
		components: {
      NuxtLink
    },
    computed: {
      ...mapGetters({
        pageData: 'pageData'
      })
    }
	}
</script>
<style scoped>
	.component__wrap {
    height: 100vh;
  }

  .mentors__background {
    background-size: cover !important;
    background-position: center center !important;
    height: 100vh;
    box-shadow: inset 0 -15px 15px -15px rgba(0,0,0,.5);
    border-bottom: 1px solid rgba(255,255,255,1);
    border-left: 1px solid #FFFDFD;
  }

  .cell {
    width: 50%;
  }

	.wrap {
		padding: 3.5rem;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
	}

	article >>> h1 {
    color: #f35d54;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

	article >>> p {
    color: #6C6D71;
    line-height: 1.5;
	}
</style>