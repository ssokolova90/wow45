<template>

  <div :class="$blockClassName">

    <div
      v-if="$page && $page.frontmatter && $page.frontmatter.picture"
      :class="$e('details')">

      <div
        :class="$e('image')"
        :style="{backgroundImage: 'url(' + $page.frontmatter.picture + ')' }"
        v-if="$page.frontmatter.picture"
      >
      </div>

      <div :class="$e('person')">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{ $page.frontmatter.position }}
      </div>

      <Content :custom="false"/>

    </div>

<!--    <people :path="'/people'">-->
<!--    </people>-->

  </div>

</template>

<script>

  import PeoplePanel
    from './PeoplePanel';
  import People from "./People";

  export default {
    name: 'PeopleDetails',
    props: ['item'],
    components: {
      People,
      PeoplePanel,
    }
  };
</script>

<style lang="scss">

@import './PeopleDetailsDesktop.scss';
@import './PeopleDetailsMobile.scss';

</style>