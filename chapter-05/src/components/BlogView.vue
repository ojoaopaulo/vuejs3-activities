<script setup>
import { useBlogs } from '@/composables/useBlogs';
import { ref } from 'vue';
import Blogs from './Blogs.vue';
import BlogEditor from './BlogEditor.vue';

const showEditor = ref(false)
const { blogs, isLoading, error, addItem, removeItem } = useBlogs()
</script>

<template>
    <main>
        <div v-if="showEditor">
            <BlogEditor @add-new-item="addItem" @close-editor="showEditor = !showEditor"/>
        </div>
        <div class="button-container">
            <button @click="showEditor = !showEditor" class="toggle-button">Open editor</button>
        </div>
        <Blogs :blogs="blogs" :is-loading="isLoading" :error="error" @delete-blog="removeItem"/>
    </main>
</template>

<style scoped>
main {
    padding: 16px;
}

.blog-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.button-container {
    position: absolute;
    right: 0;
    padding: 0 12px;
}

.toggle-button {
    border: 1px solid black;
    border-radius: 5px;
    background-color: #e2e2e2;
    padding: 8px;
    cursor: pointer;
}

</style>