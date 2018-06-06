require('./bootstrap');

import Vue from 'vue'
import router from './routes/routes'
import store from './store/store'

const app = new Vue({
    store,
    router,
    el: '#app'
});
