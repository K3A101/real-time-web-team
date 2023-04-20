// To start socket via the client side
const socket = io()
// Selecteer de inputveld en het formulier
const messages = document.querySelector('section ul');
const messageForm = document.getElementById('chat-form');
const sendMessageButton = document.querySelector('#message-button');
const messageInput = document.querySelector('#message-input');
const usernameInput = document.querySelector('#username-input');
const logginPage = document.querySelector('main section:nth-of-type(2)');
const chatPage = document.querySelector('main section:nth-of-type(3)');
const logginChatButton = document.querySelector('main section:nth-of-type(2) button');
const backButton = document.getElementById('back-button');

//Verbergt de chat pagina en laat de loggin pagina zien
chatPage.classList.add('hidden');

usernameInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendMessageButton.click();
    }
});

// Als je op de loggin knop klikt, dan wordt de chat pagina zichtbaar en de loggin pagina wordt verborgen

logginChatButton.addEventListener('click', (event) => {
    logginPage.classList.add('hidden');
    chatPage.classList.remove('hidden');
    socket.emit('focus', true);
    
});

//Als je op de terug knop klikt, dan wordt de loggin pagina zichtbaar en de chat pagina wordt verborgen
backButton.addEventListener('click', (event) => {
    logginPage.classList.remove('hidden');
    chatPage.classList.add('hidden');
    socket.emit('focus', false);

});


// Wanneer er wordt getypt, dan komt de chatpage een class focus tevoorschijn, die laat zien dat iemand aan het typen is
messageInput.addEventListener('input', () => {
    //Hier word de input van de message-input in de client side opgehaald in de console geplaast
    const inputValue = messageInput.value;
    console.log(inputValue);
    //er wordt class .focus toegevoegd in de chat page  section
    chatPage.classList.add('focus');
    socket.emit('focus', true);
});


sendMessageButton.addEventListener('click', (event) => {
    // De 'someone is typing' gaat weg. 
    chatPage.classList.remove('focus');
    socket.emit('focus', false); //verstuurd een focus class naar andere clients
    event.preventDefault();
    if(messageInput.value) {
        //Ik maak een array van object aan met de waarde van de username en de message
        const chat = {
            username: usernameInput.value,
            message: messageInput.value
        }
        //De chat message event wordt gestuurd met de chat array als parameter
        //De chat array bevat de username en de message
        socket.emit('chat message', chat); //verstuurd een chat message  event naar de server met de chat object array als data
        messageInput.value = '';
    }
});





// Als er een chat message event wordt ontvangen, dan wordt de message in de client side weergegeven
//Ik maak een li element aan en zet de message in de li elemenT
socket.on('chat message',(message)=>{

const speechBubble = document.createElement('li');
    speechBubble.innerHTML = `<span>${message.username}</span>${message.message}`;
    speechBubble.setAttribute('class', 'talk-bubble tri-right border round btm-left-in');

messages.appendChild(speechBubble);
// De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
messages.scrollTop = messages.scrollHeight;

// In your own perspectief staat de chat message in de rechterkant van de chat
if(message.username === usernameInput.value) {
    speechBubble.classList.add('own-message');
}
   
})





socket.on('focus', (hasFocus) => {
    if (hasFocus) {
        chatPage.classList.add('focus');
    } else {
        chatPage.classList.remove('focus');
    }
});



