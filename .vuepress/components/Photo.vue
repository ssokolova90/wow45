<template>
  <div class="photo-page">

    <div class="photo-page__title">
      Фотогалерея
    </div>

    <div class="photo-posts">

      <div v-for="(post, index) in posts"
           :class="index < 2 ? 'double-wrapper' : 'wrapper'">
        <div class="photo">
          <router-link :to="post.path">
            <div class="photo__image-wrapper">
              <img
                class="photo__image"
                v-if="post.frontmatter.picture"
                :src="$withBase(post.frontmatter.picture)"
                alt="">
            </div>
            <div class="photo__title">
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

<style lang="scss">

  .photo-page {
    &__title {
      font-size: 30px;
      color: #000;
      padding: 40px 30px;
      text-transform: uppercase;
    }

    .photo-posts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 15px;
    }

    .wrapper {
      display: flex;
      flex: 1 1 auto;
      width: 307px;
      height: 430px;
      border: 10px solid transparent;

      .photo {
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
          color: #000;
          font-size: 24px;
          line-height: 28px;
          padding: 40px 30px;
        }
      }
    }

    .double-wrapper {
      display: flex;
      flex: 1 1 auto;
      width: 645px;
      height: 430px;
      border: 10px solid transparent;

      .photo {
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
          height: 100%;
        }

        &__title {
          color: #fff;
          font-size: 24px;
          line-height: 28px;
          padding: 40px 30px;
          position: relative;
          text-transform: uppercase;
          max-width: 350px;
          top: 278px;
          left: 30px;
        }
      }
    }
  }
</style>
