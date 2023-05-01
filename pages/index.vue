<template>
  <v-app>
    <v-app-bar>
      <div  class=" tw-flex tw-items-center tw-gap-4 tw-mx-5">
        <div class=" tw-cursor-pointer tw-capitalize"  v-for="item in ['home', 'employees']" :key="item"
          @click="$router.push({name: item})"
        >
          {{ item.replaceAll('-', ' ') }}
        </div>
      </div>
   
    </v-app-bar>
    <v-main>
        <v-container>
            <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">Index Page</h1>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
    name: 'App',
    components: {
    }
  }
  </script>
  
