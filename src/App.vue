<template>
  <v-app v-bind:style="{ background: $vuetify.theme.themes.dark.background}">
    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',
   components: {
  },
   
};
</script>
<style>

</style>