<script setup lang="ts">
import { useToDoStore } from '@/store/todo'

const todo = useToDoStore()
</script>

<template>
  <div class="todo">
      <div v-for="v in todo.list" :key="v.id" class="todo-data" :class="{'checked': v.check}">
          <span class="description" :class="{'checked-text': v.check}">{{ v.description }}</span>
          <div class="icons">
              <div class="icon-delete" @click="todo.remove(v.id)">
                  <span class="material-symbols-outlined">delete</span>
              </div>
              <div class="icon-check" @click="todo.check(v.id)" :class="{'checked': v.check}">
                  <span class="material-symbols-outlined" v-if="!v.check">check_circle</span>
                  <span class="material-symbols-outlined" v-if="v.check">unpublished</span>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
.todo {
    display: grid;
    grid-row-gap: 10px;
    padding: 20px;
}
.todo-data {
    display: grid;
    grid-template-columns: 90fr 10fr;
    align-items: center;
    padding: 20px 30px;

    color: #fff;
    border: 1px solid #1F878F;
    border-radius: 10px;
}
.todo-data .description {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    word-wrap: break-word;
}
.todo-data .icons {
    display: grid;
    grid-template-columns: 50fr 50fr;
    grid-column-gap: 5px;

    cursor: pointer;
}
.todo-data .icon-check, .todo-data .icon-delete {
    display: flex;
    padding: 5px;

    border-radius: 50%;
    background-color: #fff;
}
.todo-data .icon-check span {
    color: #008000;
}
.todo-data .icon-delete span {
    color: #ff0000;
}

.checked {
    background-color: rgba(0, 255, 170, 0.2) !important;
}
.checked-text {
    text-decoration: line-through 2px green;
}
</style>
