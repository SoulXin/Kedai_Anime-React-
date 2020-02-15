const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize("anime","root","",{
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

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db