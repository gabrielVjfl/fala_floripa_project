const  sequelize = require("sequelize")

const seq = new sequelize('floripa', 'root', 'Info@3304', {
    host: 'localhost',
    dialect:  'mysql',
})

//seq.authenticate().then((suc) => {
  //  console.log('Conectado com sucesso!', suc)

//}).catch((err) => {
   // console.log('Erro', err)
//})
module.exports = {
    sequelize: sequelize,
    seq: seq
}