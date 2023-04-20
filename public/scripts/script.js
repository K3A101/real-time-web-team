// To start socket via the client side
const socket = io()
// Selecteer de inputveld en het formulier
const messages = document.querySelector('section ul');
const messageForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');


// Als je na je bericht op verstuur klikt button, de chat message event fires/ De waarde in de input vveld wordtopgehaald en verstuurd
// naar alle gebruikers die verbonden zijn met de server
messageForm.addEventListener('submit', (e)=>{
e.preventDefault();
if(messageInput.value){
    // De chat message berichten wordt van de client naar de server verstuurd
    // his line of code emits a 'chat message' event to the server - side using the socket object
    //he second argument is the data that is being sent with the event, which in this case is the value of the input element.
    socket.emit('chat message', messageInput.value);
    // The input element is then cleared
    messageInput.value = '';
}
});

// Als er een chat message event wordt ontvangen, dan wordt de message in de client side weergegeven
//Ik maak een li element aan en zet de message in de li elemenT
socket.on('chat message',(message)=>{
const speechBubble = document.createElement('li');
speechBubble.textContent = message;
messages.appendChild(speechBubble);
// De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
messages.scrollTop = messages.scrollHeight;
   
})










// const socket = io()
// const messages = document.querySelector('section ul')
// const input = document.querySelector('#message-input')
// const submit = document.querySelector('#message-button');
// const usernameInput = document.querySelector('#username-input');
// const time = document.querySelector('#time');
// let date = new Date();

// insertDate();


// submit.addEventListener('click', event => {
//     event.preventDefault()
//     if (input.value) {
//         const chat = {
//             username: usernameInput.value,
//             message: input.value
//         }
//         socket.emit('message', chat)
//         input.value = ''
//     }
// })

// socket.on('message', message => {
//     const li_element = document.createElement('li');
//     li_element.textContent = ` ${message.username} : ${message.message} `;
    
  
//     li_element.setAttribute('class', 'talk-bubble tri-right border round btm-left-in');
//     messages.appendChild(li_element);
//     messages.scrollTop = messages.scrollHeight;
  
//     if (message.username === usernameInput.value) {
//         li_element.classList.add('message');
//     }


// })

// function insertDate() {
//    let currentDate = 'Today ' + date.toUTCString().slice(5, 16);
//     time.textContent = currentDate;
// }