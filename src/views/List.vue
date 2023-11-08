<template>
    <v-row>
        <v-col v-for="(taf, index) in tarefas" :key="index">
            <v-card>
                <v-card-title> {{ taf.name }}</v-card-title>
                <v-card-subtitle> {{ taf.desc }}</v-card-subtitle>
                <v-card-text> {{ taf.id }} </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn icon @click="favStore.add(taf)" :color="(favStore.isFavorite(taf))? 'red' : 'white'">
                        <v-icon>mdi-star</v-icon>
                    </v-btn>
                    <v-btn color="primary" to="/edit">Editar</v-btn>
                    <v-btn color="error">Excluir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useFavStore } from '@/store/fav';
import axios from 'axios'
const tarefas = ref([])
const favStore = useFavStore();
onMounted(() => {
    axios.get('tarefas.json')
        .then(response => {
            console.log(response)
            const data = response.data
            const array = []
            for (let key in data) {
                array.push({
                    id: key,
                    name: data[key].name,
                    desc: data[key].desc
                })
            }
            tarefas.value = array
        })
        .catch(error => {
            console.log(error)
        })
});


</script>