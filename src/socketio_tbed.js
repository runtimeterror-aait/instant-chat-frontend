document.addEventListener('DOMContentLoaded', main());

//chat refers to both group/rooms and personal chats/contacts

//connect to server
// var socket = io('http://localhost:5000');

//recent messages (of every chat - contacts and rooms alike)
var recentMessages;
//currently opened chat
var opened_chat;

//dummy #tbr
var user = {"username": Abebe}

function main(){

    //------------------------------------after login---------------------------------//
    //connect to server
    // var socket = io();
    var socket = io('http://localhost:5000');
    // var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);


    //------------------------------------last seeen/online---------------------------------//
    socket.on('connect', () => {
        socket.emit('online', {})//{userid/username, [con.id for con in user.contacts]}
    })
    socket.on('disconnect', () => {
        let lastSeen = getTimestamp();

        socket.emit('offline', {lastSeen})//{userid/username, [con.id for con in user.contacts], lastSeen}
    })

    socket.on('userOnline', (userid) => {
        document.querySelector(`#chat-highlight-${userid}`).firstChild.style.background = "green";
        //can make a green circle here...
    })

    socket.on('userOffline', (data) => {
        document.querySelector(`#chat-highlight-${data.userid}`).firstChild.style.background = "white";
        if (opened_chat = data.userid) docquery.innerHTML = `Last seen on ${data.lastSeen}`; //#l
    })




    //will receive ordered recentMessages list of the form { chat_id:{msg}, chat_id:{msg}, chat_id:{msg} } where chat_id is chatroom_id or contact_id
    socket.on('recentMessages', function(recentmsgs) {
        // socket.emit('event', {data: 'Test'});
        //
        recentMessages =     recentmsgs; //assuming res is json //from old to latest
        append_to_list(recentMessages);
    });

    append_to_list(recentMessages){
        let hightlight_list = document.querySelector("#chat-highlight-list");//#l
        for (chatid in recentMessages){
            let highlight = document.createElement('div');
            highlight.id = chatid;
            let div = document.createElement('div');
            let recentmsg = document.createElement('div');
            recentmsg.innerHTML = recentMessages[chatid].msg;
            highlight.append(div.append(recentmsg));
            //move it to the top
            hightlight_list.append(highlight); //assuming recentMessages was ordered descendingly (from latest to old)
        }
        
    }
    
    //to receive messages from all chats //join all their room
    rooms = Object.keys(recentMessages); //#temp or not
    socket.join(rooms);  //should work #tbtested

    socket.on('message', msg => {

        // chat menu highligh message update
        let highlight = document.querySelector(`#chat-highlight-${msg.chat_id} > div:last-child > div:last-child`); //#todo ui id
        highlight.innerHTML = msg.message;
        //move it to the top
        highlight.parentElement.parentElement.parentElement.prepend(highlight.parentElement.parentElement);

        //if this chat is open, update the chat UI
        if (msg.chat_id = opened_chat){
            // let messageElememt = document.createElement('div');
            // messageElememt.id = msg.msg_id; //#todo will send from server
            // messageElememt.innerHTML = `<h3>${msg.message}</h3>`;
            // document.querySelector('#chat-panel').append(messageElememt); //#todo ui id
            append_to_chat(msg.message); //#tbed
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
        if (e.target.id.split('-')[0] == 'delete') {
            deleteChat(e.target.id.split('-')[2]);
            return;
        }
        if (e.target.id.split('-')[1] == 'highlight'){
            chatid = e.target.id.split('-')[2];//eg. chat-highlight-123

            //sending the room id to the server to send us back the last messages from the db
            socket.emit('getlastMessages', chatid);

            //recieving the last messages
            socket.on('lastMessages', function(lastmsgs) { //only for this client //accepting inside a function...?
                lastMessages = lastmsgs; //list?
            });

            //appending each message to the chat panel
            lastMessages.forEach(message => {
                append_to_chat(message);
            });

            //setting the global opend_chat variable to the opened chat so as to display any incoming messages in realtime
            opened_chat = chatid;
        }
        
    }

    append_to_chat(message, toContact = false){
        let msgDiv = document.createElement('div');
        msgDiv.innerHTML = (toContact? `` : `<span>${message.senderName}</span><h1>${message.msg}`) + `</h1><span>${message.timestamp}</span>`; //and more #tbd?
        msgDiv.id = message.msg_id;
        chatPanel.append(msgDiv);
    }


    //------------------------------------send Message---------------------------------//
    // document.querySelector("#send-message-button").addEventListener('click', sendMessage);
    document.querySelector("#send-message-form").addEventListener('submit', sendMessage); //which? #l //will assume it's validated #l
    let message = document.querySelector('#message-input');// #l
    function sendMessage(){
        let timestamp = getTimestamp();
        //append message to chat panel
        append_to_chat(message.value);
        
        socket.emit('sendMessage', {"username": user.username, "msg": message, "room": opened_chat, "timestamp": timestamp});
    }

    function getTimestamp(){
        let timestamp = new Date();
        //time format for now #tbd
        timestamp = timestamp.getHours() + ':' + timestamp.getMinutes() + ':' + timestamp.getSeconds() + ' ' + timestamp.getMonth() + '/' + timestamp.getDate() + '/' + timestamp.getFullYear();
        return timestamp;
    }


    //------------------------------------delete chat - room/contact---------------------------------//
    //might need modification #tbchk
    // function deletChat_callback(chatid){
    //     document.querySelector(`#chat-highlight-${chatid}`).remove();
    // }

    function deleteChat(chatid){
        //send delete notification to server
        // socket.emit('deleteChat', {"username": username, "room_id": chatid}, deleteChat_callback = deletChat_callback); //#tbd server //including UI-update of other relevant clients
        socket.emit('deleteChat', {"username": username, "room_id": chatid});
        
        //document.querySelector(`#chat-highlight-${chatid}`).remove();
    }

    socket.on('chatDeleted', (chatid) => {
        document.querySelector(`#chat-highlight-${chatid}`).remove(); //from all...qn #tbch
    })

    

    //------------------------------------delete message---------------------------------//

    // chatPanel.addEventListener('click') //some delete icon ... v3 - right click option or on bar
    // socket.emit('deleteMessage', {"msg_id": docquery, "chatid": opened_chat});

    // socket.on('messageDeleted', ()=>{
    //     //get msg_id and chatid ... from attributes here //from e.target...

    //     if (data.msg_id in recentMessages[chatid]) {
    //         docquire.remove();
    //         //assign the previous message to it
    //         docquire.innerHTML = ...
    //     }
    //     if (opened_chat == data.chatid) {
    //         //#l
    //         // document.querySelectorAll('.msg').forEach( message => {
    //         //     if (msg_id == message.getAttribute('id')) document.querySelector(`#${data.msg_id}`).remove();
    //         // })
    //         try{
    //             document.querySelector(`#${data.msg_id}`).remove();
    //         }catch{}
    //     }
    // })


}

