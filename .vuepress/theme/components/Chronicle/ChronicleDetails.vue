<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

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

      <chronicle :path="'/chronicle'">
      </chronicle>

    </div>
  </div>
  
</template>

<script>


  import Chronicle from "../../../components/Chronicle";

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
