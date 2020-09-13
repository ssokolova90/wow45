<template>
  <div
    v-if="item && item.frontmatter"
    class="chronicle-detail-panel">

    <div class="chronicle-detail-panel__image-wrapper">
      <img
        class="chronicle-detail-panel__image"
        v-if="item.frontmatter.picture"
        :src="$withBase(item.frontmatter.picture)"
        alt="">
    </div>

    <div class="chronicle-detail-panel__person">
      {{ item.frontmatter.first_name }}
      {{ item.frontmatter.last_name }}
    </div>

    <div class="chronicle-detail-panel__position">
      {{ item.frontmatter.position }}
    </div>

    <slot>
    </slot>
  </div>

</template>

<script>
  export default {
    params: ['item']
  }
</script>

<style lang="scss">

  /*@import './ChronicleDetailPanel.scss';*/
</style>