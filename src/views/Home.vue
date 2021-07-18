<template>
  <div class="default-page-layout">
    <div>
      <img src="@/assets/images/slide1.jpg" v-if="this.cur_card == 0" />
      <img src="@/assets/images/slide2.jpg" v-if="this.cur_card == 1" />
      <img src="@/assets/images/slide3.jpg" v-if="this.cur_card == 2" />
      <img src="@/assets/images/slide4.jpg" v-if="this.cur_card == 3" />
      <div class="slider-button-container">
        <div class="slider-button" v-on:click="left">◀</div>
        <div class="slider-button" v-on:click="right">▶</div>
      </div>
    </div>
    <section>
      <div class="combo-container">Curriculum Page</div>
    </section>
    <section>
      <div class="title">Curriculum Page</div>
    </section>
    <section>
      <div class="title">Curriculum Page</div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data: function () {
    return {
      cur_card: 0
    }
  },
  methods: {
    left: function(){
      if (this.cur_card != 0) {
        this.cur_card = this.cur_card-1;
      }else {
        this.cur_card = 3;
      }
    },
    right: function(){
      if (this.cur_card != 3) {
        this.cur_card = this.cur_card+1;
      }else {
        this.cur_card = 0;
      }
    }
  }
});
</script>
<style scoped lang="scss">
.slider-button-container {
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  top: 270px;
  .slider-button {
    font-size: 20px;
    top: 270px;
    text-align: center;
    font-size: 4em;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
