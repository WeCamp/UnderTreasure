import Vue from 'vue'
import Vuex from 'vuex'

import User from '../objects/user.js'

Vue.use(Vuex);

const state = {
    user: new User(),
    coins: [],
    gameState: 'INITIAL' // INITIAL | RUNNING | END
};

const mutations = {
    SETCURRENTPOSITION (state, geolocation) {
        state.user.position = geolocation;
    },
    ADDCOIN (state, coin) {
        state.coins.push(coin);
    },
    GRABCOIN (state, coin) {
        let i = state.coins.indexOf(coin);
        state.coins.splice(i,1);
        state.user.coins.push(coin);
    },
    GAMESTART (state) {
        state.gameState = 'RUNNING';
    },
    GAMESTOP (state) {
        state.gameState = 'END';
    }
};

export default new Vuex.Store({
    state,
    mutations
})