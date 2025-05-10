
<script setup>
    import { ref } from 'vue'; // was not mentioned in this chapter

    const list = ref(['Banana'])
    const newItem = ref('')

    const addItem = () => {
        if (newItem.value.trim().length === 0) {
            return
        }

        list.value.push(newItem.value)
        newItem.value = ''
    }

    const removeItem = (index) => { list.value.splice(index, 1) }
    const clearList = () => { list.value.length = 0 }
</script>

<template>
    <div class="list-container">
        <h1>Shopping list</h1>
        <div class="list-form">
            <input type="text" v-model="newItem" @keyup.enter="addItem" placeholder="Press enter to add new item"/>
            <button @click.prevent="addItem">Add item</button>
        </div>
        <ul class="list" v-if="list.length > 0">
            <li v-for="(item, n) in list" :key="n">
                {{ item }}
                <button @click.prevent="removeItem(n)">REMOVE</button>
            </li>
        </ul>
        <button @click.prevent="clearList" class="btn-delete">Delete all</button>
    </div>
</template>

<style scoped>
    .list-container {
        width: 50vw;
        max-width: 100vw;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    .list-form {
        width: 50vw;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 8px;
    }

    .list-form input {
        width: 100%;
        max-width: 500px;

        padding: 8px;
        outline: none;
    }

    .list-form button {
        border: none;
        border-radius: 5px;
        background-color: rgb(120, 160, 250);
        color: white;
        cursor: pointer;
    }

    .list-form button:hover {
        background-color: rgb(90, 140, 250);
    }

    .list {
        max-width: 550px;
        width: 100%;
        border-radius: 20px;
        background-color: rgb(241, 241, 241);
        padding: 1rem 2rem 1rem 2rem;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .list li {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .list li button {
        font-size: 12px;
        border: none;
        cursor: pointer;
    }

    .btn-delete {
        border: none;
        border-radius: 5px;
        background-color: rgb(90, 140, 250);
        padding: 12px;
        color: white;
        cursor: pointer;
    }

    .btn-delete:hover {
        background-color: rgb(75, 135, 250);
    }
   
</style>