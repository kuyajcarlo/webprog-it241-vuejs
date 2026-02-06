import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import Fooditem from './components/Fooditem.vue'
import Fooditem2 from './components/Fooditem2.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/comment.vue'


const app = createApp(App)
app.component('personal-profile', PersonalProfile)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')
