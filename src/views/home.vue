<template>
    <v-card
    class="mx-auto flexcard mt-5 px-0 "
    max-width="1000"
    height="95%"
    color="indigo lighten-5"
    >   
        <Navbar/>
        <v-row class="fill-height ma-0 ">
            <v-col cols="5" class="pa-0">
                <Chats/>
            </v-col>
            <v-col>
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
    data: () => ({

    }),
    components: {
        Chats,
       Navbar
    }
    
}
</script>