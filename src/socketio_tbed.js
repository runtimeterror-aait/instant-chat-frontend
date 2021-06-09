document.addEventListener('DOMContentLoaded', main());

//connect to server
// var socket = io('http://localhost:5000');

//recent messages (of every chat - contacts and rooms alike)
var recentMessages;
//currently opened chat
var opened_chat;

function main(){

    //------------------------------------after login---------------------------------//
    //connect to server
    // var socket = io();
    var socket = io('http://localhost:5000');
    // var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    //will receive ordered recentMessages list of the form { chat_id:{msg}, chat_id:{msg}, chat_id:{msg} } where chat_id is chatroom_id or contact_id
    socket.on('recentMessages', function(recentmsgs) {
        // socket.emit('event', {data: 'Test'});
        //
        recentMessages = recentmsgs; //assuming res is json
    });

    
    //to receive messages from all chats //join all their room
    rooms = Object.keys(recentMessages); //#temp or not
    socket.join(rooms);

    socket.on('message', msg => {

        // chat menu highligh message update
        let highlight = document.querySelector(`#chat-highlight-${msg.chat_id} > div:last-child > div:last-child`); //#todo ui id
        highlight.innerHTML = msg.message;
        //move it to the top
        highlight.parentElement.parentElement.parentElement.prepend(highlight.parentElement.parentElement);

        //if this chat is open, update the chat UI
        if (msg.chat_id = opened_chat){
            let messageElememt = document.createElement('div');
            messageElememt.id = msg.msg_id; //#todo will send from server
            messageElememt.innerHTML = `<h3>${msg.message}</h3>`;
            document.querySelector('#chat-panel').append(messageElememt); //#todo ui id
        }
    })


    //------------------------------------create chats---------------------------------//
    //------------------------------------create rooms/adde contacts---------------------------------//
    //------------------------------------join rooms---------------------------------//



    //------------------------------------open chat---------------------------------//




    //------------------------------------send Message---------------------------------//



    //------------------------------------delete chat - room/contact---------------------------------//



    //------------------------------------delete message---------------------------------//
}

