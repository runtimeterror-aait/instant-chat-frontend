<template>
    <div class="d-flex flex-column fill-height">
            <div class="mb-auto">
                <ChatRoomUser/>
            </div>
            
           <div class="">
               <Message/>
           </div>
                   
    </div>
    
</template>
<script>
import ChatRoomUser from '../components/chatRoomUser'
import Message from '../components/message'
export default {
    components: {
        ChatRoomUser,
        Message
    },
    

}
</script>
