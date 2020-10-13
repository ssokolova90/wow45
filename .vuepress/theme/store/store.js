import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import device_detect
  from "./device_detect/device_detect.js"

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    device_detect
  }
});