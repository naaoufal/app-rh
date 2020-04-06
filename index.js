var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var sessions = require('express-session');
// var requestHandler = require('./requestHandler');

var session;
var app = express();

app.use('/',express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'));
});
app.get('/connexion',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'));
});
app.get('/inscription',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup.html'));
});
app.get('/entreprises',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','content.html'));
});
// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));
app.use(sessions({
    secret : '#####################################',
    resave : false,
    saveUninitialized : true
}));


// callback the files !!!
// app.get('/', function(req, res){
//     res.sendFile('./public/index.html', {root : __dirname});
// });
// app.get('/connexion', function(req, res){
//     res.sendFile('./public/login.html', {root : __dirname});
// });
// app.get('/contact', function(req, res){
//     res.sendFile('./public/contact.html', {root : __dirname});
// });
// app.get('/inscription', function(req, res){
//     res.sendFile('./public/signup.html', {root : __dirname});
// });

// app.get('/entreprises', function(req, res){
//     res.sendFile('./public/content.html', {root : __dirname});
// });

// app.get('/sedeconnecter', function(req, res){
//     req.session.destroy();
//     res.redirect('/');
// });

// POST and redirected the files with request !!!
// app.post('/connexion', function(req, res){
//     // res.sendFile(JSON.stringify(req.body));
//     if(req.body.username == 'admin' && req.body.password == 'admin'){
//         session.uniqueid = req.body.username;
//         // console.log(session.uniqueid);
//     }
//     res.redirect('/entreprises');
// });

// add entrerprise :


// add with url : 
// app.get('/add/:name/:local?', addEntre);
// function addEntre(req, res){
//     var data = req.params;
//     var name = data.name;
//     var local = data.local;
//     var reply;
//     if(!local){
//         msg : "tous est bien";
//     }else{
//         entreprises[name] = local;
//         var data = JSON.stringify(entreprises, null, 2);
//         fs.writeFile('./public/test.json', data, finished)
//         function finished(err){
//             console.log(err);
//         }
//         reply = res.redirect('/entreprises');
//     }
//     res.send(reply);
// }




// app.get('/entreprises', show_name);
// function show_name(req, res){
//     var data = fs.readFile('./public/entreprises.json');
//     var entreprise = JSON.parse(data);
//     console.log(entreprise);
//     res.send(entreprise);
// }
app.post('/contact',(req,res)=>{
    var data = req.body;
    var response = JSON.stringify(data, null, 2);
    console.log(data);
    fs.writeFile('./public/contact_desc.json', response, function(err){
        console.log(err);
    });
    // some database call here
    res.json({success : true});
});
app.post('/entreprises',(req,res)=>{
    var data = req.body;
    var response = JSON.stringify(data, null, 2);
    console.log(data);
    fs.writeFile('./public/entreprises.json', response, function(err){
        console.log(err);
    });
    // some database call here
    res.json({success : true});
});





app.listen(3000);
console.log("the server is loading ...");