<template>
  <v-app>
    <v-navigation-drawer>

      <Menu />

    </v-navigation-drawer>

    <v-main>

      <v-container>

        <router-view />

      </v-container>

    </v-main>
  </v-app>
</template>

<script setup>
import Menu from '@/layouts/default/Menu.vue';
</script>
