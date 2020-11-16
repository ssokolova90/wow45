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
        {{ item.frontmatter.last_name }}
        {{ item.frontmatter.first_name }}
      </div>

      <div :class="$e('description')">
        {{ item.frontmatter.position }}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'TeamPersonPanel',
    props: ['item'],
  }
</script>

<style lang="scss">

  @import './TeamPersonPanelDesktop.scss';
  @import './TeamPersonPanelMobile.scss';

</style>