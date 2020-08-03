<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      :isMain="isMainPage"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <div
      v-if="isMainPage"
      class="main-picture">

      <img
        src="/images/assets/main.jpg">

    </div>

    <div
      v-if="componentNameValue"
      class="custom-layout">

      <component
        v-if="componentNameValue"
        :is="componentNameValue"/>

    </div>

    <div
      class="custom-layout"
      v-if="$page.frontmatter.layout && !componentNameValue"
    >
      <component
        v-if="!componentNameValue"
        :is="$page.frontmatter.layout"/>

      <component
        v-if="componentNameValue"
        :is="componentNameValue">

        <Page
          :is-main="isMainPage"
          :sidebar-items="sidebarItems">
          <slot
            name="page-top"
            slot="top"
          />
          <slot
            name="page-bottom"
            slot="bottom"
          />
        </Page>

      </component>

    </div>



    <div v-else-if="$page.frontmatter.layout">

      <component
        v-if="componentNameValue"
        :is="componentNameValue">

        <Page
          :is-main="isMainPage"
          :sidebar-items="sidebarItems">
          <slot
            name="page-top"
            slot="top"
          />
          <slot
            name="page-bottom"
            slot="bottom"
          />
        </Page>

      </component>
    </div>

    <Page
      v-if="!componentNameValue"
      :is-main="isMainPage"
      :sidebar-items="sidebarItems"
    >

      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>


    <div class="footer-nav">

      <div class="footer-nav__about">
        © Парад Памяти, посвящённый военному параду в г. Куйбышеве 7 ноября 1941 года.
      </div>
      <NavLinks class="can-hide"/>
    </div>
    <SWUpdatePopup :updateEvent="swUpdateEvent"/>
  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import SWUpdatePopup from './components/SWUpdatePopup.vue'
import Home from './layouts/Home.vue'
import Page from './layouts/Page.vue'
import { resolveSidebarItems } from './helpers/util'

import ChronicleDetails from './components/Details/ChronicleDetails.vue';
import PeopleDetails from './components/Details/PeopleDetails.vue';
import PhotoDetails from './components/Details/PhotoDetails.vue';
import TeamDetails from './components/Details/TeamDetails.vue';
import ThemeDetails from './components/Details/ThemeDetails.vue';
import VideoDetails from './components/Details/VideoDetails.vue';
import NavFooter from "./components/NavFooter.vue";
import NavLinks from './components/NavLinks.vue';

export default {

  components: {
    NavFooter,
    Home,
    Page,
    Sidebar,
    Navbar,
    NavLinks,
    SWUpdatePopup,
    ChronicleDetails,
    PeopleDetails,
    PhotoDetails,
    TeamDetails,
    ThemeDetails,
    VideoDetails
  },

  data () {
    return {
      isSidebarOpen: false,
      swUpdateEvent: null
    }
  },

  computed: {
    isMainPage() {

      const detailPath = this.$page.regularPath.split('/');

      return detailPath.length == 2
        && detailPath[0].length == 0
        && detailPath[1].length == 0;
   },
   componentNameValue() {

      const componentsMap = {
        'chronicle': 'ChronicleDetails',
        'people': 'PeopleDetails',
        'photo': 'PhotoDetails',
        'team': 'TeamDetails',
        'themes': 'ThemeDetails',
        'video': 'VideoDetails'
      };

      const detailPath = this.$page.regularPath.split('/');

      if (!detailPath[2] || !detailPath[2].length) {
        return null;
      }

      const openedPagePath = detailPath[1];

      return componentsMap[openedPagePath];
    },

    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })

    this.$on('sw-updated', this.onSWUpdated)
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },

    onSWUpdated (e) {
      this.swUpdateEvent = e
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
