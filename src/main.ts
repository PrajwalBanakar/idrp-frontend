import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// Create app instance
const app = createApp(App)

// Create store instance (better for future plugins)
const pinia = createPinia()

// Register plugins
app.use(pinia)
app.use(router)

// Mount app
app.mount('#app')

app.config.errorHandler = (err, instance, info) => {
  console.error('Global Error:', err)
}
