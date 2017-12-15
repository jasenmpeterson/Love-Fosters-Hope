<template>
  <div class="navigation__wrap">
    <ul>
      <li v-for="(page, index) in navigation[0]" :key="index"å>
        <nuxt-link :to="`/${page.object_slug}`">
          <span :data-hover="page.title">{{ page.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NuxtLink from '../.nuxt/components/nuxt-link';
export default {
	components: { NuxtLink },
	computed: {
		// fetch navigation from store
		...mapGetters({
			navigation: 'navigation'
		})
	}
};
</script>
<style scoped>
/* TODO - Transition in heart on hover?? */
.navigation__wrap {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
	visibility: visible;
	width: 300px;
	height: 100vh;
	background: linear-gradient(135deg, #fccd00 20%, #e3b901 80%);
	transform: translate3d(100%, 0, 0);
	transition: all 0.5s ease-out;
	padding: 2.5rem;
	box-shadow: inset 0 0 15px rgba(44, 62, 80, 0.3);
}
.navigation__wrap.open {
	visibility: visible;
	transition: transform 0.5s ease-out;
}
ul {
	padding: 0;
	list-style-type: none;
}
li {
	padding: 1rem 0;
}
li a {
	font-weight: 400;
	color: #fff;
	text-transform: uppercase;
	text-decoration: none;
	display: block;
	overflow: hidden;
}
li a span {
	position: relative;
	display: block;
	transition: transform 0.3s, color 0.3s;
}
li a span:before {
	position: absolute;
	top: 100%;
	content: attr(data-hover);
	font-weight: 900;
	transform: translate3d(0, 0, 0);
	color: #f35d54;
}
li a:hover span,
li a:focus span {
	transform: translateY(-100%);
}
li:not(:last-child) {
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
