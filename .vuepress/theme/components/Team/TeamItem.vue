<template>

  <div :class="$blockClassName">

    <team-card
        v-if="selectedPosition !== undefined"
        :item="selectedPerson">
    </team-card>

    <div :class="$e('title')">
      {{ $page.frontmatter.title }}
    </div>

    <div :class="$e('posts')">

      <team-person-panel
        v-for="(team, index) in $items($page.frontmatter.Member)"
        :key="index"
        :item="team"
        @click="selectPosition(index)">
      </team-person-panel>

    </div>
  </div>

</template>

<script>

  import TeamPersonPanel
    from './TeamPersonPanel';

  import TeamCard
    from "./TeamCard";

  export default {
    name: 'TeamItem',
    components: {
      TeamPersonPanel,
      TeamCard
    },
    props: ['path'],
    data() {
      return {
        selectedPosition: undefined
      }
    },
    computed: {
      selectedPerson() {

        if (this.selectedPosition === undefined) {
          return null;
        }
        let members = this.$page.frontmatter.Member;

        let member = this.$items(members)[this.selectedPosition];

        console.log(member);

        return member;
      },
    },
    methods: {
      selectPosition(selectedPosition) {
        this.selectedPosition = selectedPosition;
        window.scrollTo(0,0);
      }
    },
  };
</script>

<style lang="scss">

  @import 'TeamItemDesktop';
  @import 'TeamItemMobile';
</style>
