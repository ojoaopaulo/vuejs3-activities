<template>
  <span>{{ props.title }}</span>
  <input type="checkbox" @input="toggleStatus" :checked="props.completed" />
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  completed: Boolean,
})
const emit = defineEmits(['completeChange'])

const baseUrl = inject('baseUrl')
const axios = inject('axios')

const toggleStatus = async () => {
  const newStatus = !props.completed
  try {
    await axios.patch(`${baseUrl}/todos/${props.id}`, {
      completed: newStatus,
    })
  } catch (err) {
    console.log(`An error ocurred when trying to update the task: ${err}`)
  }
  emit('completeChange', {
    id: props.id,
    status: newStatus,
  })
}
</script>
