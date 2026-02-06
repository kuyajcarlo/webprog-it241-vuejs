import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/Profile.vue'
import Fooditem from './components/Fooditem.vue'
import Fooditem2 from './components/Fooditem2.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/comment.vue'


const app = createApp(App)
app.component('personal-profile', Profile)
app.component('food-item', Fooditem)
app.component('food-item2', Fooditem2)
app.component('comment-form', CommentForm)
app.component('comment', comment)
app.mount('#app')
