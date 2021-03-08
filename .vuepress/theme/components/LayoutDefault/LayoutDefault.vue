<template>
  <div :class="$blockClassName">

    <navbar
      :modifier="'default'">
    </navbar>

    <content-block>

      <component
        v-if="componentNameValue"
        :is="componentNameValue">
      </component>

      <Content v-else :custom="false"/>

    </content-block>

    <footer-navbar v-if="!isMobile">
    </footer-navbar>
  </div>
</template>
<script>

  import DeviceDetect
    from '../../DeviceDetect.vue';

  import Navbar
    from '../Navbar/Navbar';

  import FooterNavbar
    from '../FooterNavbar/FooterNavbar';

  import ContentBlock
    from '../ContentBlock/ContentBlock';

  import ChronicleItem
    from '../Chronicle/ChronicleItem.vue';

  import PeopleItem
    from '../People/PeopleItem.vue';

  import PhotoItem
    from '../Photo/PhotoItem.vue';

  import TeamItem
    from '../Team/TeamItem.vue';

  import ThemeItem
    from '../Theme/ThemeItem.vue';

  import VideoItem
    from '../Video/VideoItem.vue';

  import CommentItem
    from '../Comments/CommentItem.vue';

  import $veg
    from '../../helpers/veg.js';

  export default {
    name: 'LayoutDefault',

    components: {
      FooterNavbar,
      Navbar,
      ContentBlock,
      DeviceDetect,
      ChronicleItem,
      PeopleItem,
      PhotoItem,
      TeamItem,
      ThemeItem,
      VideoItem,
      CommentItem
    },

    computed: {

      componentNameValue() {
        return $veg.getComponentName(this.$page);
      },
    }
  }
</script>


<style lang="scss">

  @import './LayoutDefaultDesktop';
  @import './LayoutDefaultMobile';

</style>
