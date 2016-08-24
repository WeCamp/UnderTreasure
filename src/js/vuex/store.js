import Vue from 'vue'
import Vuex from 'vuex'

import User from '../objects/user.js'

Vue.use(Vuex);

const state = {
    user: new User(),
};

const mutations = {
    SETCURRENTPOSITION (state, geolocation) {
        state.user.position = geolocation;
    }
}

export default new Vuex.Store({
    state,
    mutations
})