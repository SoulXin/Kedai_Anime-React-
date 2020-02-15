const Sequelize = require('sequelize')
const db_download = {}
const sequelize = new Sequelize("anime_download","root","",{
    host : "localhost",
    dialect : "mysql",
    operatorAliases : false,
    define: {
        timestamps: false,
        underscored: true,
        freezeTableName:true
    },
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    },
})

db_download.sequelize = sequelize
db_download.Sequelize = Sequelize

module.exports = db_download