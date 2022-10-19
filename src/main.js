import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/reset.css"

import "./styles/_common.sass"
import "./styles/_fonts.sass"
import "./styles/_form.sass"

createApp(App)
  .use(store)
  .use(router)
  .mount("#app")
