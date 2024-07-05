import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import ChatPage from "./pages/ChatPage.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "LoginPage", component: LoginPage },
  { path: "/chat", name: "ChatPage", component: ChatPage },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
