<template>

  <div>
    <div
      class="people-details"
      v-if="item && item.frontmatter">

      <div class="people-details__image-wrapper">
        <img
          class="people-details__image"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
      <div class="people-details__person">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div class="people-details__position">
        {{ item.frontmatter.position }}
      </div>


      <Content :custom="false"/>

    </div>

    <people-panel
      v-for="people in $veg.filterPages($site.pages, '/people')"
      :item="people">
    </people-panel>

  </div>

</template>

<script>
  export default {
    props: ['item']
  };
</script>

<style lang="scss">

/*@import './PeopleDetailsDesktop.scss';*/
/*@import './PeopleDetailsMobile.scss';*/

</style>