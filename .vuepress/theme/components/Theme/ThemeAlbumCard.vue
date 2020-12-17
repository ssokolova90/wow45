<template>
  <div :class="$blockClassName">

    <div :class="$e('photo-slider')">

      <div :class="$e('image')"
           @click="nextImage"
           :style="{backgroundImage: 'url(' + (slide ? slide.picture : '' ) + ')' }">
      </div>

      <div :class="$e('slider-controls')">

        <div
            :class="$e('prev-button')"
            @click="prevImage">
          назад
        </div>

        <div :class="$e('slide-position')">

          {{ (items && items.length > slidePosition) ? slidePosition + 1 : 0 }}
          из
          {{ items ? items.length : 0 }}
        </div>

        <div
            :class="$e('next-button')"
            @click="nextImage">
          дальше
        </div>
      </div>

    </div>

    <div :class="$e('slide-info')">

      <div :class="$e('title')">
        {{ slide ? slide.description : '' }}
      </div>

      <div :class="$e('description')">
        {{ slide ? slide.title : '' }}
      </div>

      <div :class="$e('event-date')">
        {{ slide ? slide.date : '' }}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'ThemeAlbumCard',
  props: ['items'],
  data() {
    return {
      slidePosition: 0
    }
  },
  computed: {
    slide() {

      if (!this.items
          || !this.items.length
          ||  +this.slidePosition > this.items.length
          || !this.items[+this.slidePosition]
          || !this.items[+this.slidePosition].frontmatter) {

        this.slidePosition = 0;
        return null;
      }
      return this.items[+this.slidePosition].frontmatter;
    }
  },
  methods: {

    prevImage() {

      if (!this.items
          || !this.items.length) {

        this.slidePosition = 0;
        return;
      }

      if (this.slidePosition > 0) {
        this.slidePosition -= 1;
      }
    },
    nextImage() {

      if (!this.items
          || !this.items.length) {

        this.slidePosition = 0;
        return;
      }

      if (this.slidePosition + 1 < this.items.length) {
        this.slidePosition += 1;
      } else {
        this.slidePosition = 0;
      }
    }
  }
}
</script>

<style lang="scss">

@import './ThemeAlbumCardDesktop.scss';
@import './ThemeAlbumCardMobile.scss';

</style>