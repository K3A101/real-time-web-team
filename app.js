const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 4545

app.use(express.static(path.resolve('public')));

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// Routing file
let appRoutes = require('./routes/routes');
app.use('/', appRoutes);

// Server Listen on the connection event for incomming sockets(web browser) and logged in the console
io.on('connection',(socket)=> {
    console.log('user connected');

    // Each socket in the server fires an event called 'chat message' when the client emits a 'chat message' event
    // Als je op de verstuur knop klikt, dan wordt de chat message event gestuurd
    // De message parameter is de functie met in de chat message event de message-input in de client side
    socket.on('chat message', (message)=>{
        console.log('message: ' + message);
        //Met de io.emit wordt de message aan alle gebruikers/client gestuurd die verbonden zijn aan de server.
        //emit event from the server to all users
        io.emit('chat message', message)
    })
   
    // Each socket in the server fires an disconnect event when the client is disconnected
    // Als je de pagina met de realtime chat verlaat, dan wordt de socket disconnected
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
})

http.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});

