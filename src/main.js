import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css' //轮播图css

Vue.config.productionTip = false;
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
