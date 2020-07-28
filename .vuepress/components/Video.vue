
<template>
  <div class="video-page">

    <div class="video-page__title">
      Видео
    </div>

    <div class="posts">

      <div class="wrapper"
           v-for="post in posts">
        <div class="video">
          <router-link :to="post.path">
            <div class="video__image-wrapper">
              <img
                class="video__image"
                v-if="post.frontmatter.picture"
                :src="$withBase(post.frontmatter.picture)"
                alt="">
            </div>
            <div class="video__title">
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
        });
        return posts;
      }
    }
  };
</script>

<style lang="stylus">

  .video-page
    &__title
      font-size 30px
      color #000
      padding 40px 30px
      text-transform uppercase

  .posts
    display flex
    flex-direction row
    flex-wrap wrap
    padding-left 15px

  .wrapper
    display flex
    flex 1 1 auto
    width 645px
    height 430px
    border 10px solid transparent

  .video
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
