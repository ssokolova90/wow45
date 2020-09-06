<template>
  <div class="page chronicle-details-page">

    <div
      v-if="$page.frontmatter"
      class="">

      <div class="chronicle-details">

        <div class="chronicle-details__image-wrapper">
          <img
            class="chronicle-details__image"
            v-if="$page.frontmatter.picture"
            :src="$withBase($page.frontmatter.picture)"
            alt="">
        </div>
        <div class="chronicle-details__person">
          {{ $page.frontmatter.first_name }}
          {{ $page.frontmatter.last_name }}
        </div>

        <div class="chronicle-details__position">
          {{$page.frontmatter.position}}
        </div>


        <Content :custom="false"/>

      </div>

      <Chronicle path="/chronicle"></Chronicle>

    </div>

    <div class="chronicle-peoples">

      <div class="wrapper"
           v-for="peoplePost in peoplePosts">
        <div
          v-if="peoplePost.frontmatter"
          class="veteran-post">
          <router-link :to="peoplePost.path">
            <div class="veteran-post__image-wrapper">
              <img
                class="veteran-post__image"
                v-if="peoplePost.frontmatter.picture"
                :src="$withBase(peoplePost.frontmatter.picture)"
                alt="">
            </div>
            <div class="veteran-post__person">
              {{ peoplePost.frontmatter.first_name }}
              {{ peoplePost.frontmatter.last_name }}
            </div>

            <div class="veteran-post__position">
              {{peoplePost.frontmatter.position}}
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Chronicle from "../../../components/Chronicle";
  export default {
    components: {Chronicle},
    computed: {
      peoplePosts() {

        return this.$veg.filterPages(this.$site.pages, '/people');

      }
    }
  };
</script>

<style lang="scss">

  .chronicle-details-page {
    display: flex;
  }

  .chronicle-peoples {
    padding: 15px;

    .wrapper {
      height: 355px;
    }
  }

  .chronicle-details {

    padding: 15px;
    background: #fff;

    &__image-wrapper {
      position: relative;
    }
  }

  .veteran-post {
    display: flex;

    &__person {
      color: #000;
      font-size: 24px;
      line-height: 28px;
      padding: 40px 30px;
      position: relative;
      top: -160px;
    }

    &__position {
      color: #D5AE75;
      font-size: 13px;
      line-height: 18px;
      padding: 0 30px;
      position: relative;
      top: -169px;
    }
  }

</style>
