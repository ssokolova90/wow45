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
    name: 'PhotoItemPanel',
    props: ['item'],
    computed: {
      picture() {
        if (!this.item
          || !this.item.frontmatter
          || !this.item.frontmatter.picture) {

          return null;
        }

        let photo = this.item.frontmatter.picture;

        return 'url(' + photo + ')';
      }
    },
    mounted() {
      console.log(this.item);
    }
  };
</script>

<style lang="scss">

  @import './PhotoItemPanelDesktop.scss';
  @import './PhotoItemPanelMobile.scss';
  /*@import './PhotoPanelDoubleDesktop.scss';*/
  /*@import './PhotoPanelDoubleMobile.scss';*/
</style>
