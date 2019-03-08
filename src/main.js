import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Recipe from './RecipePage.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Recipe',
			component: Recipe
		}
	]
})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
