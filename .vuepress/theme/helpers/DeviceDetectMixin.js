import { mapGetters } from "vuex";

export default {

  data() {
    return {
      mobileDeviceText: 'Hello from mobile device',
      desktopDeviceText: 'Hello from desktop device'
    }
  },
  computed: {

    ...mapGetters({
      isMobile: "device_detect/isMobile",
    }),

    testMessage() {
      return this.isMobile
        ? this.mobileDeviceText
        : this.desktopDeviceText;
    }
  },
}