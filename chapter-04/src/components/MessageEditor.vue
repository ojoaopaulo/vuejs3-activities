<script setup>
import { onMounted, ref, useTemplateRef } from 'vue'

const emits = defineEmits(['send', 'clearMessages'])
const textAreaRef = useTemplateRef('textArea')
const message = ref('')

const sendMessage = () => {
  emits('send', message.value)
  message.value = ''
  textAreaRef.value.focus()
}

onMounted(() => {
  textAreaRef.value.focus()
})
</script>

<template>
  <div class="container">
    <textarea
      v-model="message"
      ref="textArea"
      @keyup.enter="sendMessage"
      rows="5"
      cols="25"
      data-testid="editor-textarea"
    >
    </textarea>
    <button @click="sendMessage" data-testid="send-button">>></button>
    <button @click="$emit('clearMessages')" data-testid="clear-button">Reset</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 4px;
}

textarea {
  outline-style: none;
  padding: 10px;
  font-size: 1rem;
  resize: none;
}

button {
  background-color: transparent;
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
}
button:hover {
  background-color: #3b3b3b;
  border: 1px solid 3b3b3b;
  color: white;
}
</style>
