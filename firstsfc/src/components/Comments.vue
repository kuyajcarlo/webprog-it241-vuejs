<template>
  <div>
    <h2>Comments</h2>

    <ul v-if="comments.length">
      <li v-for="c in comments" :key="c.id">
        <strong>{{ c.name }}</strong>: {{ c.comment }}
      </li>
    </ul>

    <p v-else>No comments yet.</p>
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
    .order('id', { ascending: false })

  if (error) {
    console.error('Error fetching comments:', error)
    comments.value = []
    return
  }

  // ⭐ THIS LINE FIXES YOUR ISSUE
  comments.value = data ?? []
}

onMounted(() => {
  getComments()
})
</script>
