import Vue from 'vue';
import App from './App.vue';

// import VueGeoLocation from 'vue-browser-geolocation';

Vue.config.productionTip = false;
// Vue.use(VueGeoLocation);

new Vue({

  render: (h) => h(App),
}).$mount('#app');
