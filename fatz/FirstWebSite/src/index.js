//console.log('Server works!!!');
const express = require('express');
const app = express();//es el servidor
const path = require('path');

//express provee las formas de constantes que pueden ser accedidas.

//settings
app.set('port', 4000);
app.set('views', path.join(__dirname, '/views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');//no se importa porque viene con express

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, '/public')));

/*
app.get('/', (req, res) => {
    res.render('index', {title: 'First WebSite'});
    //res.render('index.ejs');//no es necesaria la extensión porque ya se indicó en el engine.
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, '/views/index.html'));
});
*/

//static files

//listening the server
app.listen(app.get('port'), () =>{
    console.log('Server on port ', app.get('port'));
});//aún no hay url para llamar a nuestro servidor.

