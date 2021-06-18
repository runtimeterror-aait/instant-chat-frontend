<template>
    <v-card
    class="mx-auto flexcard px-0 rounded-0 "
    max-width="1000"
    height="97%"
    color="indigo lighten-5"
    >  
        <Navbar/>
        <Contacts />
        <v-row class="fill-height ma-0">
            <v-col cols="5" class="pa-0">
                <Chats @displayview="displayChange"/>
            </v-col>
            <v-col class="pb-0 px-0">
                <router-view v-if="displayView"></router-view>
                <v-row v-else class="pa-0 mx-0 mt-16" justify="center">
                    <p class="center">Select chat to start messaging.</p>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import Chats from '../components/chats'
import Navbar from '../components/chatNavbar'
export default {
    title: "iChat",
    data: function(){
        return{
            displayView: false
        }
    },
    components: {
        Chats,
        Navbar,
    },
    methods: {
        displayChange(event){
            const value = event;
            this.displayView = value;
        }
    },
    created() {
      console.log("hey man"); 
        var a = "ABCS"; 
        console.log(a);
    }
    
}
</script>