import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
         tabIndex:2
    },
    mutations: {
         setTabIndex(state,data){ 
             state.tabIndex=data;
         }
    },
    actions: {}
})
export default store