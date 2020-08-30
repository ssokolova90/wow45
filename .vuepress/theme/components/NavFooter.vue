<template>
  <div  :class="isMain ? 'nav-footer nav-footer-main' : 'navbar'">

    <div
      class="links"
      :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }"
    >
      <NavLinks class="can-hide"/>
    </div>
  </div>
</template>

<script>
  import NavLinks from './NavLinks.vue'

  export default {
    components: { NavLinks },
    props: ['isMain'],

    data () {
      return {
        linksWrapMaxWidth: null
      }
    },

    mounted () {
      const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
      const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          this.linksWrapMaxWidth = null
        } else {
          this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
            (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
        }
      }
      handleLinksWrapWidth()
      window.addEventListener('resize', handleLinksWrapWidth, false)
    },

    computed: {
    }
  }

  function css (el, property) {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const win = el.ownerDocument.defaultView
    // null means not to return pseudo styles
    return win.getComputedStyle(el, null)[property]
  }
</script>

<style lang="scss">
  @import '../styles/config';

  $navbar-vertical-padding: 0.7px;
  $navbar-horizontal-padding: 1.5px;

  .nav-footer {
    padding: $navbar-vertical-padding $navbar-horizontal-padding;
    line-height: $navbarHeight;
    position: relative;

    a, span, img {
      display: inline-block;
    }

    .logo {
      vertical-align: center;
    }

    .site-name {
      font-size: 1.3rem;
      font-weight: 600;
      color: $textColor;
      position: relative;
    }

    .links {
      box-sizing: border-box;
      background-color: white;
      white-space: nowrap;
      position: absolute;
      right: $navbar-horizontal-padding;
      display: flex;

      .nav-links {
        flex: 1;
      }
    }
  }

  @media (max-width: $MQMobile) {
    .nav-bar {
      padding-left: 4rem;

      .can-hide {
        display: none;
      }

      .links {
        padding-left: 1.5rem;
      }
    }
  }

</style>
