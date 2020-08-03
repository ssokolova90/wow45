<template>
  <div class="wow-block">

    <div class="wow-block-posts">

      <div
        v-if="lastTheme"
        class="main-theme">

        <router-link :to="lastTheme.path" style="width: 100%">
          <div class="main-theme__image-wrapper">

            <p>
              <img
                class="main-theme__image"
                v-if="lastTheme.frontmatter.picture"
                :src="$withBase(lastTheme.frontmatter.picture)"
                alt="">

              <div class="main-theme__title">
                {{ lastTheme.frontmatter.title }}
              </div>


              <div class="main-theme__description">

                {{ lastTheme.frontmatter.description }}
              </div>

              <div class="">
                Подробнее
              </div>
             </p>
          </div>

        </router-link>

      </div>

      <div class="wrapper"
           v-for="post in people">
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

            <div class="post__date">
              {{ formateDate(post.frontmatter.event_date) }}
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from "moment";
  import 'moment/locale/ru';

  export default {

    methods: {
      formateDate(date, format = 'D MMMM YYYY') {
        return moment(date).format(format)
      }
    },
    computed: {

      lastTheme() {

        const themesPath = '/themes';
        const themes = this.$site.pages.filter(x => {

          return x && x.path && x.path.match(new RegExp(`(${themesPath})(?=.*html)`));
        });

        return themes.length ? themes[0] : null;
      },
      people() {
        console.log("this.$site", this.$site);

        const peoplePath = '/people';
        const people = this.$site.pages.filter(x => {
          return x && x.path && x.path.match(new RegExp(`(${peoplePath})(?=.*html)`));
        }).slice(0, 2);
        return people;
      }
    }
  };
</script>

<style lang="stylus">

  .wow-block

    padding-top 15px

    a
      font-weight 500
      color #000000

    &__title
      font-size 30px
      color #000
      padding 40px 30px
      text-transform uppercase

    .wow-block-posts
      display flex
      flex-direction row
      flex-wrap wrap
      padding-left 15px

    .wrapper
      display flex
      flex 1 1 auto
      width 308px
      border 10px solid transparent
      padding-top 7px

    .post
      display flex
      background white
      width 308px
      height 450px
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
        position relative
        top -131px
        color white

      &__position
        color #D5AE75
        font-size 13px
        line-height 18px
        padding 0 30px
        position relative
        top -140px

      &__date
        color #575756
        position relative
        top -87px
        left 30px
        font-size 13px
        line-height 18px
        font-style normal
        font-weight normal

    .main-theme
      display flex
      background #E6D4B6
      width 645px
      height 430px
      padding 15px
      margin 15px

      &__title
        font-style normal
        font-weight bold
        font-size 30px
        line-height 36px
        text-transform uppercase
        color #000000
        padding-bottom 15px

      &__description
        font-style normal
        font-weight normal
        font-size 13px
        line-height 20px
        color #000000

      &__image-wrapper
        width 100%
        height 100%

      &__image
        -webkit-box-shadow 10px 10px 0px 0px rgba(213,174,117,1)
        -moz-box-shadow 10px 10px 0px 0px rgba(213,174,117,1)
        box-shadow 10px 10px 0px 0px rgba(213,174,117,1)
        float left
        margin-right 15px
        margin-bottom 11px


</style>