V<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div
          v-if="item && item.frontmatter"
          :class="$e('publication')">


        <div :class="$e('person')">
          {{ item.frontmatter.title }}
        </div>

        <div
            :class="$e('image')"
            :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
            v-if="item.frontmatter.picture">
        </div>

        <div :class="$e('content')">

          <Content :custom="false"></Content>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'NewsItem',
  computed: {
    item() {
      return this.$page
    }
  }
};
</script>

<style lang="scss">

@import './NewsItemDesktop.scss';
@import './NewsItemMobile.scss';

</style>

