<template>
  <header>
    <div class="row auto">
      <div class="col">
        <nuxt-link to="/">
          Love Fosters Hope
        </nuxt-link>
      </div>
      <div class="col">
        <navigation/>
      </div>
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