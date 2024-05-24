// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const user = require('./sens/user')

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())


// rotas da api
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => { // para fazer uma requisição no postman: http://localhost:3000/

    // mostrar requisição
    res.json({ message: 'Oi Express!'}) 
})


// entregar uma porta
mongoose.
    connect(
        `mongodb+srv://${user.DB_USER}:${user.DB_PASSWORD}@apicluster.jnbhc4y.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`
    )
    .then(() => {
        console.log("MongoDB conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
