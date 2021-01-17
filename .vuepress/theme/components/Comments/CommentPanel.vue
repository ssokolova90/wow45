<template>
  <div
      v-if="item && item.frontmatter"
      :class="$blockClassName">

    <router-link
        :to="{ path: item.path }"
        :class="$e('router-link')">

      <div
          :class="$e('image')"
          :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
          v-if="item.frontmatter.picture">
      </div>

      <div :class="$e('title')">
        {{ item.frontmatter.title }}
      </div>

      <div :class="$e('description')">
        {{ item.frontmatter.description }}
      </div>

    </router-link>
  </div>

</template>

<script>
export default {
  name: 'CommentPanel',
  props: ['item'],
  mounted() {
    console.log(this.item)
  }
}
</script>

<style lang="scss">

@import './CommentPanelDesktop.scss';
@import './CommentPanelMobile.scss';

</style>