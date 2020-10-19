<template>
  <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <router-link
      :to="item.path"
      :class="$e('router-link')">

      <div
        :class="$e('image')"
        :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
        v-if="item.frontmatter.picture">
      </div>

      <div :class="$e('person')">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{ item.frontmatter.position }}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'PeoplePanel',
    props: ['item']
  }
</script>

<style lang="scss">

  @import './PeoplePanelDesktop.scss';
  @import './PeoplePanelMobile.scss';

</style>