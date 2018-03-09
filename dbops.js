const Sequelize = require('sequelize');

const connsettings = {
    host: '0.0.0.0',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: '.data/database.sqlite'
};

const sequelize = new Sequelize('database', null, null, connsettings);
exports.db = sequelize

const User = sequelize.define('user', {
  "firstName": {type: Sequelize.STRING},
  "lastName": {type: Sequelize.STRING},
  "id": {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  "gym": {type: Sequelize.STRING, allowNull: false}
});



function addUser(first, last, gym){
  return User.sync().then(() => User.create({"firstName": first, "lastName": last, "gym": gym}))
}

exports.addUser = addUser;

function getAllUsers(callback){
  return User.findAll();
}

exports.getAllUsers = getAllUsers;