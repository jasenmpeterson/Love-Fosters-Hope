<template>
  <div class="wrap">
    <div class="component__wrap" v-if="pageData.ourCamps">
      <div class="row row__one">
        <div class="content__wrap" v-for="(data, index) in pageData" v-bind:key="index">
          <article  class="summer__camps__content" v-html="data.acf.row_one.column_one"></article>
          <div class="cell">
            <div class="camp__description__wrap" v-for="(data, index) in data.acf.row_two.camps" v-bind:key="index">
              <nuxt-link :to="data.content.post_name">
                <article>
                  <div class="article__wrap">
                    <h1>{{data.content.post_title}}</h1>
                    <p>{{$options.filters.truncate(data.content.post_content, '200')}}</p>
                    <span class="btn">Learn More</span>
                  </div>
                </article>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row row__two">
        <div class="content__wrap" v-for="(data, index) in pageData" v-bind:key="index">
          <article v-html="data.acf.row_one.column_two"></article>
        </div>
      </div>
      <div class="row row__three">
        <div class="content__wrap" v-for="(data, index) in pageData" v-bind:key="index">
          <div class="cell" v-html="data.acf.row_three.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NuxtLink from '../.nuxt/components/nuxt-link';
import { mapGetters } from 'vuex';
export default {
	async asyncData({ store, params }) {
		let [ourCamps] = await Promise.all([axios.get(`${store.state.wordpressAPI}/wp/v2/pages/9`)]);
		const campsData = {
			ourCamps: ourCamps.data
		};
		const pageData = campsData;
		store.commit('setPageData', pageData);
	},
	head() {
		return {
			title: 'Love Fosters Hope — Camps',
			meta: [
				{
					name: 'description',
					content: 'This is the meta description of the content.'
				}
			]
		};
	},
	data() {
		return {
			title: 'default'
		};
	},
	filters: {
		truncate: function(string, value) {
			return string.substring(0, value) + '...';
		}
	},
	computed: {
		...mapGetters({
			pageData: 'pageData'
		})
	}
};
</script>
<style scoped>
.wrap {
	margin-top: 15rem;
}

.row.row__one {
	padding: 0;
}

.row__one .cell {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.row__one .cell:last-child {
	background: #ffffff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 12px rgba(0, 0, 0, 0.16);
}

.row__two .content__wrap article {
	width: 50%;
	margin: 0 auto;
	text-align: center;
	color: #6c6d71;
}

.row__two .content__wrap article>>>h1 {
	color: #fccd00;
	font-size: 2rem;
}

.summer__camps__content {
	color: #6c6d71;
	width: 50%;
	margin: 0 auto 10rem auto;
	padding-left: 2rem;
	text-align: center;
}

.summer__camps__content>>>h1 {
	font-weight: 900;
	font-size: 3.75rem;
	color: #f35d54;
	line-height: 4.0625rem;
}

.summer__camps__content>>>p {
	color: #6c6d71;
}

.row__two .content__wrap article>>>p a {
	background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
	border: 0 solid rgba(252, 205, 0, 0.7);
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
	border-radius: 4.64px;
	border: 1px solid rgba(243, 93, 84, 0.5);
	font-family: 'Lato';
	font-weight: 900;
	color: #f35d54;
	font-size: 0.8rem;
	display: inline-block;
	width: 10rem;
	padding: 0.5rem 0;
	text-decoration: none;
	text-align: center;
}

.row {
	padding: 0 2rem;
}

.row__two {
	display: flex;
	justify-content: center;
	margin-top: 12rem;
}

.row__two,
.row__three {
	padding: 0 4rem;
}

.row__two .cell {
	width: 33.3%;
}

.row__three {
	margin: 5rem 0;
}

.row__three .cell {
	width: 75%;
}

.row__three .content__wrap {
	justify-content: center;
}

.row__three .cell>>>h1 {
	width: 73.75rem;
	color: #f05449;
	font-size: 3rem;
	line-height: 1.2;
	text-align: center;
	margin: 0 auto;
}

.camp__description__wrap a {
	display: block;
	text-decoration: none;
	color: #fff;
	padding: 8rem 0;
}

.camp__description__wrap:nth-of-type(odd) {
	background: #f35d54;
}

.camp__description__wrap:nth-of-type(even) {
	background: #f05449;
}

.camp__description__wrap h1 {
	font-family: 'Lato';
	color: #fccd00;
	text-transform: uppercase;
	font-size: 2.5rem;
	font-weight: 900;
	line-height: 2.8rem;
}

.camp__description__wrap article {
	position: relative;
	padding: 0 3.5rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.article__wrap {
	padding: 0 2rem;
}

.camp__description__wrap:not(:nth-of-type(1)) article:before {
	content: url(/static/icons/balloon__man__circle.svg);
	display: block;
	width: 4.5rem;
	height: auto;
	max-width: 100%;
	position: absolute;
	top: 1.5rem;
	left: -1.5rem;
}
</style>
