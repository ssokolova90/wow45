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

      <div :class="$e('person')">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{ item.frontmatter.position }}
      </div>

      <div :class="$e('date')">
        {{ $formatDate(item.frontmatter.event_date) }}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'ChroniclePanel',
    props: ['item']
  };
</script>

<style lang="scss">

  @import './ChroniclePanelDesktop.scss';
  @import './ChroniclePanelMobile.scss';
</style>
