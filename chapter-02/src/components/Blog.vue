<script setup>
import { createClient } from 'contentful';
import { computed, onMounted, ref } from 'vue';

const client = createClient({
    space: 'hpr0uushokd4',
    accessToken: 'jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U'
})

const authors = ref([])
const posts = ref([])

const getAuthors = async () => {
    const entries = await client.getEntries({ content_type: 'person' })
    return entries.items
}

const getBlogPosts = async () => {
    const entries = await client.getEntries({ 
        content_type: 'blogPost',
        order: '-fields.publishDate'
    })
    return entries.items
}

;(async () => {
    authors.value = await getAuthors()
    posts.value = await getBlogPosts()
})()

const name = computed(() => authors.value[0]?.fields?.name)
const title = computed(() => authors.value[0]?.fields?.title)
const bio = computed(() => authors.value[0]?.fields?.shortBio)
</script>

<template>
    <div class="blog-container">
        <div class="blog-header">
            <h1>{{ name }}</h1>
            <h2>{{ title }}</h2>
            <p class="author-description">{{ bio }}</p>
        </div>
        <hr>
        <div class="blog-content">
            <h1>Articles</h1>
            <section v-if="posts" class="articles-list">
                <div class="article" v-for="(post, i) in posts" :key="i">
                    <img
                        v-if="post.fields.heroImage"
                        :src="`${post.fields.heroImage.fields.file.url}?fit=scale&w=350&h=196`"
                        class="thumbnail"
                    />
                    <div class="article-text">
                        <p>{{ new Date(post.fields.publishDate).toDateString() }}</p>
                        <h3>{{ post.fields.title }}</h3>
                        <p>{{ post.fields.description }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

.blog-container {
    max-width: 100vw;
    display: flex;
    flex-direction: column;

    align-items: center;
}

.blog-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 1px solid black;
    padding: 8px;
    background-color: rgb(255, 250, 227);
}

.blog-header * {
    margin: 8px;
}

.blog-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blog-content * {
    margin: 4px 0;
}

.articles-list {
    display: flex;
    flex-direction: column;
}

.article {
    display: flex;
    flex-direction: row;
    gap: 24px;

}

.article-text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
}

.article-text * {
    margin: 8px 0;
}

.author-description {
    font-style: italic;
}

</style>