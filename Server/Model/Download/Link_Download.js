const Sequelize = require('sequelize');
const db = require ('../../Database/db_download');

const Link_Download = db.sequelize.define('download',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    link_1 : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    link_2 : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    link_download : {
        type : Sequelize.STRING,
        allowNull : true,
        defaultValue : null
    },
    created_at : {
        type: Sequelize.DATE
    }
});

module.exports = Link_Download