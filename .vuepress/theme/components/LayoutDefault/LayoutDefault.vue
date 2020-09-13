<template>
  <div :class="blockClassName">

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

  import ContentBlock
    from '../ContentBlock/ContentBlock';

  import DeviceDetect
    from '../../DeviceDetect.vue';

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


  export default {

    components: {
      Navbar,
      Footer,
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
        return this.$veg.getComponentName(this.$page);
      },

      blockClassName() {
        return this.$veg.b(
          'layout-default',
          null,
          this.isMobile ? 'mobile': 'desktop'
        );
      }
    }
  }
</script>


<style lang="scss">

  @import './LayoutDefaultDesktop';
  @import './LayoutDefaultMobile';

</style>
