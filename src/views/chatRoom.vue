<template>
    <div class="d-flex flex-column fill-height">
            <div class="fill-height">
                <ChatRoomMessage/>
            </div>
            
           <div class="mt-auto">
               <MessageBox/>
           </div>
                   
    </div>
    
</template>
<script>
import ChatRoomMessage from '../components/chatRoomMessage'
import MessageBox from '../components/messageBox'
export default {
    title: "iChat",
    components: {
        ChatRoomMessage,
        MessageBox
    },
    

}
</script>
