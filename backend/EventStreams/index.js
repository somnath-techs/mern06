// const EventEmmiter = require('events')

// const myemmiter = new EventEmmiter()

// myemmiter.on('greet',(username)=>{
//    console.log(`Hello ${username}`)
// })
// myemmiter.emit('greet','Sawata')
// /*myemmiter.on(,(events name with in cotation,"callback function or normal function")=>{
//     console.log(`Hello ${username}`)
//  })*/
// const stream = require('stream'); 
const session = require('express-session');
const express = require('express');
const app = express();

app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true

}));

app.get('/', (req, res) => {
    req.session.user = 'Alice'; // Setting session variable
    res.send('Session is set');
    console.log(req)
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome back, ${req.session.user}`);
    } else {
        res.send('Please log in first');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));

