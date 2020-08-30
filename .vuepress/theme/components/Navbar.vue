<template>
  <header :class="isMain ? 'navbar navbar-main' : 'navbar'">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >

      <img
        class="mobile-logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.mobileLogo)"
        :alt="$siteTitle"
      >

    </router-link>

    <div
      class="links"
      :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }"
    >
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks },

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

$navbar-vertical-padding: 0.7em;
$navbar-horizontal-padding: 1.5em;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight;
  position: relative;

  a, span, img {
    display: inline-block;
  }

  .logo {
    vertical-align: center;
  }

  .mobile-logo {
    display: none;
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
  .navbar {
    background: white !important;
    background-image: none !important;
    height: 62px;
    width: 100% !important;
    padding: 0;

    .mobile-logo {
      display: block;
      position: fixed;
      height: 62px;
      width: 62px;
      top: 33px;
      left: 33px;
    }

    .logo {
      display: none;
    }

    .sidebar-button {
      display: block;
      position: fixed;
      width: 62px;
      height: 62px;
      color: #D7B37F;
      left: calc(100% - 115px);
      top: 25px;

      .icon {
        width: 100%;
        height: 100%;
      }
    }

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }
  }
}
</style>
