<template>
  <div class="hello">
    <Header v-on:hover="hoverEvent" v-bind:menus="menu"/>
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
  },
  data: function (){
    return {
      menu: [
        {
          depth1 : "브랜드소개",
          depth2 : [
            "브랜드",
            "커리큘럼"
          ]
        },
                {
          depth1 : "입학안내",
          depth2 : [
            "입학안내",
          ]
        },
        {
          depth1 : "입학안내",
          depth2 : [
            "청담소식",
            "청담스토리"
          ]
        },
      ]
    }
  }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
