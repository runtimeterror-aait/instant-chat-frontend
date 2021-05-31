<template>

    <v-list overflow-y: auto class="fill-height py-0">
    
            <v-list-item-group>
                <router-link class="text-decoration-none" :to="{name: 'chat-room'}">
                        
               
                <v-list-item 
                v-for="(item, key) in items" 
                :key="key"
                
                >   
                    <v-list-item-icon>
                        <v-icon v-text="item.profile"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.message"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                 </router-link>
            </v-list-item-group>
    </v-list>

</template>
<script>
export default {
    data: () => ({
        selectedItem: 1,
        items:[
            {name: 'Abebe', profile: 'mdi-account', message: 'Hey man how are you doing this Morning?'},
            {name: 'Amarech', profile: 'mdi-account', message: 'Hey man how are you doing this Morning?'},
            {name: 'Feleke', profile: 'mdi-account', message: 'Hey man how are you doing this Morning?'},
            {name: 'Berna', profile: 'mdi-account', message: 'Hey man how are you doing this Morning?'},

        ]
    })
}
</script>