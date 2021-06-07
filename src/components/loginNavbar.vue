<template>
   <v-toolbar flat class="teal lighten-1">
            <v-toolbar-title>
                <v-img
                src="../assets/logo-ichat.png"
                max-width="150"></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="page == 'Login'" :to="{name: 'signup'}"  depressed outlined class="white--text">Sign up</v-btn>
            <v-btn v-else :to="{name: 'login'}" depressed outlined class="white--text">Login</v-btn>

        </v-toolbar>
</template>

<script>
export default {
  name: 'loginNavbar',
  props: {
    page: String
  }

}
</script>