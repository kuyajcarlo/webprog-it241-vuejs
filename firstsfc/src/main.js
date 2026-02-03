import App from './App.vue'
import FoodItem from './components/Fooditem.vue'
import FoodItem2 from './components/Fooditem2.vue'

const app = createApp(App)
app.component('food-item', Fooditem)
app.component('food-item2', Fooditem2)
app.mount('#app')
