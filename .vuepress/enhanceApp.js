/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Vue
  from 'vue';

import $veg
  from './theme/helpers/veg.js';

Vue.prototype.$veg = $veg;

import moment
  from "moment";

import 'moment/locale/ru';

moment.locale('ru');


import { store }
  from './theme/store/store'

Vue.mixin( { store: store });


import DeviceDetectMixin
  from './theme/helpers/DeviceDetectMixin.js';

Vue.mixin(DeviceDetectMixin);



export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
}) => {

  // ...apply enhancements for the site.
}
