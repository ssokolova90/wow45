<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div :class="$e('image-wrapper')">
        <img
          :class="$e('image')"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div :class="$e('person')">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{ $page.frontmatter.position }}
      </div>

      <Content :custom="false"/>

      <people :path="'/people'">
      </people>

    </div>

  </div>

</template>

<script>

  import PeoplePanel
    from './PeoplePanel';
  import People from "../../../components/People";

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