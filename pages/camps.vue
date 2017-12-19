<template>
  <div class="wrap">
    <div class="component__wrap" v-if="pageData.ourCamps">
      <div class="row margin__bottom__5 margin__top__10">
        <div class="content__wrap --columns --center__vertical" v-for="(data, index) in pageData" v-bind:key="index">
					<div class="cell cell__75">
						<div class="material__wrap --medium">
							<article  class="header__yellow" v-html="data.acf.row_one.column_one"></article>
						</div>						
					</div>
        </div>
      </div>			
			<div class="row margin__bottom__5">
				<div class="content__wrap --center">
          <div class="cell cell__75">
            <div class="flex camp__description__wrap">
              <nuxt-link :to="`/camp/${data.content.post_name}`" v-for="(data, index) in pageData.ourCamps.acf.row_two.camps" v-bind:key="index">
                <article class="material__wrap --medium height__100">
                  <div class="article__wrap header__yellow flex --columns --space__between height__100">
                    <h1>{{data.content.post_title}}</h1>
                    <p>{{$options.filters.truncate(data.content.post_content, '200')}}</p>
                  </div>
                </article>
              </nuxt-link>
            </div>
          </div>					
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