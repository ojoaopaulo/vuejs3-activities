<template>
  <TodoList :todos="todos">
    <template #todo="{ todo }">
      <TodoEntry
        :id="todo.id"
        :title="todo.title"
        :completed="todo.completed"
        @complete-change="handleCompleteChange"
      />
    </template>
  </TodoList>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoEntry from './components/TodoEntry.vue'

const axios = inject('axios')
const baseUrl = inject('baseUrl')
const todos = ref([])

onMounted(async () => {
  const { data } = await axios.get(`${baseUrl}/todos`)
  todos.value = data
})

const handleCompleteChange = (data) => {
  const index = todos.value.findIndex((todo) => todo.id === data.id)
  todos.value[index].completed = data.status
}
</script>
