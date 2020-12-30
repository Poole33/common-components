import Vue from 'vue'
import App from './App.vue'
import TestButton from '../components/index'
Vue.use(TestButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
