<template>
  <div class="posts">

    <h1>Ебать мой хуй, оно работает!</h1>

    <h5> {{this.path}} </h5>
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">

        {{ JSON.stringify(post.frontmatter) }}
        <div>
          <img v-if="post.frontmatter.picture" :src="$withBase(post.frontmatter.picture)" alt="">
        </div>
        <h2>{{post.frontmatter.first_name }} {{post.frontmatter.last_name }}</h2>
        <p>{{post.frontmatter.position}}</p>
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