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


import Hello
  from './theme/components/Hello/Hello.vue';

Vue.component('hello', Hello);


import About
  from './theme/components/About/About.vue';

Vue.component('about', About);


import Chronicle
  from './theme/components/Chronicle/Chronicle.vue';

Vue.component('chronicle', Chronicle);


import NewsFeed
  from './theme/components/NewsFeed/NewsFeed.vue';

Vue.component('news-feed', NewsFeed);


import People
  from './theme/components/People/People.vue';

Vue.component('people', People);


import Photo
  from './theme/components/Photo/Photo.vue';

Vue.component('photo', Photo);


import Team
  from './theme/components/Team/Team.vue';

Vue.component('team', Team);


import Theme
  from './theme/components/Theme/Theme.vue';

Vue.component('theme', Theme);


import VideoPlayer
  from './theme/components/Video/Video.vue';

Vue.component('video-player', VideoPlayer);


import WowBlock
  from './theme/components/WowBlock/WowBlock.vue';

Vue.component('wow-block', WowBlock);


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
}) => {

  // ...apply enhancements for the site.
}
