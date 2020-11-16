<template>
  <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <router-link :to="$utf8(item.path)">

      <div
        :class="$e('image')"
        v-if="item.frontmatter.picture"
        :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }">
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
    name: 'ChroniclePanel',
    props: ['item'],
    mounted() {
      console.log(this.item);
    }
  };
</script>

<style lang="scss">

  @import './ChroniclePanelDesktop.scss';
  @import './ChroniclePanelMobile.scss';
</style>
