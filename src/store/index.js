import { createStore } from "vuex";
import { userStore } from "./user";
import { projectStore } from "./project";

export default createStore({
  modules: {
    user: { namespaced: true, ...userStore },
    project: {namespaced: true, ...projectStore }
  },
});
