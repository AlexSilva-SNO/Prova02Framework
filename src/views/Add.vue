<template>
    <v-card class="w-50 ma-auto">
        <v-card-title>Adicionar Tarefa</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Titulo" v-model="name"></v-text-field>
                <v-text-field label="Descrição" v-model="desc"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn to="/list">Cancelar</v-btn>
            <v-btn color="success" @click="salvar()">Salvar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
const name = ref('')
const desc = ref('')
const salvar = () => {
    const tarefa = {
        name: name.value,
        desc: desc.value
    }
    /* send funcionario to realtime database using axios */
    axios.post('tarefas.json', tarefa)
        .then(response => {
            name.value = ''
            desc.value = ''
        })
        .catch(error => {
            console.log(error)
        })
}
</script>