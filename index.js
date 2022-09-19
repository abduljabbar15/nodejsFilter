const express = require('express')
const { default: mongoose } = require('mongoose')
const tourRouter = require('./Routers/tour.router')
const app = express()
mongoose.connect(`mongodb+srv://abdul:abduljabbar@cluster0.cle1zkm.mongodb.net/plans?retryWrites=true&w=majority`, (err) => console.log('db is connected'))

app.use(express.json())

app.use('/tours', tourRouter)
app.use('/', (req, res) => res.send('home'))

app.listen(4000, (res) => console.log('port is running'))
