'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('complete_anime', {
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
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('complete_anime');
    }
};