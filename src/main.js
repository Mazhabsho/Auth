import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/index"
import axios from 'axios'
import store from "vuex"
const app = createApp(App)
app.use(router, store, axios)
app.mount('#app')
