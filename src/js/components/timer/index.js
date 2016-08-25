import template from './template.html';

export default {
	name: 'timer',
	template,
	data() {
		return {
			seconds:0
		}
	},
	created() {
		this.start()
	},
	computed: {
		timeValue: function () {
			let seconds = this.seconds;
			let minutes = 0;
			let hours = 0;
			if (seconds >= 60) {
				seconds = seconds % 60;
				minutes++;
				if (minutes >= 60) {
					minutes = minutes % 60;
					hours++;
				}
			}
			return this.builtTimeView(hours, minutes, seconds);
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
			self.watcher = setInterval(function() {self.update()}, 1000);
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
		 * 
		 * @param hours
		 * @param minutes
		 * @param seconds
		 * @returns {string}
		 */
		builtTimeView(hours, minutes, seconds){
			return (hours < 9 ? '0' + hours :  hours) + ':' +
				(minutes < 9 ? '0' + minutes :  minutes) + ':' +
				(seconds < 9 ? '0' + seconds :  seconds);
		}
	}

}