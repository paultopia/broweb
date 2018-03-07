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
