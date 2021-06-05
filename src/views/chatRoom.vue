<template>
    <div class="d-flex flex-column fill-height">
            <div class="mb-auto">
                <ChatRoomMessage/>
            </div>
            
           <div class="">
               <MessageBox/>
           </div>
                   
    </div>
    
</template>
<script>
import ChatRoomMessage from '../components/chatRoomMessage'
import MessageBox from '../components/messageBox'
export default {
    components: {
        ChatRoomMessage,
        MessageBox
    },
    

}
</script>
