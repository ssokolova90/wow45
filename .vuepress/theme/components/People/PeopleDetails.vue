<template>

  <div :class="$blockClassName">
    <div
      :class="$e('details-wrapper')"
      v-if="item && item.frontmatter">

      <div :class="$e('image-wrapper')">
        <img
          :class="$e('image')"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
      <div :class="$e('person')">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{ item.frontmatter.position }}
      </div>


      <Content :custom="false"/>

    </div>

    <people-panel
      v-for="people in $pages('/people')"
      :item="people">
    </people-panel>

  </div>

</template>

<script>

  import PeoplePanel
    from './PeoplePanel';

  export default {
    name: 'PeopleDetails',
    props: ['item'],
    components: {
      PeoplePanel,
    }
  };
</script>

<style lang="scss">

/*@import './PeopleDetailsDesktop.scss';*/
/*@import './PeopleDetailsMobile.scss';*/

</style>