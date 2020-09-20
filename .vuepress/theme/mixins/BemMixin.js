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
      return $veg.b(
        $veg.camelToKebab(this.$options.name),
        null,
        this.$blockClassModifier
      );
    },
  },
  methods: {
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
    }
  }
}