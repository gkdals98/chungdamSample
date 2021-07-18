import Vue from "vue";
import Vuex from "vuex";
import Menu from "./Menu";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    Menu,
  },
});
