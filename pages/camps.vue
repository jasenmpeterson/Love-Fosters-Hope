<template>
  <div class="wrap">
    <div class="component__wrap" v-if="pageData.ourCamps">
      <div class="row row__one">
        <div class="content__wrap" v-for="(data, index) in pageData" v-bind:key="index">
          <div class="cell" v-html="data.acf.row_one.column_one"></div>
          <div class="cell" v-html="data.acf.row_one.column_two"></div>
        </div>
      </div>
      <div class="row row__two" v-for="(data, index) in pageData" v-bind:key="index">
        <div class="cell camp__description__wrap" v-for="(data, index) in data.acf.row_two.camps" v-bind:key="index">
          <article>
            <h1>{{data.content.post_title}}</h1>
            <p>{{$options.filters.truncate(data.content.post_content, '200')}}</p>
            <nuxt-link class="btn" :to="data.content.post_name">Learn More</nuxt-link>
          </article>
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
import axios from 'axios'
import NuxtLink from '../.nuxt/components/nuxt-link'
import { mapGetters } from 'vuex'
export default {
  async asyncData ({ store, params }) {
    let [ourCamps] = await Promise.all([axios.get('http://localhost.lovefostershope:9999/wp-json/wp/v2/pages/9')])
    const campsData = {
      ourCamps: ourCamps.data
    }
    const pageData = campsData
    store.commit('setPageData', pageData)
  },
  head () {
    return {
      title: 'Love Fosters Hope — Camps',
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
  filters: {
    truncate: function (string, value) {
      return string.substring(0, value) + '...'
    }
  },
  computed: {
  ...mapGetters({
      pageData: 'pageData'
    })
  }
}
</script>
<style scoped>

.wrap {
  margin-top: 10rem;
}

.row__one .content__wrap {
  justify-content: space-around;
}

.row__one .cell {
  width: 45%;
}

.row__one .content__wrap .cell:first-of-type >>> h1 {
  font-weight: 900;
  font-size: 3.75rem;
  color: #F35D54;
  line-height: 4.0625rem;
}

.row__one .content__wrap .cell:last-of-type >>> h1 {
  font-family: 'Lato';
  font-weight: 900;
  font-size: 4.375rem;
  color: #FCCD00;
  line-height: 5.25rem;
}

.row__one .content__wrap .cell >>> p {
  color: #6C6D71;
}

.row__one .content__wrap .cell >>> p a {
  background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  border: 0 solid rgba(252, 205, 0, 0.70);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4.64px;
  border: 1px solid rgba(243, 93, 84, 0.50);
  font-family: 'Lato';
  font-weight: 900;
  color: #F35D54;
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
  margin: 12rem 0;
}

.row__two,
.row__three  {
  padding: 0 4rem;
}

.row__two .cell {
  width: 33.3%;
}

.row__three .cell {
  width: 73.75rem;
  color: #F05449;
  font-size: 2rem;
}

.camp__description__wrap {
  color: #6C6D71;
}

.camp__description__wrap h1 {
  color: #FCCD00;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 2.8rem;
}

.camp__description__wrap article {
  position: relative;
  padding-left: 3.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.camp__description__wrap article:before {
  content: url(/static/icons/balloon__man__circle.svg);
  display: block;
  width: 4.5rem;
  height: auto;
  max-width: 100%;
  position: absolute;
  top: -2.5rem;
  left: -1.5rem;
}

</style>
