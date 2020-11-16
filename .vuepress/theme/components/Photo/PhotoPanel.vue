<template>
  <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <router-link
      :to="item.path">

      <div
        :class="$e('image')"
        v-if="picture"
        :style="{backgroundImage: picture }">
      </div>

      <div
        :class="$e('title')">
        {{ item.frontmatter.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PhotoPanel',
    props: ['item'],
    computed: {
      picture() {
        if (!this.item
          || !this.item.frontmatter
          || !this.item.frontmatter.Photo
          || !this.item.frontmatter.Photo.length
          || !this.item.frontmatter.Photo[0]
          || !this.item.frontmatter.Photo[0].picture ) {

          return null;
        }

        let photo = this.item.frontmatter.Photo[0].picture;

        return 'url(' + photo + ')';
      }
    },
    mounted() {
      console.log(this.item);
    }
  };
</script>

<style lang="scss">

  @import './PhotoPanelDesktop.scss';
  /*@import './PhotoPanelMobile.scss';*/
  /*@import './PhotoPanelDoubleDesktop.scss';*/
  /*@import './PhotoPanelDoubleMobile.scss';*/
</style>
