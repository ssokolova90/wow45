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
  
  .team-panel {
    display: flex;
    background: white;
    width: 308px;
    height: 500px;
    overflow: hidden;

    &__image-wrapper {
      width: 308px;
      height: 360px;
    }

    &__image {
      width: 100%;
    }

    &__person {
      color: #000;
      font-size: 24px;
      line-height: 28px;
      padding: 40px 30px;
    }

    &__position {
      color: #D5AE75;
      font-size: 13px;
      line-height: 18px;
      padding: 0 30px;
    }
  }

</style>