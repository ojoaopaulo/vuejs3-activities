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
        <div class="blog-container">
            <div class="editor-button-container">
                <span @click="showEditor = !showEditor" class="editor-button">Open editor</span>
            </div>
            <Blogs :blogs="blogs" :is-loading="isLoading" :error="error" @delete-blog="removeItem"/>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 16px;
}

.editor-button-container {
    display: flex;
    justify-content: end;
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px;
}

.blog-container {
    display: flex;
    flex-direction: column;
    padding: 6px 12px;
}

.editor-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.editor-button:hover {
    border-bottom: 1px solid black;
    transition-duration: 500ms;
}

</style>