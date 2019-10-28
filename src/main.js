import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponents from './templates/iphone-11/components'

Vue.use(GlobalComponents)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
