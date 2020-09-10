<template>
  <div class="layout-default">

    <navbar
      :modifier="'default'">
    </navbar>

    <h4>{{ componentNameValue }}</h4>

    <component
      v-if="componentNameValue"
      :is="componentNameValue">
    </component>

  </div>
</template>
<script>

  import ChronicleDetails
    from './components/Chronicle/ChronicleDetails.vue';

  import PeopleDetails
    from './components/People/PeopleDetails.vue';

  import PhotoDetails
    from './components/Photo/PhotoDetails.vue';

  import TeamDetails
    from './components/Team/TeamDetails.vue';

  import ThemeDetails
    from './components/Theme/ThemeDetails.vue';

  import VideoDetails
    from './components/Video/VideoDetails.vue';
  import Navbar from "./components/Navbar/Navbar";


  export default {

    components: {
      Navbar,
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
    }
  }
</script>


<style lang="scss">

  .layout-default {
  }

</style>
