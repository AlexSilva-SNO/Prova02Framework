import { createApp } from 'vue'
import App from './App.vue'
import { vuetify, router, pinia } from './plugins'
//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://abstract-stage-403705-default-rtdb.europe-west1.firebasedatabase.app/'
const app = createApp(App)

app.use(VueAxios, axios)
app.use(vuetify)
app.use(router)
app.use(pinia)
app.config.globalProperties.$axios = axios

app.mount('#app')
