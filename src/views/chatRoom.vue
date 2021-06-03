<template>
    <div class="d-flex flex-column fill-height">
            <div class="mb-auto">
                <ChatRoomUser/>
            </div>
            
           <div class="">
               <MessageBox/>
           </div>
                   
    </div>
    
</template>
<script>
import ChatRoomUser from '../components/chatRoomUser'
import MessageBox from '../components/messageBox'
export default {
    components: {
        ChatRoomUser,
        MessageBox
    },
    

}
</script>
