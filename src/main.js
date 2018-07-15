// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

import Master from './layouts/elaadmin/Master.vue'
import Landing from './layouts/elaadmin/Landing.vue'

Vue.component('master-layout', Master)
Vue.component('landing-layout', Landing)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
