<template>
  <div class="people">

    <div class="people__title">
      Участники
    </div>

    <div class="people-posts">

      <div class="wrapper"
           v-for="post in posts">
        <div class="post">
          <router-link :to="post.path">
            <div class="post__image-wrapper">
              <img
                class="post__image"
                v-if="post.frontmatter.picture"
                :src="$withBase(post.frontmatter.picture)"
                alt="">
            </div>
            <div class="post__person">
              {{ post.frontmatter.first_name }}
              {{ post.frontmatter.last_name }}
            </div>

            <div class="post__position">
              {{post.frontmatter.position}}
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

  .people
    &__title
      font-size 30px
      color #000
      padding 40px 30px
      text-transform uppercase

    .people-posts
      display flex
      flex-direction row
      flex-wrap wrap
      padding-left 15px

    .wrapper
      display flex
      flex 1 1 auto
      width 308px
      height 500px
      border 10px solid transparent

    .post
      display flex
      background white
      width 308px
      height 500px
      overflow hidden

      &__image-wrapper
        width 308px
        height 360px

      &__image
        width 100%

      &__person
        color #000
        font-size 24px
        line-height 28px
        padding 40px 30px

      &__position
        color #D5AE75
        font-size 13px
        line-height 18px
        padding 0 30px

</style>