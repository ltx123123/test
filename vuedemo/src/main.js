// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import  Icon from 'vue-awesome/components/Icon'

import 'view-design/dist/styles/iview.css';    // 使用 CSS

// import { Switch, circle } from 'iview'

import iView from 'view-design';
Vue.use(iView);
Vue.component('icon',Icon);
// vue.component('i-switch',Switch);
// vue.component('i-circle',circle);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

