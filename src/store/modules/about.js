const initialState = () => ({
  message: "h8ers",
  moduleName: "auth and about",
});

export default {
  state: initialState(),
  getters: {
    getByKey: (state) => (key) => state[key],
  },
};
