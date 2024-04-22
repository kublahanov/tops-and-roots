import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { useUserStore } from "stores/user-store";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  const userStore = useUserStore();

  Router.beforeEach((to, from, next) => {
    if (to.meta["requiresAuth"]) {
      console.log("requiresAuth");

      if (userStore.isAuthenticated) {
        // User is authenticated, proceed to the route
        next();
      } else {
        // User is not authenticated, redirect to login
        next("/auth/login");
      }

      next();
    } else {
      // Non-protected route, allow access
      console.log("don't requiresAuth");
      next();
    }

    if (to.meta["requiresGuest"]) {
      console.log("requiresGuest");

      if (userStore.isGuest) {
        // User is authenticated, proceed to the route
        next();
      } else {
        // User is not authenticated, redirect to login
        next("/libs/books");
      }

      next();
    } else {
      // Non-protected route, allow access
      console.log("don't requiresGuest");
      next();
    }

  });

  return Router;
});

import { useSectionDataStore } from "stores/sectionData-store";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";
import { getMatchingMenuElement } from "src/utils/custom";

const combinedMenuLinks = [...appSectionMenuLinks, ...profileMenuLinks];

function beforeEnter(to, from) {
  const appStore = useSectionDataStore();
  const matchedLink = getMatchingMenuElement(combinedMenuLinks, to.path);
  appStore.updateAppSectionData(matchedLink);
}
