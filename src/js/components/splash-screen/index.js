import template from './template.html';
import store from './../../vuex/store.js';

export default {
    name: 'splash-screen',
    template,
    components: {
    },
    vuex: {
        getters: {
            gameState: function (state) {
                return state.gameState;
            }
        }
    },
    methods: {
        startGame: function () {
            this.$root.$refs.statusbar.$refs.timer.start();
            store.dispatch('GAMESTART');
        }
    },
    computed: {
        show() {
            return this.gameState == 'INITIAL';
        }
    }
}