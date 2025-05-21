<script setup>
import { ref } from 'vue'
import MessageEditor from './components/MessageEditor.vue'
import MessageFeed from './components/MessageFeed.vue'

const messages = ref([])
const addMessage = (val) => {
  messages.value.push(val)
}

const clearMessages = () => {
  messages.value = []
}
</script>

<template>
  <MessageFeed :messages="messages" />
  <MessageEditor @send="addMessage" @clearMessages="clearMessages" />
</template>

<style scoped></style>
