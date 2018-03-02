import Vue from 'vue'
import App from './App.vue'

import animateCSS from './assets/animate.css'
import icons from './icons/icons.vue'
import sqblLogin from './components/login.vue';
import sqblNavigation from './components/navigation.vue';

Vue.component('icon', icons);

new Vue({
    el: '#app',
    render: h => h(App)
})