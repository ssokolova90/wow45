<template>

  <div
    :class="$blockClassName">

    <router-link
      :to="item.path"
      :class="$e('router-link')">

      <div
        :class="$e('image')"
        :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
        v-if="item.frontmatter.picture">
      </div>

      <div :class="$e('title')">
        {{ item.title }}
      </div>

      <div :class="$e('description')">
        {{item.description}}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'TeamPanel',
    props: ['item'],
  }
</script>

<style lang="scss">

  @import './TeamPanelDesktop.scss';
  @import './TeamPanelMobile.scss';

</style>