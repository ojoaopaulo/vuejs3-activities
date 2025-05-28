<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['addNewItem', 'closeEditor'])

const author = ref('')
const title = ref('')
const description = ref('')
const slug = ref('')

watch(title, () => {
    slug.value = `${title.value.toLowerCase().replaceAll(' ', '-')}-${author.value.toLowerCase().replaceAll(' ', '-')}`
})

const addNewItem = () => {
    emit('addNewItem', {
        author: author.value,
        title: title.value,
        description: description.value,
        slug: slug.value,
    })
    emit('closeEditor')

    author.value = ''
    title.value = ''
    description.value = ''
    slug.value = ''
}
</script>

<template>
    <div @click="$emit('closeEditor')" class="overlay"></div>

    <div class="editor-container">
        <button @click="emit('closeEditor')" class="close-button">X</button>

        <div class="editor-entries">
            <label>Author</label>
            <input v-model="author"/>
        </div>

        <div class="editor-entries">
            <label>Title</label>
            <input v-model="title"/>
        </div>

        <div class="editor-entries">
            <label>Description</label>
            <textarea v-model="description" cols="30" rows="5" maxlength="250"></textarea>
        </div>

        <div class="editor-entries">
            <label>Id</label>
            <input v-model="slug" disabled style="cursor: not-allowed;"/>
        </div>

        <div class="add-button-container">
            <button @click="addNewItem" class="add-button">Send</button>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 990;
    width: 100vw;
    height: 100vh;
}

.editor-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    min-height: 350px;
    max-height: 90vh;
    max-width: 400px;
    width: 90vw;
    overflow-y: auto;

    padding: 20px;
    
    background-color: white;
    opacity: 1 !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 999;
}

.editor-entries {
    display: flex;
    width: 100%;
}

.editor-entries label {
    position: absolute;
    transform: translate(0, -50%);
    left: 30px;
    padding: 0 1px;
    background-color: white;
}

.editor-entries input {
    outline: none;
    border: 1px solid black;
    border-radius: 2px;
    padding: 8px;
    width: 230px;
}

.editor-entries textarea {
    outline: none;
    padding: 12px;
    border: 1px solid black;
}

.close-button {
    position: absolute;
    top: 0;
    right: 0;

    background-color: transparent;
    border: none;
    
    padding: 6px;
    font-size: 1rem;
    
    cursor: pointer;
}

.add-button-container {
    display: flex;
    justify-content: end;
    width: 100%;
}

.add-button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
}

</style>