import Vue from 'vue';
import Vuex from 'vuex';
import carrinho from './carrinho';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {carrinho}
})