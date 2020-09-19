import { mapGetters } from "vuex";
import veg from '../helpers/veg.js';

export default {

  props: [
    'modifier',
    'disableMobileDetect'
  ],
  computed: {
    ...mapGetters({
      isMobile: 'device_detect/isMobile',
    }),
    blockClassModifier() {

      if (this.disableMobileDetect) {
        return this.modifier;
      }

      const mobileText = this.isMobile ? 'mobile' : 'desktop';
      return [this.modifier, mobileText].join('-');
    },
    blockClassName() {
      return veg.b(this.name, null, this.blockClassModifier());
    },
  },
}