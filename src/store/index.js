import Vue from 'vue';
import Vuex from 'vuex';
// 其他模块
import permission from './modules/permission';
import setting from './modules/setting';
import tagsView from './modules/tagsView';
import user from './modules/user';
// 项目中统一的getter
import getters from './getters';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    permission,
    setting,
    tagsView,
    user
  },
  getters
});

export default store;
