<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="c in comments" :key="c.id">
        {{ c.name }}: {{ c.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data, error } = await supabase
    .from('comments')
    .select()

  if (error) {
    console.error(error)
    return
  }

  comments.value = data ?? []
}

onMounted(getComments)
</script>
