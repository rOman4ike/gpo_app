import { createRouter, createWebHistory } from "vue-router"
import StartView from "../views/StartView.vue"
import LoginView from "../views/LoginView.vue"
import SignupView from "../views/SignupView.vue"
import ForgetView from "../views/ForgetView.vue"
import ProjectsView from "../views/ProjectsView.vue"
import ProjectView from "../views/ProjectView.vue"
import UsersView from "../views/UsersView.vue"
import ReportsView from "../views/ReportsView.vue"
import UserView from "../views/UserView.vue"

const routes = [
  { path: "/", name: "start", component: StartView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/forget", name: "forget", component: ForgetView },
  { path: "/projects", name: "projects", component: ProjectsView },
  { path: "/projects/:id", name: "project", component: ProjectView },
  { path: "/users", name: "users", component: UsersView },
  { path: "/reports", name: "reports", component: ReportsView },
  { path: "/user/:id", name: "user", component: UserView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
