const Sequelize = require('sequelize');
const db = require ('../Database/db');

const Complete_Anime = db.sequelize.define('complete_anime',{
    complete_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    anime_id : {
        type : Sequelize.INTEGER
    },
    created_at : {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

module.exports = Complete_Anime