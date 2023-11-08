<template>
  <v-card class="mx-auto" width="256">
    <v-layout>
      <v-navigation-drawer permanent absolute>
        <v-list>
          <v-list-item prepend-avatar="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" title="Alex Silva"
            subtitle="alex.silva1@unemat.br">
            <template v-slot:append>
              <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list :lines="false" density="compact" nav>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" @click="$router.push(item.name)">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 354px;"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
const items = [
{ text: 'Home', icon: 'mdi-home', name: 'Home' },
  { text: 'Cadastrar', icon: 'mdi-account-plus', name: 'Cadastrar' },
  { text: 'Listar', icon: 'mdi-format-list-bulleted', name: 'Listar' },
  { text: 'Editar', icon: 'mdi-pencil', name: 'Editar' },
  { text: 'Favoritos', icon: 'mdi-star', name: 'Favorite' }
]
</script>