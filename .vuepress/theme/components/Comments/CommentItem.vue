<template>

  <div :class="$blockClassName">

    <!-- <Content :custom="false"/> -->

    <!--
        {{ JSON.stringify($page.frontmatter, null, ' ') }}
    -->

    <comment-card :item="$page">
    </comment-card>

  </div>

</template>

<script>
import CommentCard
  from "./CommentCard";

export default {
  name: 'CommentItem',
  components: {CommentCard},
}
</script>

<style lang="scss">

@import './CommentItemDesktop.scss';
@import './CommentItemMobile.scss';
</style>