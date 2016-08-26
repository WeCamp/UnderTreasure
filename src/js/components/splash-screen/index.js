import template from './template.html';

export default {
    name: 'splash-screen',
    template,
    components: {
    },
    vuex: {
        getters: {

        }
    },
    methods: {
        restartGame: function () {

        }
    },
    computed: {
        show() {
            return true;
            // return gameState == 'SPLASH';
        }
    }
}