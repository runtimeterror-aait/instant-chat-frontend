<template>
   <v-toolbar flat class="teal lighten-1">
      <v-toolbar-title>
          <v-img
          src="../assets/logo-ichat.png"
          max-width="150"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
      transition="slide-y-transition"
      left
      offset-y
      rounded="0">
      <template v-slot:activator="{ attrs, on }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          class="black--text"
        >
         mdi-menu
        </v-icon>
      </template>

      <v-list>
        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
          <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
          <v-list-item-title>
              <GoogleLogin :params="params" :logoutButton=true :onSuccess="onSuccess" >Logout</GoogleLogin>
          </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
</v-toolbar>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
  name: 'chatNavbar',
  components:{
    GoogleLogin
  },
   data: () => ({
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
          client_id: "807990459566-027venlgfue78hgjqmpm4brat3mkr41l.apps.googleusercontent.com"
      }
    }),
    methods: {
        onSuccess() {
          console.log("hey");
          this.$router.push({name: 'login'});
        }
    }

}
</script>