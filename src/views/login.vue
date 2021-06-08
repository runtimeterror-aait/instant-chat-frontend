<template>
  <div>
    <navbar :page = page />
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
          <h2>Login to iChat</h2>
        </v-row>
        <v-form>
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
                <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">
                  <v-btn >
                    <v-icon left color="red">mdi-gmail</v-icon>
                    <span>Sign in with googel</span>
                  </v-btn>
                </GoogleLogin>

               
            </v-row>
            <v-row justify="center mt-10">
              <router-link class="text-decoration-none" :to="{name: 'home' }">
              <v-btn class="px-15 teal white--text " >
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
import GoogleLogin from 'vue-google-login';


  export default {
    name: 'login',
    title: "iChat | Login to your account",
      components: {
      navbar,
      GoogleLogin
    },
    data : function() {
            return {
                page: "Login",
                email:"",
                password: "",
                params: {
                    client_id: "807990459566-027venlgfue78hgjqmpm4brat3mkr41l.apps.googleusercontent.com"
                },
                renderParams: {
                    width: 250,
                    height: 45,
                    longtitle: true
                }
            }
        },
     methods: {
        onSuccess(googleUser) {
            console.log(googleUser);

            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
            this.$router.push({ name: 'home'});
        },
        onFailure(){
          
        }
    }
  }
</script>
<style scoped>
 
</style>
