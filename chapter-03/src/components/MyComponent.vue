<script setup>
    import { ref, computed } from 'vue';

    const firstName = ref('')
    const lastName = ref('')

    const fullName = computed(() => {
        if (lastName.value !== '') {
            return `${firstName.value + ' ' + lastName.value}`
        }
    })
</script>

<template>
    <div class="container">
        <div class="inputs-container">
            <input v-model="firstName" placeholder="First Name"/>
            <input v-model="lastName" placeholder="Last Name"/>
        </div>
        <div class="result-container">
            <span>Full name: </span>
            <span>{{ fullName }}</span>
        </div>
    </div>
</template>

<style scoped>
    .container {
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .inputs-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .inputs-container input {
        padding: 1rem;
        outline: none;
        font-size: 1.5rem;

    }

    .result-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .result-container span {
        font-size: 1.5rem;
    }
</style>