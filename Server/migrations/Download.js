    'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('link_download', {
            id : {
                type : Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true
            },
            unique_string : {
                type : Sequelize.STRING
            },
            link_download : {
                type : Sequelize.STRING
            },
            created_at : {
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('link_download');
    }
};