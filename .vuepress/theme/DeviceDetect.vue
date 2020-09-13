<template>
  <div class="device-detect">
  </div>
</template>

<script>

  import {mapActions } from "vuex";

  export default {
    name: "DeviceDetect",

    methods: {

      ...mapActions({
        onResize: "device_detect/onResize",
      })
    },
    mounted() {

      if (typeof window === 'undefined') {
        return;
      }

      window.addEventListener(
        'resize',
        this.onResize,
        { passive: true }
      );
    },
    destroyed() {

      if (typeof window === 'undefined') {
        return;
      }

      window.removeEventListener(
        'resize',
        this.onResize,
        { passive: true }
      );
    }
  }
</script>

<style lang="scss">

  .device-detect {
    display: none;
  }

</style>