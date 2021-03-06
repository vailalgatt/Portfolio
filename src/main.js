// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueParticles from 'vue-particles'
import * as VueGoogleMaps from 'vue2-google-maps' 
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
//     libraries: 'places', // This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     // (as you require)
//   }
// })
Vue.use(VueParticles)
Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzYZd-wOu9o5enbhRgumWUsEzsqGeBR8g',
    libraries: 'places'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
