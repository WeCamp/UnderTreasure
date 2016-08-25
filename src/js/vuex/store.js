import Vue from 'vue'
import Vuex from 'vuex'

import User from '../objects/user.js'

Vue.use(Vuex);

const state = {
    user: new User(),
    coins: [],
};

const mutations = {
    SETCURRENTPOSITION (state, geolocation) {
        state.user.position = geolocation;
    },
    ADDCOIN (state, coin) {
        state.coins.push(coin);
    },
};

export default new Vuex.Store({
    state,
    mutations
})