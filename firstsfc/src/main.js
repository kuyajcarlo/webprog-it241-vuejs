import { createApp } from 'vue'
import App from './App.vue'

import PersonalProfile from './components/Profile.vue'
import Fooditem from './components/Fooditem.vue'
import Fooditem2 from './components/Fooditem2.vue'
import CommentForm from './components/CommentForm.vue'
import Comments from './components/Comments.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)

app.component('personal-profile', PersonalProfile)
app.component('food-item', Fooditem)
app.component('food-item2', Fooditem2)
app.component('comment-form', CommentForm)
app.component('comments', Comments)
app.component('rest-api', RestApi)

app.mount('#app')
