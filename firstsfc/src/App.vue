<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data, error } = await supabase
    .from('instruments')
    .select()

  if (error) {
    console.error(error)
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

    <comment-form />
    <comments />
  </div>
</template>
