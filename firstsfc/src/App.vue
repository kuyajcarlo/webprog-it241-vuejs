<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import CommentForm from './components/CommentForm.vue'
import Comments from './components/Comments.vue'

const instruments = ref([])

async function getInstruments() {
  const { data, error } = await supabase
    .from('instruments')
    .select()

  if (error) {
    console.error('Error fetching instruments:', error)
    instruments.value = []
    return
  }

  instruments.value = data ?? []
}

onMounted(getInstruments)
</script>

<template>
  <div>
    <h2>Instruments</h2>

    <ul>
      <li v-for="i in instruments" :key="i.id">
        {{ i.name }}
      </li>
    </ul>

<hr />

<!-- ✅ REST API COMPONENT ADDED -->
<div style="border: 2px solid red; padding: 10px;">
  <p>Before RestApi component</p>
  <rest-api />
  <p>After RestApi component</p>
</div>

<hr />

    <comment-form />
    <comments />
  </div>
</template>