<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div
        v-if="$page && $page.frontmatter && $page.frontmatter.picture"
        :class="$e('publication')">

        <div
          :class="$e('image')"
          :style="{backgroundImage: 'url(' + $page.frontmatter.picture + ')' }"
          v-if="$page.frontmatter.picture">
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

      <Team
        v-if="$page && $page.frontmatter && $page.frontmatter.picture"
        :path='"/team"'>
      </Team>

      <Content v-else :custom="false"/>

    </div>


  </div>

</template>

<script>
  import Team from "../../../components/Team";
  export default {
    name: 'TeamDetails',
    components: {Team},
  };
</script>

<style lang="scss">

  @import './TeamDetailsDesktop.scss';
  @import './TeamDetailsMobile.scss';

</style>