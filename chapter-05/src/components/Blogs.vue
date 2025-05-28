<script setup>
import { useSearch } from '@/composables/useSearch';
import { toRef } from 'vue';

defineEmits(['deleteBlog'])
const props = defineProps(['blogs', 'isLoading', 'error'])
const blogs = toRef(props, 'blogs')
const { searchTerm, filters, filteredSearch } = useSearch(blogs)
</script>

<template>
    <div v-if="isLoading">
        <span>Loading...</span>
    </div>
    <div v-else-if="error">
        <span>Error:</span>
        <span>{{ error || 'Undefined error' }}</span>
    </div>
    <div v-else class="blog-container">
        <div class="search-container">
            <input v-model="searchTerm" placeholder="Search by title..." class="search-input"/>

            <fieldset class="filters-fieldset">
                <label for="title">
                    By title
                    <input type="checkbox" id="title" value="title" v-model="filters" />
                </label>
                <label for="content">
                    By content
                    <input type="checkbox" id="content" value="description" v-model="filters" />
                </label>
            </fieldset>
        </div>
        <ul class="blog-list">
            <li v-for="blog in filteredSearch" :key="blog.slug" class="blog-item">
                <div class="item-header">
                    <h2>{{ blog.title }}</h2>
                    <button @click="$emit('deleteBlog', blog.slug)" class="delete-item-button">Delete</button>
                </div>
                <div>
                    <img v-if="blog.heroImage" :src="`${blog.heroImage.fields.file.url}?fit=scale&w=350&h=196`"/>
                </div>
                <p class="item-description">{{ blog.description }}</p>
                <div class="item-footer">
                    <p class="item-author">By {{ blog.author || 'Anonymous' }}</p>
                     <span class="item-author">
                                {{ 
                                    new Date(blog.publishDate)
                                        .toLocaleDateString('en-US', { 
                                            weekday: 'short', 
                                            month: 'short', 
                                            day: '2-digit',
                                            year: 'numeric'
                                         }).toUpperCase()
                                }}
                            </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.blog-container {
    display: flex;
    flex-direction: column;
    
    align-items: center;
}

.search-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.search-input {
    border: 1px solid black;
    border-radius: 5px;
    padding: 12px;
    outline: none;
    width: 50%;
    min-width: 150px;
    max-height: 50px;
}

.filters-fieldset {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    border: none;
}

.blog-list {
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
    list-style: none;
    padding: 12px 0;
    width: 100%;
}

.blog-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid black;
}

.item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-description {
    overflow-wrap: break-word;
}

.delete-item-button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    font-size: medium;
    cursor: pointer;
}

.item-footer {
    display: flex;
    justify-content: space-between;
    font-size: small;
}

</style>