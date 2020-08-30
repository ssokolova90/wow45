<template>
  <div class="news-feed-page">

    <div class="news-feed-page__title">
      Новости
    </div>

    <div class="news-feed-posts">

      <div v-for="(post, index) in posts"
           :class="index < 2 ? 'double-wrapper' : 'wrapper'">
        <div class="news-feed">
          <router-link :to="post.path">
            <div class="news-feed__image-wrapper">
              <img
                class="news-feed__image"
                v-if="post.frontmatter.picture"
                :src="$withBase(post.frontmatter.picture)"
                alt="">
            </div>
            <div
              v-if="index > 1"
              class="news-feed__news-feed">

              Темы парада памяти
            </div>


            <div class="news-feed__title">
              {{ post.frontmatter.title }}
            </div>

            <div class="news-feed__event-date">
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
    data() {
      return {
        chronicle: '/chronicle',
        theme: '/themes'
      }
    },
    computed: {
      posts() {
        console.log("this.$site", this.$site);

        let posts = this.$site.pages.filter(x => {

          return x.path.match(new RegExp(`(${this.chronicle})(?=.*html)`))
          //   || x.path.match(new RegExp(`(${this.theme})(?=.*html)`))

        }).reverse();
        return posts;
      }
    },
    methods: {
      formateDate(date, format = 'D MMMM YYYY') {
        return moment(date).format(format)
      }
    },
    created() {

      moment.locale('ru');
    }
  };
</script>

<style lang="scss">

  .news-feed-page {
    &__title {
      font-size: 30px;
      color: #000;
      padding: 40px 30px;
      text-transform: uppercase;
    }

    .news-feed-posts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 15px;
    }

    .wrapper {
      display: flex;
      padding: 4.5px;
      width: 307px;
      height: 430px;
      border: 10px solid transparent;

      .news-feed {
        display: flex;
        background: white;
        width: 307px;
        height: 430px;
        overflow: hidden;

        &__image-wrapper {
          width: 308px;
          height: 198px;
        }

        &__image {
          width: 100%;
        }

        &__title {
          color: #3C3C3B;
          font-size: 24px;
          line-height: 28px;
          top: 40px;
          left: 30px;
          position: relative;
        }

        &__news-feed {
          color: #575756;
          position: relative;
          top: 15px;
          left: 30px;
          font-size: 13px;
          line-height: 18px;
          font-style: normal;
          font-weight: normal;
        }

        &__event-date {
          color: #575756;
          position: relative;
          top: 145px;
          left: 30px;
          font-size: 13px;
          line-height: 18px;
          font-style: normal;
          font-weight: normal;
        }
      }
    }
  }

  .double-wrapper {
    display: flex;
    flex: 1 1 auto;
    width: 645px;
    height: 430px;
    border: 10px solid transparent;

    .news-feed {
      display: flex;
      background: white;
      width: 645px;
      height: 430px;
      overflow: hidden;

      &__image-wrapper {
        width: 645px;
        height: 430px;
        position: absolute;
      }

      &__image {
        width: 100%;
        height: 430px;
      }

      &__title {
        color: #FFFFFF;
        font-size: 24px;
        line-height: 28px;
        position: relative;
        text-transform: uppercase;
        max-width: 350px;
        top: 311px;
        left: 30px;
      }

      &__news-feed {
        color: #FFFFFF;
        position: relative;
        top: 210px;
        left: 30px;
        font-size: 13px;
        line-height: 18px;
      }

      &__event-date {
        color: #FFFFFF;
        position: relative;
        top: 369px;
        left: 30px;
        font-size: 13px;
        line-height: 18px;
      }
    }
  }

</style>
