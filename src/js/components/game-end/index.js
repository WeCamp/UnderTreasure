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
    methods: {
        restartGame: function () {
            window.location.reload(true);
        }
    },
    computed: {
        show() {
            return gameState == 'END';
        }
    }
}