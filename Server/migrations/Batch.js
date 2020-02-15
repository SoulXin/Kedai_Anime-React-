'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('batch', {
            batch_id : {
                type : Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true
            },
            complete_id : {
                type : Sequelize.INTEGER
            },
            gd_size240 : {
                type : Sequelize.STRING
            },
            gd_size360 : {
                type  :Sequelize.STRING
            },
            gd_size480 : {
                type : Sequelize.STRING
            },
            gd_size720 : {
                type : Sequelize.STRING
            },
            zs_size240 : {
                type : Sequelize.STRING
            },
            zs_size360 : {
                type : Sequelize.STRING
            },
            zs_size480 : {
                type : Sequelize.STRING
            },
            zs_size720 : {
                type : Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('batch');
    }
};