<template>
  <div>
    <navbar/>
  <v-container class="mb-10">
    <!-- Login form -->
    <v-row >
      <v-col cols="6" align-self="center">
        <v-img 
        src="../assets/login.svg"
        max-width="500"></v-img>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto mt-5 pb-8 indigo lighten-5"
          max-width="350"
        >
      <v-card-text>
        <v-row class="mt-2" justify="center">
        <v-img src="../assets/logo-ichat.png"
                    max-height="250"
                    max-width="250"></v-img>
        </v-row>
        <v-row class="mt-15 mb-5" justify="center">
          <h2>Login to ichat</h2>
        </v-row>
        <v-form v-model="valid">
          <v-container>
            
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
              
         
            <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required></v-text-field>


            <v-row justify="center mt-8">
              <v-col align-self="center"><v-divider></v-divider></v-col>
              or
              <v-col align-self="center"><v-divider></v-divider></v-col>
            </v-row>
            <v-row justify="center mt-10">
              <img class="mr-1" src="https://img.icons8.com/fluent/24/000000/google-logo.png"/> <a href="#" class="text-decoration-none">Continue with Google</a> 
            </v-row>
            <v-row justify="center mt-10">
              <router-link :to="{name: 'home' }">
              <v-btn class="px-15 indigo white--text ">
                login
              </v-btn>
              </router-link>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
      </v-col>
    </v-row>
    

  </v-container>
  </div>

  
</template>

<script>

import navbar from '../components/loginNavbar'


  export default {
    name: 'login',
    title: "iChat | Login to your account",
    components: {
      navbar
        
    },
  }
</script>
<style scoped>
 
</style>
