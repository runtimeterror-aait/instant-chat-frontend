<template>
    <v-card
    class="mx-auto flexcard px-0 rounded-0 "
    max-width="1000"
    height="97%"
    color="indigo lighten-5"
    >   
        <Navbar/>
        <v-row class="fill-height ma-0 ">
            <v-col cols="5" class="pa-0">
                <Chats/>
            </v-col>
            <v-col class="pb-0 px-0">
                <router-view></router-view>
            </v-col>
        </v-row>
        
       
    </v-card>
</template>

<script>

import Chats from '../components/chats'
import Navbar from '../components/chatNavbar'
export default {
    title: "iChat",
    components: {
        Chats,
       Navbar
    }
    
}
</script>