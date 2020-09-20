<template>
  <div :class="$blockClassName">

    <chronicle-detail-panel
      item="$site.page">

      <Content :custom="false"/>
    </chronicle-detail-panel>


    <div :class="$e('chronicles')">

      <chronicle-panel
        v-for="post in $pages('/chronicle')"
        :item="post">
      </chronicle-panel>
    </div>


    <div :class="$e('peoples')">

      <people-panel
        v-for="people in $pages('/people')"
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
    name: 'ChronicleDetails',
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
