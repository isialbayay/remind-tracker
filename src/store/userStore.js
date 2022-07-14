import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin:0
  },
  getters: {},
  mutations: {
    changeIsLogin(state, value){
      state.isLogin=value
    }
  },
  actions: {},
  modules: {},
});
