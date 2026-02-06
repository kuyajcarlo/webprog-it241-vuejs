<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])
const comments = ref([])


async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
  async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}
  onMounted(() => {
   getInstruments()
   getComments()
})
</script>

<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
    <li v-for="comment in comments" :key="comment.id">{{ comment.name }}</li>

  </ul>
</template>
