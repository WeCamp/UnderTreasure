import Vue from 'vue'
import Vuex from 'vuex'

import User from '../objects/user.js'

Vue.use(Vuex);

const state = {
    user: new User(),
    amountCoinsPlaced: 0,
    coins: [],
    timeValue: '00:00:00',
    gameState: 'INITIAL' // INITIAL | RUNNING | END
};

const mutations = {
    SETCURRENTPOSITION (state, geolocation) {
        state.user.position = geolocation;
    },
    ADDCOIN (state, coin) {
        state.coins.push(coin);
        state.amountCoinsPlaced++;
    },
    GRABCOIN (state, coin) {
        if (state.gameState != 'RUNNING') {
            return;
        }
        let i = state.coins.indexOf(coin);
        state.coins.splice(i,1);
        state.user.coins.push(coin);
    },
    GAMESTART (state) {
        state.gameState = 'RUNNING';
    },
    GAMESTOP (state, timeValue) {
        state.gameState = 'END';
        state.timeValue = timeValue;
    }
};

export default new Vuex.Store({
    state,
    mutations
})