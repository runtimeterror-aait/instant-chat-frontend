<template>
  <v-form>
   
          <v-text-field
            v-model="message"
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
      password: 'Password',
      show: false,
      message: '',
      marker: true,
      iconIndex: 0,
     
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
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
  }
</script>