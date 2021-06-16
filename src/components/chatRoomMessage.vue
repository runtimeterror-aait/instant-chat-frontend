<template>
    
    <div class="fill-height">
    <!-- <div class="message-list">
        <h3>hey this is chat room.{{$route.params.id}}</h3>
        <div class="create-dot dot"></div>
        <div class="create-dot dot"></div>
    </div> -->
    <div class="fill-height d-flex flex-column-reverse">
     
            <v-card max-width="400" v-for="item in items" :key="item.message_id" class="" :class="[{'mb-2 ml-2 mr-auto teal lighten-3': item.sender}, {'mb-2 mr-2 ml-auto white': !item.sender}]" flat>
                <v-card-text>
                    {{item.message}}
                </v-card-text>
            </v-card>
           

        

    </div>

    </div>
</template>

<script>
export default {
    data : function() {
        return{
            items: [
                {message_id: 1, message: "what's up man how have you been fjdiaofjeionfda fjdiaofjdioaf fjdisaofjdioa fjdioajfeow", sender: "Feleke"},
                {message_id: 2, message: "what's up man.", sender: "Feleke"},
                {message_id: 3, message: "what's up man.", sender: "Feleke"},
                {message_id: 4, message: "what's up man.", sender: "Feleke"},
                {message_id: 5, message: "what's up man."}
            ],
            left: "mb-4"
        }
       
    }
}
</script>