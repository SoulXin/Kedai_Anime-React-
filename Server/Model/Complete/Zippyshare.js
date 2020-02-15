const Sequelize = require('sequelize');
const db = require ('../../Database/db');

const Zippyshare = db.sequelize.define('zippyshare',{
    zippyshare_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    complete_id : {
        type : Sequelize.INTEGER
    },
    episode : {
        type : Sequelize.INTEGER
    },
    size240 : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    size360 : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    size480 : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    size720 : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    }
});

module.exports = Zippyshare