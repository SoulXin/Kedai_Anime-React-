'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('anime', {
            anime_id : {
                type : Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true
            },
            name : {
                type : Sequelize.STRING
            },
            image : {
                type : Sequelize.STRING
            },
            image_detail : {
                type : Sequelize.STRING
            },
            description : {
                type : Sequelize.STRING
            },
            genre : {
                type : Sequelize.STRING
            },
            rating : {
                type : Sequelize.FLOAT
            },
            studio : {
                type : Sequelize.STRING
            },
            complete : {
                type : Sequelize.TINYINT,
                defaultValue : 0
            },
            created_at : {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updated_at : {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('anime');
    }
};