<template>
  <header class="header">
    <div class="cell logo__container">
      <nuxt-link to="/">
				Love Fosters Hope
      </nuxt-link>
    </div>
    <div class="cell nav__container">
		<navigation/>
    </div>
  </header>
</template>
<script>
import NuxtLink from '../.nuxt/components/nuxt-link';
import navigation from '../components/navigation.vue';
export default {
	components: {
		NuxtLink,
		navigation
	}
};
</script>