import List from "@/views/List.vue";
import Home from "@/views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/from",
    name: "From",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/From.vue"),
  },
];

export default routes
;
