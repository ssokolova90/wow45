<template>

  <div
      v-if="item && item.frontmatter"
      :class="$blockClassName">

    <router-link
        :to="item.path">

      <div
          :class="$e('image')"
          :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
          v-if="item.frontmatter.picture">
      </div>

      <div
          :class="$e('theme')">
        Новости
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
  name: 'NewsCard',
  props: ['item'],
};
</script>

<style lang="scss">


@import './NewsCardDesktop.scss';
@import './NewsCardMobile.scss';
@import './NewsCardDoubleDesktop.scss';
@import './NewsCardDoubleMobile.scss';

</style>