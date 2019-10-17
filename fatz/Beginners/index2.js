const os = require('os');
const fs = require('fs');
const http = require('http');
const colors = require('colors');
const express = require('express');
const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola mundo con Express y NodeJs</h1>');
    res.end();
})

server.listen(3000, function(){
    console.log('Server on port 3000'.red);
})


/*
const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
})
*/

/*
http.createServer(function(req, res){//req = request, res = response
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('Hola mundo!!');
    res.end();
}).listen(3000);
*/

// fs.readFile('./texto.txt', function(err, data){
//     if(err){
//         confirm.log(err);
//     }
//     console.log(data.toString());
// })

// fs.writeFile('./texto.txt', 'linea uno', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('Archivo creado');
// });

// console.log('última línea de código');

/*
const users = query('SELECT * FROM Users');

query('SELECT ¨FROM Users', function(err, users){
    if(err){
        console.log(err);
    }
    if(users){

    }
})
*/

/*
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log('freemem ', os.freemem(), 'bytes');
console.log(os.totalmem());
*/