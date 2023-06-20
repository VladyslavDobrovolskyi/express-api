require('dotenv').config()

const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 3000

app.use(morgan(process.env.LOG_LEVEL))

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening on 127.0.0.1:${PORT}`)
})

app.get('/', (req, res) => {
    res.end(`<h1>127.0.0.1:${PORT}</h1>`)
})
