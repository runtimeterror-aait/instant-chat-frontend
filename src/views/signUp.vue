<template>
  <div>
    <Navbar />
    <v-container>
      <!-- Login form -->
      <v-row>
        <v-col cols="5" align-self="center">
          <v-img src="../assets/chat.svg"> </v-img>
        </v-col>
        <v-col>
          <v-card class="mx-auto pb-5 indigo lighten-5" max-width="400">
            <v-card-text>
              <v-row class="" justify="center">
                <v-img
                  src="../assets/logo-ichat.png"
                  max-height="250"
                  max-width="250"
                ></v-img>
              </v-row>
              <v-row class="mt-15 mb-5" justify="center">
                <h2>Create a new account.</h2>
              </v-row>
              <v-form>
                <v-container>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="phone"
                    label="Phone"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                  >
                  </v-text-field>

                  <v-row justify="center mt-5">
                    <v-col align-self="center"><v-divider></v-divider></v-col>
                    or
                    <v-col align-self="center"><v-divider></v-divider></v-col>
                  </v-row>
                  <v-row justify="center mt-10">
                    <GoogleLogin
                      :params="params"
                      :onSuccess="onSuccess"
                      :onFailure="onFailure"
                    >
                      <v-btn>
                        <v-icon left color="red">mdi-gmail</v-icon>
                        <span>Sign up with google</span>
                      </v-btn>
                    </GoogleLogin>
                  </v-row>
                  <v-row justify="center mt-10">
                    <v-btn class="px-15 teal white--text" @click="signUp">
                      Sign up
                    </v-btn>
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
import Navbar from "../components/loginNavbar";
import GoogleLogin from "vue-google-login";

export default {
  name: "Home",
  title: "iChat | Create an new account.  ",
  components: {
    Navbar,
    GoogleLogin
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phone: "",
      signUpResponse: "",

      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id:
          "807990459566-027venlgfue78hgjqmpm4brat3mkr41l.apps.googleusercontent.com"
      }

      // only needed if you want to render the button with the google ui
    };
  },
  methods: {
    onSuccess(googleUser) {
      console.log("howow");
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
      this.$router.push({ name: "home" });
    },
    onFailure() {
      console.log("Error");
    },
    signUp() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
          phone: this.phone,
          bio: "bio",
          online: false,
          contacts: [{ id: "", name: "", phone: "8" }]
        })
      };

      fetch("http://localhost:5000/v1/api/auth/register", requestOptions)
        .then(response => response.json())
        .then(data => {
          this.signUpResponse = data.result;
          if (this.signUpResponse) {
            localStorage.setItem(
              "logged_in_userId",
              this.signUpResponse.userId
            );
            this.$router.push({ name: "home" });
          }
        })
        .catch(err => {
          console.log(err).console.log("clicked 4");
        });
    }
  }
};
</script>
<style scoped>
</style>

