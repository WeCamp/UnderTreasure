import template from './template.html';

export default {
    name: 'status-bar',
    template,
    vuex: {
        getters: {
            user: function (state) {
                return state.user
            }
        }
    }
}