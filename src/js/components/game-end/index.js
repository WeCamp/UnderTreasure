import template from './template.html';

export default {
    name: 'game-end',
    template,
    components: {
    },
    vuex: {
        getters: {
            gameState: function (state) {
                return state.gameState;
            },
            timeValue: function(state) {
                return state.timeValue;
            }
        }
    },
    computed: {
        show() {
            return true;
            return gameState == 'END';
        }
    }
}