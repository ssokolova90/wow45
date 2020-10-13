export default {

  namespaced: true,

  state: {

    isMobileDevice: false
  },
  getters: {

    isMobile(state) {

      return state.isMobileDevice;
    },
  },
  mutations: {

    setIsMobile(state, isMobileDevice) {
      state.isMobileDevice = !!isMobileDevice;
    }
  },
  actions: {

    onResize(state) {

      if (typeof window === 'undefined') {
        return;
      }

      state.commit('setIsMobile', window.innerWidth < 719);
    }
  }
}
