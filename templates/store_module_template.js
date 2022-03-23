const initialState = () => ({});

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
      Object.keys(obj).forEach((key) => (state[key] = obj[key]));
    },
  },

  actions: {},
};
