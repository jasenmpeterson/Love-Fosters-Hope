<template>
	<div class="component__wrap" v-if="posts">
    <hr/>
		<div class="content__wrap">
			<div class="cell" v-bind:class="[index === 0 ? 'latest__need' : '']" v-for="(post, index) in posts.slice(0,4)" v-bind:key="index">
        <nuxt-link :to="post.slug">
          <article>
            <h1>{{post.title.rendered}}</h1>
            <article class="post__content" v-html="$options.filters.truncate(post.excerpt.rendered, '200')"></article>
            <div class="amount__to__date">
              <p>Amount Raised: $100</p>
            </div>
          </article>
        </nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
  // TODO - Show current amount raised
  import { mapGetters } from 'vuex'
  import NuxtLink from '../.nuxt/components/nuxt-link'
	export default {
    components: {
      NuxtLink
    },
    computed: {
      ...mapGetters({
        posts: 'posts'
      })
    },
    filters: {
      truncate: function (string, value) {
        return string.substring(0, value) + '...'
      }
    }
	}
</script>
<style scoped>

.component__wrap {
  padding: 0 2rem;
}

.content__wrap {
  justify-content: space-between;
  margin-top: 4.5rem;
}

a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 1.2rem;
  height: 100%;
}

h1 {
  font-size: 1.2rem;
}

.post__content >>> p {
  font-size: 1rem;
}

.cell {
  width: 19%;
  background-color: #F27F79;
}

.cell.latest__need {
  width: 39%;
  background-color: #F35D54;
}

.cell > a > article {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.amount__to__date {
  margin-top: auto;
  align-self: flex-end;
  padding-top: 3.5rem;
}

.amount__to__date p {
  font-size: 1.1rem;
  font-family: 'Merriweather';
  font-weight: 900;
}

hr {
  border:none;
	height: 3.125rem;
	border-bottom: 1px solid #E5E5E5;
	box-shadow: 0 1.25rem 1.25rem -1.25rem rgba(0,0,0,0.24);
  margin: -3.125rem auto 0.625rem; 
}

</style>
