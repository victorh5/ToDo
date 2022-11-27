<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useToDoStore } from '@/store/todo.js'

const todo = useToDoStore()
const { id } = storeToRefs(todo)
const text = ref('')
const showError = ref(false)

function __insert() {
    if(text.value) {
        const date = new Date()
        todo.increment({
            id: id.value,
            description: text.value,
            check: false,
            created_at: date.toJSON(),
            updated_at: date.toJSON()
        })
        text.value = ''
    } else {
        showError.value = true
        setTimeout(() => { showError.value = false }, 5000)
    }
}
</script>

<template>
    <div class="todo">
        <div class="todo-information">
            <input
                type="text"
                placeholder="O que fazer?"
                v-model="text"
                @keyup.enter="__insert"
            >
            <button @click="__insert">Adicionar</button>
        </div>
        <div class="error-text" v-if="showError">Digite algo...</div>
    </div>
</template>

<style scoped>
.todo {
    padding: 20px;
}
.todo-information {
    display: grid;
    grid-template-columns: 80fr 20fr;
    grid-column-gap:14px;
    height: 50px;
}
.todo-information input {
    border-radius: 10px;
    border: none;
    padding: 0 10px;
    color: #000;
    font-size: 14px;
}
.todo-information input:focus-visible {
    outline: none;
}
.todo-information button {
    border-radius: 10px;
    border: none;
    background-color: #1F878F;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
}
.error-text {
    padding: 5px 15px;
    color: #ff0000;
    animation: in 0.5s;
    font-size: 14px;
}
@keyframes in {
    from { opacity: 0; }
    25% { opacity: 0; }
    to { opacity: 1; }
}
</style>
