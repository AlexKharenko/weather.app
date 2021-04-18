const state = {
  ready: false,
};

const getters = {
  isReady: (state) => state.ready,
};

const actions = {
  changeReady({ commit }, ready) {
    commit("setReady", ready);
  },
};

const mutations = {
  setReady: (state, ready) => (state.ready = ready),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
