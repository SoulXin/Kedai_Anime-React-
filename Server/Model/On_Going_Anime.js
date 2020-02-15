const Sequelize = require('sequelize');
const db = require ('../Database/db');

const On_Going_Anime = db.sequelize.define('on_going_anime',{
    on_going_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    anime_id : {
        type : Sequelize.INTEGER
    },
    episode : {
        type : Sequelize.INTEGER
    },
    created_at : {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

module.exports = On_Going_Anime