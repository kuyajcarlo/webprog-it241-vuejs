<template>
  <div>
    <h2>Leave a Comment</h2>

    <form @submit.prevent="submitComment">
      <input
        type="text"
        v-model="name"
        placeholder="Your name"
        required
      />

      <textarea
        v-model="comment"
        placeholder="Your comment"
        required
      ></textarea>

      <button type="submit">Submit</button>

      <p>{{ submissionStatus }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

const name = ref('')
const comment = ref('')
const submissionStatus = ref('')

async function submitComment() {
  submissionStatus.value = 'Submitting...'

  const { error } = await supabase
    .from('comments')
    .insert([
      {
        name: name.value,
        comment: comment.value
      }
    ])

  if (error) {
    console.error(error)
    submissionStatus.value = 'Failed to submit comment'
    return
  }

  submissionStatus.value = 'Comment submitted!'
  name.value = ''
  comment.value = ''
}
</script>
