<template>

  <div :class="$blockClassName">


    <div :class="$e('details')"
         v-if="$page && $page.frontmatter && $page.frontmatter.picture"
    >

      <div
        :class="$e('publication')">

        <div
          :class="$e('image')"
          :style="{backgroundImage: 'url(' + $page.frontmatter.picture + ')' }"
          v-if="$page.frontmatter.picture">
        </div>

        <div :class="$e('title')">
          {{ $page.frontmatter.title }}
        </div>

        <div :class="$e('position')">
          {{ $page.frontmatter.position }}
        </div>

      </div>
    </div>
  </div>

</template>

<script>


  import Chronicle from "./Chronicle";

  export default {
    name: 'ChronicleDetails',
    props: ['item'],
    components: {
      Chronicle
    },

  };
</script>

<style lang="scss">

  @import './ChronicleDetailsDesktop.scss';
  @import './ChronicleDetailsMobile.scss';
</style>
