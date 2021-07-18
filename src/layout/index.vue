<template>
  <div class="hello">
    <Header/>
    <FloatMenu/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from './components/Header.vue';
import FloatMenu from './components/FloatMenu.vue';

export default Vue.extend({
  name: "Layout",
  components: {
    Header,
    FloatMenu
  }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
