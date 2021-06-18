<template>
  <v-card
    class="mx-auto flexcard px-0 rounded-0 "
    max-width="100"
    height="97%"
    color="indigo lighten-5"
  >
    <v-toolbar flat class="teal lighten-1">
      <v-btn icon dark @click="closeDialog()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Contacts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark @click="addDialog = true">
          Create New Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list three-line subheader>
      <div v-if="contacts">
        <v-subheader>All Contacts</v-subheader>
        <div v-if="contacts.length === 0">
          <center>No Contact Exist</center>
        </div>
        <v-list-item v-for="(contact, i) in contacts" :key="i">
          <v-list-item-action>
            <v-btn dark v-on:click="editContacts(contact)"
              >Edit</v-btn
            >
            <v-btn v-on:click="deleteContact(contact.id)">X</v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{contact.name}}</v-list-item-title>
            <v-list-item-subtitle>{{ contact.phone }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div v-else>
        Loading...
      </div>
    </v-list>

    <v-dialog v-model="addDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Add Contact
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              v-model="newContact.name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="newContact.phone"
              label="phone"
              type="number"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="addDialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="addContact()">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Edit Contact
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              v-model="selectedContact.name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="selectedContact.phone"
              label="phone"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="editDialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="updateContact()">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      addDialog: false,
      editDialog: false,
      valid: true,
      selectedContact: {
        name: null,
        phone: null
      },
      newContact: {
        name: null,
        phone: null,
      }
    };
  },
  computed: {
    contacts() {
      const data = this.$store.state.contacts
      return data.reverse()
    },
  },
  created() {
    this.fetchContact();
  },
  methods: {
    async fetchContact() {
      this.$store.dispatch("loadContacts")
      this.addDialog = false
    },
    addContact() {
      this.$store.dispatch('addContact', this.newContact)
    },
    closeDialog() {
      this.$emit("openDialog", false);
    },
    editContacts(contacts) {
      this.selectedContact = contacts;
      this.editDialog = true;
    },
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id)
    },
    updateContact() {
      this.$store.dispatch('updateContact', this.selectedContact)
      this.editDialog = false
    }
  }
};
</script>

<style>
</style>