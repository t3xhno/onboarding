const ASYNC_DELAY = 3000;

const initialState = () => ({
  perPage: 5,
  kaca: "lepa",
  lol: "hehe xd",
});

export default {
  state: initialState(),

  getters: {
    getByKey: (state) => (key) => state[key],
  },

  mutations: {
    resetState(state) {
      Object.assign(state, initialState());
    },

    setByKey(state, obj) {
      Object.keys(obj).forEach((key) => {
        state[key] = obj[key];
      });
    },
  },

  actions: {
    setWithDelay({ commit, state }, obj) {
      state.kaca = "hehe state menja prvo";
      setTimeout(() => {
        commit("setByKey", obj);
      }, ASYNC_DELAY);
    },
  },

  namespaced: true,
};
