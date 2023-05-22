import { createRouter, createWebHistory } from "vue-router"
import StartView from "../views/StartView.vue"
import LoginView from "../views/LoginView.vue"
import SignupView from "../views/SignupView.vue"
import ForgetView from "../views/ForgetView.vue"
import ProjectsView from "../views/ProjectsView.vue"
import UsersView from "../views/UsersView.vue"
import ReportsView from "../views/ReportsView.vue"

// import ProjectsView from "../views/ProjectsView.vue"

// import ReportsView from "../views/ReportsView.vue"
// import UsersView from "../views/UsersView.vue"


const routes = [
  { path: "/", name: "start", component: StartView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/forget", name: "forget", component: ForgetView },
  { path: "/projects", name: "projects", component: ProjectsView },
  { path: "/users", name: "users", component: UsersView },
  { path: "/reports", name: "reports", component: ReportsView },

  // { path: "/projects", name: "projects", component: ProjectsView },
  // { path: "/reports", name: "reports", component: ReportsView },
  // { path: "/users", name: "users", component: UsersView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
