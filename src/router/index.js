import { createRouter, createWebHistory } from "vue-router"
// import HomeView from "../views/HomeView.vue"
// import LoginView from "../views/LoginView.vue"
// import SignupView from "../views/SignupView.vue"
// import ProjectsView from "../views/ProjectsView.vue"

// import ReportsView from "../views/ReportsView.vue"
// import UsersView from "../views/UsersView.vue"


const routes = [
  // { path: "/", name: "home", component: HomeView },
  // { path: "/signup", name: "signup", component: SignupView },
  // { path: "/login", name: "login", component: LoginView },
  // { path: "/projects", name: "projects", component: ProjectsView },
  // { path: "/reports", name: "reports", component: ReportsView },
  // { path: "/users", name: "users", component: UsersView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
