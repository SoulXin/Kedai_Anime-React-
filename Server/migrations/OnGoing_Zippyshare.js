'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('zippyshare_ongoing', {
            zippyshare_id : {
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
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('zippyshare_ongoing');
    }
};