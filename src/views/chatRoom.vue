<template>
    <div class="d-flex flex-column fill-height">
            <div class="fill-height">
                <ChatRoomMessage :messages = "messages"/>
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
    created() {
        this.$store.dispatch("loadChatroom",localStorage.getItem("chatRoomId"))
    },
    computed: {
        messages() {
            return this.$store.state.chatRoomMessages
        }
    },

    props: ["chatRoomId"]

}
</script>
