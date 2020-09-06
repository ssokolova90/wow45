<template>

 <div
    v-if="item && item.frontmatter"
    :class="doubleSize ? 'theme-panel-double' : 'theme-panel'">

    <router-link :to="item.path">
      <div class="theme-panel__image-wrapper">
        <img
          class="theme-panel__image"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
      <div
        v-if="index > 1"
        class="theme-panel__theme">

        Темы парада памяти
      </div>

      <div class="theme-panel__title">
        {{ item.frontmatter.title }}
      </div>

      <div class="theme-panel__event-date">
        {{ $veg.formatDate(item.frontmatter.event_date) }}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    props: ['item', 'doubleSize']
  }
</script>

<style lang="scss">

  .theme-panel {

  }

  .theme-panel--double {

  }

</style>