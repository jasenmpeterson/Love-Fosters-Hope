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
  import NuxtLink from '../.nuxt/components/nuxt-link'
  export default {
    components: {
      NuxtLink
    }
  }
</script>
<style scoped>
  header {
    display: flex;
    justify-content:  space-between;
    align-items: center;
    grid-column: col-left-start/col-main-end;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    padding: 1.5rem 3.5rem;
    transition: 300ms ease-out;
    background: rgba(0,0,0,0.2);
    border-bottom: 0.0625rem solid rgba(255,255,255,0.2);
    box-shadow: inset 0 -15px 15px -15px rgba(252,205,0,0.2);
    pointer-events: none;
  }
  header.inactive {
    opacity: 0;
    z-index: -1;
  }
  header.active {
    opacity: 1;
  }
  header > * {
    pointer-events: auto;
  }
  .cell.logo__container {
    width: 120px;
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
  }
  .menu__button__inner,
  .menu__button__inner:before,
  .menu__button__inner:after {
    background-color: #E3B901;
    position: absolute;
    width: 35px;
    height: 4px;
    border-radius: 4px;
    transition: 300ms ease-out;
  }
  .menu__button:hover .menu__button__inner,
  .menu__button:hover   .menu__button__inner:before,
  .menu__button:hover   .menu__button__inner:after {
    background-color: #F35D54;
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
    width: 5.625rem;
  }
</style>
