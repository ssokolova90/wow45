import { mapGetters } from "vuex";
import $veg from '../helpers/veg.js';

export default {

  props: [
    'modifier',
    'disableMobileDetect'
  ],
  computed: {
    ...mapGetters({
      isMobile: 'device_detect/isMobile',
    }),
    $blockClassModifier() {

      if (this.disableMobileDetect) {
        return this.modifier;
      }

      const mobileText = this.isMobile ? 'mobile' : 'desktop';

      if (!this.modifier) {
        return mobileText;
      }

      return [this.modifier, mobileText].join('-');
    },

    $blockClassName() {

      /// my-class-name--my-modifier

      return $veg.b(
        $veg.camelToKebab(this.$options.name),
        null,
        this.$blockClassModifier
      );
    },
  },
  methods: {

    /// my-class-name--my-modifier__element-name--element-modifier

    $e(element, modifier) {
      return $veg.b(
        this.$blockClassName,
        element,
        modifier
      );
    },
    $pages(path, limit) {

      let result = $veg.filterPages(this.$site.pages, path);

      if (!limit) {
        return result;
      }

      return result.slice(0, +limit);
    },
    $items(itemsList) {

      if (!itemsList || !itemsList.length) {
        return null;
      }

      return itemsList.map(item => {
        return {
          path: this.$page.path,
          relativePath: this.$page.relativePath,
          frontmatter: { ...item }
        }
      })
    }
  }
}