    'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('googledrive', {
            googledrive_id : {
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
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('googledrive');
    }
};