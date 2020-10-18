<template>

 <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <router-link :to="item.path">
      <div :class="$e('image-wrapper')">
        <img
          :class="$e('image')"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
<!--      v-if="index > 1"-->
      <div
        :class="$e('theme')">
        Темы парада памяти
      </div>

      <div :class="$e('title')">
        {{ item.frontmatter.title }}
      </div>

      <div :class="$e('event-date')">
        {{ $formatDate(item.frontmatter.event_date) }}
      </div>
    </router-link>
  </div>

</template>

<script>

  export default {
    name: 'ThemePanel',
    props: ['item'],
  };
</script>

<style lang="scss">


  @import './ThemePanelDesktop.scss';
  @import './ThemePanelMobile.scss';
  @import './ThemePanelDoubleDesktop.scss';
  @import './ThemePanelDoubleMobile.scss';

</style>