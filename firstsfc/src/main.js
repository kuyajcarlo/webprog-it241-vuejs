import { createApp } from 'vue'

import App from './App.vue'
import Fooditem from './components/Fooditem.vue'
import Fooditem2 from './components/Fooditem2.vue'
import Profile from './components/Profile.vue'

const app = createApp(App)
app.component('food-item', Fooditem)
app.component('food-item2', Fooditem2)
app.component('profile', Profile)
app.mount('#app')
