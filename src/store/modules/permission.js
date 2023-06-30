import { baseRoute, asyncRoutes } from '@/router';
// import router, { resetRouter } from '@/router';
const state = {
  routes: []
};

const mutations = {
  SET_ROUTE(state, route) {
    state.routes = baseRoute.concat(route);
  },
  RESET_ROUTE(state) {
    state.routes = [];
  }
};

const actions = {
  getRoute({ commit }, role) {
    return new Promise((resolve, reject) => {
      let accessedRoutes = [];
      accessedRoutes = filterAsyncRoute(asyncRoutes, role);
      commit('SET_ROUTE', accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export function filterAsyncRoute(routes, role) {
  let arr = [];
  routes.forEach(item => {
    const temp = { ...item };
    if (hasChildren(temp, role)) {
      if (temp.children) {
        temp.children = filterAsyncRoute(temp.children, role);
      }
      arr.push(temp);
    }
  });
  return arr;
}

export function hasChildren(route, role) {
  let roleIds = role.split(',');
  if (route.meta && route.meta.role) {
    return roleIds.includes(String(route.meta.role));
  } else {
    return true;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
