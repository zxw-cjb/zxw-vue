import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './utils/fixed'

new Vue({
	beforeCreate() {
		Vue.prototype.$bus = this
	},
	render: (h) => h(App)
}).$mount('#app')
