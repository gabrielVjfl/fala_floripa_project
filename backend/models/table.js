let bd = require('./bd')

let table = bd.seq.define('falafloripa', {

    id_postagens : {
        type: bd.sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

nome: {
    type: bd.sequelize.STRING,
    allowNull: false,
},
idade: {
type: bd.sequelize.DATEONLY,
allowNull: false
},
email: {
    type: bd.sequelize.STRING,
},
bairro: {
    type: bd.sequelize.STRING,
    allowNull: false,
},
problemas: {
type: bd.sequelize.TEXT,
allowNull: false,
},
problemaprincipal: {
type: bd.sequelize.STRING,
allowNull: false,
},
melhorar: {
    type: bd.sequelize.TEXT,
    allowNull: false
},
createdAt: {
    allowNull: false,
    type: bd.sequelize.DATE,
},
updatedAt: {
    allowNull: false,
    type: bd.sequelize.DATE,
}
})

//table.sync({force:true})

module.exports = table


