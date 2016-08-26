import template from './template.html';

export default {
    name: 'timer',
    template,
    data() {
        return {
            seconds: 0,
            minutes: 0,
            hours: 0,
        }
    },
    created() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    },
    computed: {
        timeValue: function () {
            if (this.seconds >= 60) {
                this.seconds %= 60;
                this.minutes++;
                if (this.minutes >= 60) {
                    this.minutes %= 60;
                    this.hours++;
                }
            }
            return this.builtTimeView(this.hours, this.minutes, this.seconds);
        }
    },
    methods: {
        /**
         * Control timer
         */
        reset() {
            let self = this;
            clearInterval(self.watcher);
            this.seconds = 0;
            this.start();
        },
        start() {
            let self = this;
            this.seconds = 0;
            self.watcher = setInterval(function () {
                self.update()
            }, 1000);
        },
        stop(){
            let self = this;
            clearInterval(self.watcher);
        },
        update(){
            let self = this;
            this.seconds++;
        },

		/**
		 * Build time view
		 * @param hours
		 * @param minutes
		 * @param seconds
		 * @returns {string}
		 */
		builtTimeView(hours, minutes, seconds){
			return (hours <= 9 ? '0' + hours :  hours) + ':' +
				(minutes <= 9 ? '0' + minutes :  minutes) + ':' +
				(seconds <= 9 ? '0' + seconds :  seconds);
		}
	},
    vuex: {
        getters: {
            gameState: function (state) {
                return state.gameState
            }
        }
    },
    watch: {
        'gameState': function(value) {
            if (value == 'END') {
                this.stop();
            }
        }
    },
}