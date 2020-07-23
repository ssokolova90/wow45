<template>
  <div class="posts">

    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <div>
          <img v-if="post.frontmatter.picture" :src="$withBase(post.frontmatter.picture)" alt="">
        </div>
        <h2>{{ post.frontmatter.title }}</h2>
        <p>{{ post.frontmatter.description }}</p>
      </router-link>
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