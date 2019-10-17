const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('appName','Mi primer server');
//console.log(__dirname + '/views');
app.set('views', __dirname + '/views');
app.set('view engine','ejs');


//app.use(morgan('dev'));
//app.use(morgan('short'));
app.use(morgan('combined'));

// app.use(function(req, res, next){
//     console.log('request url:' + req.url);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Ha pasado por esta función');
//     next();
// })

// app.get('/', (req, res) =>{
//     res.end('<h1>Hola mundo</h1></br><a href="./login">ir a login</a>');
// })

app.get('/', (req, res) =>{
    res.render('index.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});


app.listen(3000, function(){
    console.log('servidor funcionando');
    console.log('Nombre de la App', app.get('appName'));
});


// http.createServer((req, res) => {
//     res.end('Hello world');
// }).listen(3000);
