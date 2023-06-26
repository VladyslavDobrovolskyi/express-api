require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const Router = require('./routes/User')

const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const sanitizer = require('express-mongo-sanitize')

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log(`Database: Successfully connected`))
    .catch((err) => console.log(`Database: Connection ERROR (${err.message})`))

app.use(morgan(process.env.LOG_LEVEL))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(sanitizer())

app.use('/users', Router)

app.get('/', (req, res) => {
    res.send(`<h1>127.0.0.1:${PORT}</h1>`)
})

app.listen(PORT, (error) => {
    error
        ? console.log(`Server: ${error.message}`)
        : console.log(`Server: Started successfully,
            Listening on 127.0.0.1:${PORT}`)
})
