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
                        <v-row class="mt-2" justify="center">
                            <v-img src="../assets/logo-ichat.png"
                            max-height="250"
                            max-width="250"></v-img>
                        </v-row>
                        <v-row class="mt-15 mb-5" justify="center">
                            <h2>Create a new account.</h2>
                        </v-row>
                        <v-form v-model="valid">
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
                            v-model="passowrd"
                            label="Password"
                            type="password"
                            required ></v-text-field></v-col>
                                <v-col><v-text-field
                            v-model="confirmPassowrd"
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
                                <img class="mr-1" src="https://img.icons8.com/fluent/24/000000/google-logo.png"/> <a href="#" class="text-decoration-none">Continue with Google</a> 
                            </v-row>
                            <v-row justify="center mt-10">
                                <router-link class="text-decoration-none" :to="{name: 'home'}">
                                    <v-btn class="px-15 indigo darken-2 white--text">
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

  export default {
    name: 'Home',
    title: "iChat | Create an new account.  ",
    components: {
        Navbar
    },
  }
</script>
<style scoped>

</style>

