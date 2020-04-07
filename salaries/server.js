/*jshint esversion: 6 */

const express= require('express');
const uuid = require('uuid');
const body_parser= require('body-parser');
const fs= require('fs');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'assets')));
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());


// Salaire and Contact Part
app.get('/Home', function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get('/Salaire', function(req, res){
    res.sendFile(__dirname + "/salaire.html");
});
app.get('/department', function (req, res) {
    res.sendFile(__dirname + "/departement.html");
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact.html");
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





app.listen(4000,function(){
      
    console.log("Server listing on port 4000...");

});