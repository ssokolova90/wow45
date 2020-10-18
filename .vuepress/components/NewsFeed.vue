<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Новости
    </div>

    <div :class="$e('posts')">

      <theme-panel
        v-for="(chronicle, index) in $pages('/chronicle')"
        :item="chronicle"
        :key="index"
        :doubleSize="index < 2">

      </theme-panel>

    </div>
  </div>

</template>


<script>

  import ThemePanel
    from '../theme/components/Theme/ThemePanel';

  export default {
    name: 'NewsFeed',
    components: {
      ThemePanel
    },
  };
</script>

<style lang="scss">
  
  @import './NewsFeedDesktop.scss';
  @import './NewsFeedMobile.scss';
</style>
