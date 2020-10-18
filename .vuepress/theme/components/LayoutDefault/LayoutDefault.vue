<template>
  <div :class="$blockClassName">

    <device-detect>
    </device-detect>

    <navbar
      :modifier="'default'">
    </navbar>

    <content-block>

      <component
        v-if="componentNameValue"
        :is="componentNameValue">
      </component>

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

  import ChronicleDetails
    from '../Chronicle/ChronicleDetails.vue';

  import PeopleDetails
    from '../People/PeopleDetails.vue';

  import PhotoDetails
    from '../Photo/PhotoDetails.vue';

  import TeamDetails
    from '../Team/TeamDetails.vue';

  import ThemeDetails
    from '../Theme/ThemeDetails.vue';

  import VideoDetails
    from '../Video/VideoDetails.vue';

  import $veg
    from '../../helpers/veg.js';

  export default {
    name: 'LayoutDefault',

    components: {
      FooterNavbar,
      Navbar,
      ContentBlock,
      DeviceDetect,
      ChronicleDetails,
      PeopleDetails,
      PhotoDetails,
      TeamDetails,
      ThemeDetails,
      VideoDetails
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
