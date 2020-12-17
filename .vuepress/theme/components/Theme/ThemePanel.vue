<template>

 <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <router-link
      :class="$e('image-wrapper')"
      :to="item.path">

      <div
        :class="$e('image')"
        :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
        v-if="item.frontmatter.picture">
      </div>

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