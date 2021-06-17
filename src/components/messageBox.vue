<template>
  <v-form>
          <v-text-field
            v-model="message.message"
            append-outer-icon= "mdi-send"
            filled
            clearable
            type="text"
            @click:append-outer="sendMessage"
            @click:clear="clearMessage"
            hide-details
            class="white"  
          ></v-text-field>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      message: {messageId: "", message: "", timeStamp: "", receiverId: ""},
      password: 'Password',
     
     
    }),

    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        if (this.message.message){
          this.$store.dispatch('updateMessage', this.message);
        }
        this.clearMessage();
      },
      clearMessage () {
        this.message.message = '';
      },
     
     
    }
  }
</script>