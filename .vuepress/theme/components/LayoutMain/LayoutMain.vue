<template>

 <div :class="$blockClassName">

   <device-detect>
   </device-detect>

   <navbar :modifier="'main'">
   </navbar>

   <main-picture
    v-if="!isMobile">
   </main-picture>


   <content-block>

     <wow-block style="margin-top: -130px;">
     </wow-block>

     <news-feed>
     </news-feed>

   </content-block>

   <footer-navbar
     v-if="!isMobile">
   </footer-navbar>

 </div>
</template>


<script>

  import Navbar
    from '../Navbar/Navbar';

  import FooterNavbar
    from '../FooterNavbar/FooterNavbar';

  import MainPicture
    from '../MainPicture/MainPicture';

  import DeviceDetect
    from '../../DeviceDetect.vue';

  import WowBlock
    from "../WowBlock/WowBlock.vue";

  import NewsFeed
    from "../NewsFeed/NewsFeed";

  import Theme
    from "../Theme/Theme";

  import ContentBlock
    from '../ContentBlock/ContentBlock';

  export default {

    name: 'LayoutMain',

    components: {
      Navbar,
      FooterNavbar,
      MainPicture,
      DeviceDetect,
      ContentBlock,
      WowBlock,
      NewsFeed,
      Theme
    },
  }
</script>

<style lang="scss">

  @import './LayoutMainDesktop.scss';
  @import './LayoutMainMobile.scss';

</style>