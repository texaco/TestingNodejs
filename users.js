const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

const user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/listUsers', (req, res) => {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data){
       console.log( data );
       res.end( data );
   });
});


app.post('/addUser', (req, res) => {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) => {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

const server = app.listen(port, () => {
  console.log("Example app listening at http://%s:%s", server.address().address, server.address().port);
});
