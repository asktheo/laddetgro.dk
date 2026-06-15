import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import router from './router'
import { useMetaTags } from './composables/use-meta-tags'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Initialize meta tags after router is installed
app.mount('#app')
router.isReady().then(() => {
  useMetaTags()
})
