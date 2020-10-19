<template>

  <div
    :class="$blockClassName">

    <div
      :class="$e('details')"
      v-if="$page && $page.frontmatter && $page.frontmatter.title">

      <div
        :class="$e('image')"
        :style="{backgroundImage: 'url(' + $page.frontmatter.picture + ')'}"
        v-if="$page.frontmatter.picture">
      </div>

      <div :class="$e('title')">
        {{ $page.frontmatter.title }}
      </div>

      <div :class="$e('event-date')">
        {{ $formatDate($page.frontmatter.event_date) }}
      </div>

      <div :class="$e('content')">
        <Content :custom="false"/>
      </div>

    </div>

    <Theme :path='"/themes"'>
    </Theme>

  </div>

</template>

<script>
  export default {
    name: 'ThemeDetails',
  };
</script>

<style lang="scss">

  @import './ThemeDetailsDesktop.scss';
  @import './ThemeDetailsMobile.scss';
</style>