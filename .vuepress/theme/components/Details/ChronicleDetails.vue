<template>
  <div class="page chronicle-details-page">

    <div
      v-if="$page.frontmatter"
      class="chronicle-details">

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

    <div class="chronicle-peoples">

      <div class="wrapper"
           v-for="peoplePost in peoplePosts">
        <div
          v-if="peoplePost.frontmatter"
          class="post">
          <router-link :to="peoplePost.path">
            <div class="post__image-wrapper">
              <img
                class="post__image"
                v-if="peoplePost.frontmatter.picture"
                :src="$withBase(peoplePost.frontmatter.picture)"
                alt="">
            </div>
            <div class="post__person">
              {{ peoplePost.frontmatter.first_name }}
              {{ peoplePost.frontmatter.last_name }}
            </div>

            <div class="post__position">
              {{peoplePost.frontmatter.position}}
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        peoplePostsPath: '/people'
      }
    },
    computed: {
      peoplePosts() {

        console.log('PEOPLE POSTS PAGES ', this.$site.pages);

        let posts = this.$site.pages.filter(x => {
          return x.path.match(new RegExp(`(${this.peoplePostsPath})(?=.*html)`));
        });
        return posts;
      }
    }
  };
</script>

<style lang="stylus">

  .chronicle-details-page
    display flex

  .chronicle-peoples
    padding 15px

  .chronicle-details
    padding 15px
    background #fff

    &__image-wrapper
      position relative

</style>