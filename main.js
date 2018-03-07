const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const sequelize = new Sequelize('database', "test_user", "test_password", {
  host: '0.0.0.0',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: '.data/database.sqlite'
});

function test(req, res){
sequelize.authenticate()
  .then(() => {
    res.send("It works!");
  })
  .catch(err => {
    res.send('It doesn't work. :-( ', err);
  });
  }


app.get("/", test) 

var listener = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + listener.address().port);
});