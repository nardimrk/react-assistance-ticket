const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/ErrorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//Connect to database
connectDB()

const app = express()

//accept json/body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    //res.send('Hello')
    res.status(200).json({message: 'Welcome to support desk API'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))