<template>
    <v-app>
      <v-main>
          <v-container>
              <NuxtLink to="/employees">Back to Employee Table</NuxtLink>
              <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">About Employee: {{ $route.params.id }}</h1>
          </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup lang="ts">

  const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
    console.log(route.params.id)
  </script>
  