/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
// import './assets/main.css'

import { createApp } from 'vue'
import PrimeVueStyled from 'primevue/styled'
import App from './App.vue'
import Button from 'primevue/button'

const app = createApp(App)
app.use(PrimeVueStyled)
app.component('Button', Button)
app.mount('#app')
// createApp(App).mount('#app')
