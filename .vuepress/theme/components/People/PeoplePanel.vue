<template>
  <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

<!--    <router-link-->
<!--      :to="{ path: item.path }"-->
<!--      :class="$e('router-link')">-->

    <a
      :class="$e('router-link')"
      :href="item.path">

      <div
        :class="$e('image')"
        :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
        v-if="item.frontmatter.picture">
      </div>

      <div :class="$e('title')">
        {{ item.frontmatter.title }}
      </div>
    </a>
     <!--    </router-link>-->
  </div>

</template>

<script>
  export default {
    name: 'PeoplePanel',
    props: ['item'],
    mounted() {
      console.log(this.item)
    }
  }
</script>

<style lang="scss">

  @import './PeoplePanelDesktop.scss';
  @import './PeoplePanelMobile.scss';

</style>