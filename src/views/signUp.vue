<template>
    <div>
        <Navbar/>
        <v-container> 
    
            <!-- Login form -->
            <v-row>
                <v-col cols="5" align-self="center">
                    <v-img
                    src="../assets/chat.svg">

                    </v-img>
                </v-col>
                <v-col>
                    <v-card
                        class="mx-auto pb-5 indigo lighten-5"
                        max-width="400"
                        >
                        <v-card-text>
                        <v-row class="" justify="center">
                            <v-img src="../assets/logo-ichat.png"
                            max-height="250"
                            max-width="250"></v-img>
                        </v-row>
                        <v-row class="mt-15 mb-5" justify="center">
                            <h2>Create a new account.</h2>
                        </v-row>
                        <v-form>
                            <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="firstname"
                                    label="First name"
                                    required
                                ></v-text-field>
                                </v-col>
                            
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="lastname"
                                    label="Last name"
                                    required
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            
                            <v-text-field
                            v-model="email"
                            label="Email"
                            required></v-text-field>
                            <v-row>
                                <v-col><v-text-field
                            v-model="password"
                            label="Password"
                            type="password"
                            required ></v-text-field></v-col>
                                <v-col><v-text-field
                            v-model="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            required ></v-text-field></v-col>
                            </v-row>
                            
                            <v-row justify="center mt-5">
                                <v-col align-self="center"><v-divider></v-divider></v-col>
                                or
                                <v-col align-self="center"><v-divider></v-divider></v-col>
                            </v-row>
                            <v-row justify="center mt-10">
                                <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                            </v-row>
                            <v-row justify="center mt-10">
                                <router-link class="text-decoration-none" :to="{name: 'home'}">
                                    <v-btn class="px-15 teal white--text">
                                Sign up
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

import Navbar from '../components/loginNavbar'
import GoogleLogin from 'vue-google-login';


  export default {
    name: 'Home',
    title: "iChat | Create an new account.  ",
    components: {
        Navbar,
        GoogleLogin
    },
    data() {
            return {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",



                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "807990459566-027venlgfue78hgjqmpm4brat3mkr41l.apps.googleusercontent.com"
                },
                
                // only needed if you want to render the button with the google ui
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
            console.log("Error");
            

        }
    }
  }
</script>
<style scoped>

</style>

