<template>
  <div class="theme-page">

    <div class="theme-page__title">
      Темы парада памяти
    </div>

    <div class="theme-posts">

      <div v-for="(post, index) in posts"
           :class="index < 2 ? 'double-wrapper' : 'wrapper'">
        <div class="theme">
          <router-link :to="post.path">
            <div class="theme__image-wrapper">
              <img
                class="theme__image"
                v-if="post.frontmatter.picture"
                :src="$withBase(post.frontmatter.picture)"
                alt="">
            </div>
            <div class="theme__title">
              {{ post.frontmatter.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    props: ["path"],
    computed: {
      posts() {
        console.log("this.$site", this.$site);

        let posts = this.$site.pages.filter(x => {
          return x.path.match(new RegExp(`(${this.path})(?=.*html)`));
        }).reverse();
        return posts;
      }
    }
  };
</script>

<style lang="stylus">

  .theme-page
    &__title
      font-size 30px
      color #000
      padding 40px 30px
      text-transform uppercase

    .theme-posts
      display flex
      flex-direction row
      flex-wrap wrap
      padding-left 15px

    .wrapper
      display flex
      flex 1 1 auto
      width 307px
      height 430px
      border 10px solid transparent

      .theme
        display flex
        background white
        width 307px
        height 430px
        overflow hidden

        &__image-wrapper
          width 308px
          height 198px

        &__image
          width 100%

        &__title
          color #000
          font-size 24px
          line-height 28px
          padding 40px 30px


    .double-wrapper
      display flex
      flex 1 1 auto
      width 645px
      height 430px
      border 10px solid transparent

      .theme
        display flex
        background white
        width 645px
        height 430px
        overflow hidden

        &__image-wrapper
          width 645px
          height 430px
          position absolute

        &__image
          width 100%
          height 100%

        &__title
          color #fff
          font-size 24px
          line-height 28px
          padding 40px 30px
          position relative
          text-transform uppercase
          max-width 350px
          top 278px
          left 30px

</style>
