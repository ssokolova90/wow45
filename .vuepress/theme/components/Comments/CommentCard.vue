<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div
          v-if="item && item.frontmatter"
          :class="$e('publication')">

        <div
            :class="$e('image')"
            :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }"
            v-if="item.frontmatter.picture">
        </div>

        <div :class="$e('person')">
          {{ item.frontmatter.title }}
        </div>

        <div :class="$e('position')">
          {{ item.frontmatter.description }}
        </div>

        <div :class="$e('content')">
          {{ item.frontmatter.body }}

          <Content :custom="false"></Content>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'CommentCard',
  props: ['item']
};
</script>

<style lang="scss">

@import './CommentCardDesktop.scss';
@import './CommentCardMobile.scss';

</style>

