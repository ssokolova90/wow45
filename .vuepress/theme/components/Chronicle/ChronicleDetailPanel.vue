<template>
  <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <div :class="$e('image-wrapper')">
      <img
        :class="$e('image')"
        v-if="item.frontmatter.picture"
        :src="$withBase(item.frontmatter.picture)"
        alt="">
    </div>

    <div :class="$e('person')">
      {{ item.frontmatter.first_name }}
      {{ item.frontmatter.last_name }}
    </div>

    <div :class="$e('position')">
      {{ item.frontmatter.position }}
    </div>

    <slot>
    </slot>
  </div>

</template>

<script>
  export default {
    name: 'ChronicleDetailPanel',
    props: ['item']
  }
</script>

<style lang="scss">

  @import './ChronicleDetailPanelDesktop.scss';
  @import './ChronicleDetailPanelMobile.scss';
</style>