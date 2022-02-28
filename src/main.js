import Vue from 'vue'
import App from './App.vue'
import VueAwesomeButtons from 'vue-awesome-buttons'
Vue.use(VueAwesomeButtons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
