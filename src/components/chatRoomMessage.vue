<template>
  <div class="fill-height">
    <!-- <div class="message-list">
        <h3>hey this is chat room.{{$route.params.id}}</h3>
        <div class="create-dot dot"></div>
        <div class="create-dot dot"></div>
    </div> -->
    <div class="fill-height d-flex flex-column-reverse">
      <v-card
        max-width="400"
        v-for="message in messages"
        :key="message"
        class=""
        :class="[
          { 'mb-2 ml-2 mr-auto teal lighten-3': message.sender },
          { 'mb-2 mr-2 ml-auto white': message.sender }
        ]"
        flat
      >
        <v-card-text>
          {{ message }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      left: "mb-4"
    };
  },
  computed: {
    messages() {
      return this.$store.getters.messageData;
    }
  },
  updated() {
    console.log("updated");
    console.log(this.messages);
  }
};
</script>