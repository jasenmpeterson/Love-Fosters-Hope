<template>
  <header class="header">
    <div class="cell logo__container">
      <nuxt-link to="/">
        <img src="logo/logo.svg">
      </nuxt-link>
    </div>
    <div class="cell hamburger__menu">
      <div class="menu__button">
        <div class="menu__button__inner"></div>
      </div>
    </div>
  </header>
</template>
<script>
import NuxtLink from '../.nuxt/components/nuxt-link';
export default {
	components: {
		NuxtLink
	}
};
</script>
<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: col-left-start/col-main-end;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 20;
	width: 100%;
	transition: 300ms ease-out;
	background: #ffffff;
	line-height: 0;
	box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15), 0 3px 12px rgba(0, 0, 0, 0.16);
}

.cell.logo__container {
	width: 30%;
}

.cell.logo__container a {
	display: inline-block;
	background: #f35d54;
	padding: 0 3.5rem;
	opacity: 0;
}

.cell.hamburger__menu {
	width: 35px;
	height: 25px;
	cursor: pointer;
}

.cell.hamburger__menu,
.menu__button {
	height: 25px;
}

.menu__button {
	position: relative;
	right: 2rem;
}

.menu__button__inner,
.menu__button__inner:before,
.menu__button__inner:after {
	background-color: #e3b901;
	position: absolute;
	width: 35px;
	height: 4px;
	border-radius: 4px;
	transition: 300ms ease-out;
}

.menu__button:hover .menu__button__inner,
.menu__button:hover .menu__button__inner:before,
.menu__button:hover .menu__button__inner:after {
	background-color: #f35d54;
}

.menu__button__inner:before,
.menu__button__inner:after {
	content: '';
	display: block;
}

.menu__button__inner:before {
	top: 10px;
}

.menu__button__inner:after {
	top: 20px;
}

img {
	width: 7.625rem;
}
</style>
