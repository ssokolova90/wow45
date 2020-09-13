<template>
  <div
    v-if="item && item.frontmatter"
    class="chronicle-panel">

    <router-link :to="item.path">

      <div class="chronicle-panel__image-wrapper">
        <img
          class="chronicle-panel__image"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>

      <div class="chronicle-panel__person">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div class="chronicle-panel__position">
        {{ item.frontmatter.position }}
      </div>

      <div class="chronicle-panel__date">
        {{ $veg.formatDate(item.frontmatter.event_date) }}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    props: ['item']
  };
</script>

<style lang="scss">

  /*@import './ChroniclePanel.scss';*/
</style>
