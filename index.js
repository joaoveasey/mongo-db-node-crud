const express = require('express')
const mongoose = require('mongoose')
const app = express()

const user = require('./sens/user')

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get('/', (req, res) => { 
    res.json({ message: 'Oi Express!'}) 
})

mongoose.
    connect(
        `mongodb+srv://${user.DB_USER}:${user.DB_PASSWORD}@apicluster.jnbhc4y.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`
    )
    .then(() => {
        console.log("MongoDB conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
