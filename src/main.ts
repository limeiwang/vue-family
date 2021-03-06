import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'element-plus/dist/index.css'
import './assets/css/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import ElementPlus from 'element-plus'

createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')
