const Sequelize = require('sequelize');
const db = require ('../Database/db');

const Genre = db.sequelize.define('genre',{
    genre_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    anime_id : {
        type : Sequelize.INTEGER
    },
    action : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    romance : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    comedy : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    adventure : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    drama : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    slice_of_life : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    fantasy : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    supernatural : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    horor : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    mystery : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    psychological : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    sci_fi : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    mecha : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    harem : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    reverse_harem : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    isekai : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    reverse_isekai : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    demons : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    game : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    ecchi : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    historical : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    kids : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    martial_art : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    josei : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    cyberpunk : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    post_apocalyptic : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    police : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    parody : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    music : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    school : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    super_power : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    space : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    shounen : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    shoujo : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    seinen : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    sports : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    tragedy : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    vampire : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    yaoi : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    yuri : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    magic : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    },
    military : {
        type : Sequelize.TINYINT,
        allowNull : true,
        defaultValue : 0
    }
});

module.exports = Genre