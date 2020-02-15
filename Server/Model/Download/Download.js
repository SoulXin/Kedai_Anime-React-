const Sequelize = require('sequelize');
const db = require ('../../Database/db');

const Anime_Download = db.sequelize.define('link_download',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    unique_string : {
        type : Sequelize.STRING
    },
    link_download : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    created_at : {
        type: Sequelize.DATE
    },
});

module.exports = Anime_Download