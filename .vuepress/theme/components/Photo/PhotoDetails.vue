<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div :class="$e('image-wrapper')">
        <img
          :class="$e('image')"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div :class="$e('person')">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{$page.frontmatter.position}}
      </div>

      <div :class="$e('content')">

        <Content :custom="false"/>
      </div>

    </div>

      <photo :path='"/photo"'>
      </photo>
  </div>

</template>

<script>
  export default {
    name: 'PhotoDetails'
  };
</script>


<style lang="scss">

  @import './PhotoDetailsDesktop.scss';
  @import './PhotoDetailsMobile.scss';
</style>