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

  .chronicle-panel {
    display: flex;
    background: white;
    width: 308px;
    height: 450px;
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
      position: relative;
      top: -131px;
      color: white;
    }

    &__position {
      color: #D5AE75;
      font-size: 13px;
      line-height: 18px;
      padding: 0 30px;
      position: relative;
      top: -140px;
    }

    &__date {
      color: #575756;
      position: relative;
      top: -87px;
      left: 30px;
      font-size: 13px;
      line-height: 18px;
      font-style: normal;
      font-weight: normal;
    }
  }

</style>
