import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import index from './views/index.js'
createApp(App).use(router, index).mount('#app')
