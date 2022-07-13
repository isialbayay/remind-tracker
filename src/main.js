import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/userStore.js'
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FlashMessage from '@smartweb/vue-flash-message';

createApp(App).use(store).use(router).use(FlashMessage).mount('#app')

