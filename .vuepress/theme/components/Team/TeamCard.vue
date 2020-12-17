<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div
          v-if="item && item.frontmatter && item.frontmatter.picture"
          :class="$e('publication')">

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

      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'TeamCard',
  props: ['item']
};
</script>

<style lang="scss">

@import './TeamCardDesktop.scss';
@import './TeamCardMobile.scss';

</style>