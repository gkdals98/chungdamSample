<template>
  <div class="float-menu">
    <div>
      <div class="depth2-list" v-for="(depth2, index) in curDepth2" :key="index">
        <router-link :to="depth2.route" class="dropdown-item"
          >{{depth2.depthName}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "FloatMenu",
  props: {
    menu: Array,
    curHover: String,
  },
  computed:{
    curDepth2: function () {
      const curDep1 = this.menu.filter((item) => item.depth1 == this.curHover);
      console.log(curDep1[0].depth2);
      return curDep1[0].depth2;
    },
  }
})
</script>
<style lang="scss">
.float-menu {
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: #ffffff;
  color: black;
  font-size: 10px;
  display: flex;
  .appear {
    animation: fade-in 1s;
    animation-fill-mode: forwards;
  }

  .disappear {
    animation: fade-out 1s;
    animation-fill-mode: forwards;
  }
}


@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;

  }
  to {
    opacity: 0;
  }
}
</style>
