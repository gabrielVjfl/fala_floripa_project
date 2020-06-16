const port = 4320

let express = require('express')

const app = express()

let bodyParser = require('body-parser')

let cors =  require('cors')

let path = require('path')

let tabela = require('./models/table.js')


let nodemailer = require('nodemailer')

app.use((req,res,next) => {
    // * permite tudo
  res.header('Access-Control-Allow-Origin', '*') // ou http://localhost:8080 ou o site .com.br

    res.header('Access-Control-Allow-Headers', 
      'Origin, X-Requested-With, Content-Type, Accept, Authorization')

      res.header('Access-Control-Allow-Methods', 'GET', 'PUT','POST','DELETE')

        app.use(cors())

        next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname + '/project')))

////// rotas

app.get('/teste', (req,res) => {
    res.send("FUNCIONANDO")
})

app.post('/postar', (req,res) => {
    tabela.create({
      nome: req.body.nome,
      idade: req.body.idade,
     email: req.body.email,
     bairro: req.body.bairro,
     problemas: req.body.problemas,
      problemaprincipal: req.body.problemaprincipal,
       melhorar: req.body.melhorar
  })
  .then(suc => {
    console.log(suc)
  }).catch(err => {
    console.log(err)
  })

}) 


app.listen(port, () => {
    console.log("Funcionando na porta", port)
})
