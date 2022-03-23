import { createStore } from "vuex";

const context = require.context("./modules", false, /\.js$/);

const modules = context
  .keys()
  .map((file) => [file.slice(2, -3), context(file)])
  .reduce((modules, [name, module]) => {
    if (!module.default.namespaced) module.default.namespaced = true;
    return {
      ...modules,
      [name]: module.default,
    };
  }, {});

export default createStore({
  modules,
});
