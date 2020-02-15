const Sequelize = require('sequelize');
const db = require ('../../Database/db');

const Googledrive = db.sequelize.define('googledrive_ongoing',{
    googledrive_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    anime_id : {
        type : Sequelize.INTEGER
    },
    on_going_id : {
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
    },
    created_at : {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

module.exports = Googledrive