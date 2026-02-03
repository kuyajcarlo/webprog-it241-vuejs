import App from './App.vue'
import FoodItem from './components/Fooditem.vue'
import FoodItem2 from './components/Fooditem2.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.mount('#app')
