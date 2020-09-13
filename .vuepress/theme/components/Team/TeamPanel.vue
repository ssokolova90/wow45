<template>

  <div
    v-if="item && item.frontmatter"
    class="team-panel">

    <router-link :to="item.path">

      <div class="team-panel__image-wrapper">
        <img
          class="team-panel__image"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>

      <div class="team-panel__person">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div class="team-panel__position">
        {{item.frontmatter.position}}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">

  /*@import './TeamPanel.scss';*/

</style>