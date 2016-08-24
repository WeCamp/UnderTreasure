import template from './template.html';

export default {
	name: 'timer',
	template,
	created() {
		this.start()
	},
	computed: {
		timeValue: function () {
			if (this.seconds >= 60) {
				this.seconds = 0;
				this.minutes++;
				if (this.minutes >= 60) {
					this.minutes = 0;
					this.hours++;
				}
			}

			return this.hours + ':' + this.minutes +  ':' + this.seconds;
		}
	},
	methods: {
		start() {
			this.seconds = 0;
			this.minutes = 0;
			this.hours = 0;

			this.watcher = setTimeout(this.update, 1000);
		},
		stop(){
			console.info('T');
			clearTimeout(this.watcher);
		},
		update(){
			console.info(this.seconds);
			this.seconds++;
		}
	}

	// vuex: {
	// 	getters: {
	// 		user: function (state) {
	// 			return state.user
	// 		}
	// 	}
	// }
}