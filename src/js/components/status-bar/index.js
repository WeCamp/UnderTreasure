import template from './template.html';
import Timer from '../timer';

export default {
    name: 'status-bar',
    template,
    components: {
        Timer
    },
    vuex: {
        getters: {
            user: function (state) {
                return state.user
            },
            amountCoinsPlaced: function (state) {
                return state.amountCoinsPlaced
            }
        }
    }
}