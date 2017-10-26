<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="(page, index) in pageData.missionData">
          {{page.content.rendered}}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      // fetch navigation from store
      ...mapGetters({
        pageData: 'pageData'
      })
    }
  }
</script>
