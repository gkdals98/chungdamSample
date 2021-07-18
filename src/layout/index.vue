<template>
  <div class="hello">
    <Header v-on:hover="hoverEvent" v-on:out="outEvent" />
    <!--<FloatMenu
      v-bind:menu="menu"
      v-bind:curHover="curHovered.curHovered"
      v-bind:class="{ appear: isApear, disappear: isDisappear }"
    />-->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from './components/Header.vue';
//import FloatMenu from './components/FloatMenu.vue';

export default Vue.extend({
  name: "Layout",
  components: {
    Header,
    //FloatMenu,
  },
  data: function (){
    return {
      isApear: false,
      isDisappear: true,
      curHovered: {
        active: false,
        semaphore: false,
        curHovered: ''
      },
      menu: [
        {
          depth1: "브랜드소개",
          depth2: [
            { 
              depthName: "브랜드",
              route: "/Brand",
            },
            { 
              depthName: "커리큘럼",
              route: "/Curriculum",
            },
          ],
        },
        {
          depth1: "입학안내",
          depth2: [
            {
              depthName: "입학안내",
              route: "/AdmissionGuid",
            },
          ],
        },
        {
          depth1: "채널청담",
          depth2: [
            { 
              depthName: "청담소식",
              route: "/ChungdamNews",
            },
            { 
              depthName: "청담스토리",
              route: "/ChungdamStory",
            },
          ],
        },
      ]
    }
  },
  methods : {
    hoverEvent: function(curHover: string){
      // if(this.curHovered.semaphore != true){
      this.curHovered.active = true;
      // }
      this.curHovered.curHovered = curHover;
    },
    outEvent: function(){
      // this.curHovered.semaphore = true;
      this.curHovered.active = false;
      this.curHovered.curHovered = '';
      // setTimeout(this.setSemaphoreFalse, 1000);
    },
    setSemaphoreFalse: function(){
      this.curHovered.semaphore = false;
    }
  }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
