<template>
  <div class="chronicle-details">

    <chronicle-detail-panel
      item="$site.page">

      <Content :custom="false"/>
    </chronicle-detail-panel>


    <div class="chronicle-details__chronicles">

      <chronicle-panel
        v-for="post in $veg.filterPages($site.pages, '/chronicle')"
        :item="post">
      </chronicle-panel>
    </div>


    <div class="chronicle-details__peoples">

      <people-panel
        v-for="people in $veg.filterPages($site.pages, '/people')"
        :item="people">
      </people-panel>
    </div>

  </div>
</template>

<script>
  // import Chronicle
  //   from '../../../components/Chronicle';

  import ChronicleDetailPanel
    from './ChronicleDetailPanel';

  import PeoplePanel
    from '../../../theme/components/People/PeoplePanel';

  export default {
    components: {
      ChronicleDetailPanel,
      // Chronicle,
      PeoplePanel
    },

  };
</script>

<style lang="scss">

  /*@import './ChronicleDetailsDesktop.scss';*/
  /*@import './ChronicleDetailsMobile.scss';*/
</style>
