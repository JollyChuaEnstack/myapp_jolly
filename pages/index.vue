<template>
  <v-app>
    <v-app-bar>
      <div  class=" tw-flex tw-items-center tw-gap-4 tw-mx-5">
        <NuxtLink to="/employees">Employee Table</NuxtLink>
      </div>
   
    </v-app-bar>
    <v-main class=" tw-bg-green-200 tw-mt-[60px]">
        <v-container>
          <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">Welcome!</h1>
          <h3 class="tw-font-bold">Welcome to my static Vue app. You may Add, Edit, and Delete data in the Employee Table page. Enjoy!</h3>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
    data() {
    },
  }
  </script>
  
