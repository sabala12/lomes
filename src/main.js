import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
})

Vue.config.productionTip = false

new Vue({
  VueShowdown,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
