import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import titleMixin from './mixins/titleMixin.js'
import {store} from './store/store'

Vue.mixin(titleMixin)

Vue.config.productionTip = false


new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
