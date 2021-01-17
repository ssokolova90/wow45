<template>
  <div :class="$blockClassName">

    <div :class="$e('chronicle')">

      <main-chronicle-panel
        v-for="lastTheme in $pages('/themes', 1)"
        :item="lastTheme">
      </main-chronicle-panel>

      <comment-panel
        v-for="comment in $pages('/Commments', 2)"
        :item="comment">
      </comment-panel>

    </div>
  </div>
</template>

<script>
  import MainChroniclePanel
    from '../Chronicle/MainChroniclePanel';

  import CommentPanel
    from '../Comments/CommentPanel';

  export default {
    name: 'WowBlock',
    components: {
      CommentPanel,
      MainChroniclePanel
    },
  };
</script>


<style lang="scss">

  @import 'WowBlockDesktop';
  @import 'WowBlockMobile';

</style>