<template>
  <header>
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    padding: 1.5rem 3.5rem;
  }
  .cell.logo__container {
    width: 120px;
  }
  .cell.hamburger__menu {
    width: 35px;
    height: 25px;
    cursor: pointer;
  }
  .menu__button {
    position: relative;
  }
  .menu__button__inner,
  .menu__button__inner:before,
  .menu__button__inner:after {
    background-color: #FCCD00;
    position: absolute;
    width: 35px;
    height: 4px;
    border-radius: 4px;
    transition: 300ms ease-out;
  }
  .menu__button__inner:hover,
  .menu__button__inner:hover:before,
  .menu__button__inner:hover:after {
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
</style>
