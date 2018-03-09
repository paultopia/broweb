const express = require('express');
const app = express();

const db = require('./dbops.js')


app.use(express.static('static'));

app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'));


// TESTS FOR VARIOUS FUNCTIONALITY

function testdb(req, res){
    db.db.authenticate()
        .then(() => {
            res.send("It works!");
        })
        .catch(err => {
            res.send('It does not work. :-( ', err);
        });
}

app.get("/testdb", testdb)

const testjsondata = [{"name": "foo", "number": 1, "identity": null},
                      {"name": "bar", "number": 2, "identity": "bat"}]

app.get("/testjson", (req, res) => res.send(testjsondata));


function testAdd(req, res){
  db.addUser("paul", "gowder", "alchemy").then(res.send("added user"));
}

function testGet(req,res){
  db.getAllUsers().then((users) => res.send(users));
}

app.get("/testadd", testAdd);
app.get("/testget", testGet);

function testBlowUpAdd(req, res){
  db.addUser(null, null, null).then((_) => res.send("added user")).catch(e => res.send(e.toString()));
}


app.get("/testboom", testBlowUpAdd);


var listener = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + listener.address().port);
});
