/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Vue
  from 'vue';


import moment
  from "moment";

import 'moment/locale/ru';

moment.locale('ru');


import { store }
  from './theme/store/store'

Vue.mixin( { store: store });


import BemMixin
  from './theme/mixins/BemMixin.js';

Vue.mixin(BemMixin);


import VegMixin
  from './theme/mixins/VegMixin.js';

Vue.mixin(VegMixin);


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
}) => {

  // ...apply enhancements for the site.
}
