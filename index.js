var express = require('express');
const body_parser= require('body-parser');
const fs = require('fs');
const path = require('path');
var sessions = require('express-session');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const morgan = require('morgan');
const app = express();







app.use(express.static(path.join(__dirname, 'assets')));
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json())


var session;
// var app = express();
// // const Entre = require('./public/entreprises.json');

// app.use('/',express.static(path.join(__dirname,'public')));
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','contact.html'));
// });
// app.get('/connexion',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','login.html'));
// });
// app.get('/inscription',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','signup.html'));
// });
// app.get('/company',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','content.html'));
// });
// // app.use(express.static('public'));
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended : false}));

//page salaries
app.get('/Salaire', function(req, res){
    res.sendFile(__dirname + "/salaire.html");
});

app.post('/salaire',function(req, res){
    var id_dep = req.body.id_dep; 
    var nom = req.body.nom;
    var Prenom = req.body.Prenom;
    var Age = req.body.Age;
    var salaire = req.body.salaire;
  console.log(Prenom);
fs.readFile('salaire.json', 'utf-8', function (err,data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        Matricule : arrayOfObjects.length +1,
        id_dep: id_dep,
		nom: nom,
        Prenom: Prenom,
        Age: Age,
        salaire: salaire
	});

    console.log(arrayOfObjects);

    fs.writeFile('salaire.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/salaire.html");

    });
});

});
app.get('/userss',function(req, res){

    fs.readFile('./salaire.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})

// app.use('/api/products', require('./route/index'));

// // callback the files !!!
// // app.get('/', function(req, res){
// //     res.sendFile('./public/index.html', {root : __dirname});
// // });
// // app.get('/connexion', function(req, res){
// //     res.sendFile('./public/login.html', {root : __dirname});
// // });
// // app.get('/contact', function(req, res){
// //     res.sendFile('./public/contact.html', {root : __dirname});
// // });
// // app.get('/inscription', function(req, res){
// //     res.sendFile('./public/signup.html', {root : __dirname});
// // });

// // app.get('/entreprises', function(req, res){
// //     res.sendFile('./public/content.html', {root : __dirname});
// // });

// app.get('/sedeconnecter', function(req, res){
//     req.session.destroy();
//     res.redirect('/');
// });

// // app.get('/entreprises', (req, res) => {
// //     data = fs.readFile('./db.json')
// //     name = JSON.stringify(data);
// //     res.json(name);
// //   });

// // POST and redirected the files with request !!!
// // app.post('/connexion', function(req, res){
// //     // res.sendFile(JSON.stringify(req.body));
// //     if(req.body.username == 'admin' && req.body.password == 'admin'){
// //         session.uniqueid = req.body.username;
// //         // console.log(session.uniqueid);
// //     }
// //     res.redirect('/entreprises');
// // });

// // add entrerprise :


// // add with url : 
// // app.get('/add/:name/:local?', addEntre);
// // function addEntre(req, res){
// //     var data = req.params;
// //     var name = data.name;
// //     var local = data.local;
// //     var reply;
// //     if(!local){
// //         msg : "tous est bien";
// //     }else{
// //         entreprises[name] = local;
// //         var data = JSON.stringify(entreprises, null, 2);
// //         fs.writeFile('./public/test.json', data, finished)
// //         function finished(err){
// //             console.log(err);
// //         }
// //         reply = res.redirect('/entreprises');
// //     }
// //     res.send(reply);
// // }

// // db.defaults({ entreprises: [], departement: [], count: 0 })
// //   .write()
// // db.get('entreprises')
// //   .push({ id: 1, name: 'the name of company'})
// //   .write()
// // db.get('departement')
// //   .push({ id: 2, name: 'the names of departements'})
// //   .write()

// // app.get('/entreprises', show_name);
// // function show_name(req, res){
// //     var data = fs.readFile('./public/entreprises.json');
// //     var entreprise = JSON.parse(data);
// //     console.log(entreprise);
// //     res.send(entreprise);
// // }
app.post('/contact',(req,res)=>{
    const adapter = new FileSync('contact_desc.json');
    const db = low(adapter);
    var data = req.body;
    // var response = JSON.stringify(data, null, 2);
    console.log(data);
    // fs.writeFile('./public/contact_desc.json', response, function(err){
    //     console.log(err);
    // });
    // some database call here
    db.defaults({data_name : [] }).write();
    db.get('data_name').push({ id: 1, value : data}).write();
    // res.json({success : true});
});
// // app.post('/entreprises',(req,res)=>{
// //     var data = req.body;
// //     var response = JSON.stringify([data], null, 2);
// //     console.log(data);
// //     fs.writeFile('./public/entreprises.json', response, function(err){
// //         console.log(err);
// //         res.send(response);
// //     });
// //     // some database call here
// //     res.json({success : true});
// // });
app.post('/connexion',(req,res)=>{
    const adapter = new FileSync('login.json');
    const db = low(adapter);
    var data = req.body;
    // var response = JSON.stringify(data, null, 2);
    console.log(data);
    // fs.writeFile('./public/login.json', response, function(err){
    //     console.log(err);
    // });
    // some database call here
    db.defaults({entreprises : [] }).write();
    // Add a post
    db.get('entreprises').push({ id: 1, value : data}).write();
    // res.json({success : true});
});
app.post('/inscription',(req,res)=>{
    const adapter = new FileSync('registre.json');
    const db = low(adapter);
    var data = req.body;
    var data = req.body;
    // var response = JSON.stringify(data, null, 2);
    console.log(data);
    db.defaults({ data_name: []}).write();
    db.get('data_name').push({ id: 1, value : data}).write();
    // fs.writeFile('./public/registre.json', response, function(err){
    //     console.log(err);
    // });
    // // some database call here
    // res.json({success : true});
});





// app.listen(3000);
// console.log("the server is loading ...");



// const path = require('path');
// const fs = require('fs');
// const express = require('express');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/entreprises', require('./route/index'));

app.get('/accueil', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});
app.get('/entreprises', function(req, res){
    res.sendFile(__dirname + "/public/content.html");
});
app.get('/connexion', function(req, res){
    res.sendFile(__dirname + "/public/login.html");
});
app.get('/inscription', function(req, res){
    res.sendFile(__dirname + "/public/signup.html");
});
app.get('/contact', function(req, res){
    res.sendFile(__dirname + "/public/contact.html");
});


// fermer session 
app.use(sessions({
    secret : '#####################################',
    resave : false,
    saveUninitialized : true
}));
app.get('/sedeconnecter', function(req, res){
    req.session.destroy();
    res.redirect('/');
});

// static files
app.use(express.static(path.join(__dirname, 'public')));

// function of login and sign ink
// app.post('/connexion',(req,res)=>{
//     const adapter = new FileSync('login.json');
//     const db = low(adapter);
//     var data = req.body;
//     // var response = JSON.stringify(data, null, 2);
//     console.log(data);
//     // fs.writeFile('./public/login.json', response, function(err){
//     //     console.log(err);
//     // });
//     // some database call here
//     db.defaults({entreprises : [] }).write();
//     // Add a post
//     db.get('entreprises').push({ id: 1, value : data}).write();
//     // res.json({success : true});
// });

// submit the data of login and signup in json file
// app.post('/connexion',(req,res)=>{
//     const adapter = new FileSync('login.json');
//     const db = low(adapter);
//     var data = req.body;
//     // var response = JSON.stringify(data, null, 2);
//     console.log(data);
//     // fs.writeFile('./public/login.json', response, function(err){
//     //     console.log(err);
//     // });
//     // some database call here
//     db.defaults({entreprises : [] }).write();
//     // Add a post
//     db.get('name').push({ id: 1, value : data}).write();
//     // res.json({success : true});
// });
// app.post('/inscription',(req,res)=>{
//     const adapter = new FileSync('registre.json');
//     const db = low(adapter);
//     var data = req.body;
//     var data = req.body;
//     // var response = JSON.stringify(data, null, 2);
//     console.log(data);
//     db.defaults({ data_name: []}).write();
//     db.get('data_name').push({ id: 1, value : data}).write();
//     // fs.writeFile('./public/registre.json', response, function(err){
//     //     console.log(err);
//     // });
//     // // some database call here
//     // res.json({success : true});
// });

// start the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
