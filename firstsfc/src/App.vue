<template>
  <div>
    <h1>Food</h1>
    <Profile />
    <FoodItem2 />
    <FoodItem />
  </div>
</template>

<script>
import FoodItem from './components/Fooditem.vue'
import FoodItem2 from './components/Fooditem2.vue'
import Profile from './components/Profile.vue'

export default {
  components: {
    FoodItem,
    FoodItem2,
    Profile
  }
}
</script>

<style></style>
