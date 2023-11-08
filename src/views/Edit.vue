<template>
    <div>
      <h1>Editar Tarefa</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Nome:</label>
        <input id="name" v-model="tarefa.name" required>
  
        <label for="desc">Descrição:</label>
        <input id="desc" v-model="tarefa.desc" required>
  
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  
  const route = useRoute();
  const router = useRouter();
  const tarefa = ref({});
  
  onMounted(async () => {
    const response = await axios.get(`tarefas.json/${route.params.id}`);
    tarefa.value = response.data;
  });
  
  const submitForm = async () => {
    await axios.put(`tarefas.json/${route.params.id}`, tarefa.value);
    router.push('/list');
  };
  </script> 