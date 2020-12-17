<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Участники
    </div>

    <div :class="$e('posts')">

      <people-album-card
          :items="$items($page.frontmatter.Member)">

      </people-album-card>
    </div>

    <people :path="'/people'">
    </people>

  </div>
</template>

<script>

  import PeopleAlbumCard
    from "./PeopleAlbumCard";

  import People
    from "./People";

  export default {
    name: 'PeopleItem',
    props: ['path'],
    components: {
      PeopleAlbumCard,
      People
    },
    mounted() {
      console.log(this.$page);
    }
  };
</script>

<style lang="scss">

  @import 'PeopleItemDesktop';
  @import 'PeopleItemMobile';
</style>
