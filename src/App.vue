<script setup lang="ts">
import ToDoInput from '@/components/ToDoInput.vue'
import ToDoList from '@/components/ToDoList.vue'
</script>

<template>
  <section id="container">
      <div class="title">ToDo</div>
      <ToDoInput />
      <ToDoList />
  </section>
</template>

<style scoped>
#container {
    max-width: 700px;
    padding: 50px 0;
    margin: auto;
}
#container .title {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    text-align: center;
}
</style>
