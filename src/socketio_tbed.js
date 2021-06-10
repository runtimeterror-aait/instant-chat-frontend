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
    //------------------------------------create rooms/add contacts---------------------------------//
    //------------------------------------join rooms---------------------------------//
    // let newContactForm, newRoomForm, joinNewRoomForm;
    // newContactForm.addEventListener('click', createNewContact); //gets username
    // newRoomForm.addEventListener('click', createNewRoom); //gets roomName, members(select input)
    // joinNewRoomForm.addEventListener('click', joinNewRoom); //gets room id

    //rgh
    // socket.emit('joinNewRoom', room_id);
    // socket.emit('joinNewRoom', contact_id);
    // ...db



    //------------------------------------open chat---------------------------------//
    //when a chat is clicked on from the chat list
    document.querySelector(`#chat-highlight-${msg.chat_id}`).parentElement.addEventListener('click', openChat());
    //to store the last x messages of selected chat
    let lastMessages; // eg. [{msg json including sender (if in a group room)},{},{},{},{}]
    let chatPanel = document.querySelector('#chat-panel');

    function openChat(e){
        chatid = e.target.id.split('-')[2];//eg. chat-highlight-123

        //sending the room id to the server to send us back the last messages from the db
        socket.emit('getlastMessages', chatid);

        //recieving the last messages
        socket.on('lastMessages', function(lastmsgs) { //only for this client
            lastMessages = lastmsgs; //list?
        });

        //appending each message to the chat panel
        lastMessages.forEach(message => {
            let msgDiv = document.createElement('div');
            msgDiv.innerHTML = `<h1>${message.msg}</h1><span>${message.timestamp}</span>`; //and more depending on if the chat is a room or contact
            msgDiv.id = message.msg_id;
            chatPanel.append(msgDiv);
        });

        //setting the global opend_chat variable to the opened chat so as to display any incoming messages in realtime
        opened_chat = chatid;
        
    }


    //------------------------------------send Message---------------------------------//



    //------------------------------------delete chat - room/contact---------------------------------//



    //------------------------------------delete message---------------------------------//
}

