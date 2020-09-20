<template>
 <div :class="$blockClassName">

   <device-detect>
   </device-detect>

   <navbar :modifier="'main'">
   </navbar>

   <content-block>

     <wow-block>
     </wow-block>

     <news-feed>
     </news-feed>

     <theme :path="'/themes'">
     </theme>

   </content-block>

   <footer
     v-if="!isMobile">
   </footer>

 </div>
</template>


<script>

  import Navbar
    from '../Navbar/Navbar';

  import Footer
    from '../Footer/Footer';

  import DeviceDetect
    from '../../DeviceDetect.vue';

  import WowBlock
    from "../../../components/WowBlock";

  import NewsFeed
    from "../../../components/NewsFeed";

  import Theme
    from "../../../components/Theme";

  import ContentBlock
    from '../ContentBlock/ContentBlock';

  export default {

    name: 'LayoutMain',

    components: {
      Navbar,
      Footer,
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