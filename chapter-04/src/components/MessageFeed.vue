<script setup>
defineProps({
  messages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="container">
    <p v-for="(message, i) in messages" :key="i" data-testid="feed-item">{{ message }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  padding: 10px 0;
  font-size: 1.25rem;
}
</style>
