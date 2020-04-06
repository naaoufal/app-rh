const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/search', function(req, res){
    res.sendFile(__dirname + "/search.html");
});

    


app.use("/", express.static(__dirname + "/"));





app.get('/userss',function(req, res){

    fs.readFile('./data.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})



app.listen('3000',function(){
    console.log("Server 3000 ****");
    
});