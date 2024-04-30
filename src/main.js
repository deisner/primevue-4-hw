// import './assets/main.css'

import { createApp } from 'vue'
import PrimeVueStyled from 'primevue/styled'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVueStyled)
app.mount('#app')
// createApp(App).mount('#app')
