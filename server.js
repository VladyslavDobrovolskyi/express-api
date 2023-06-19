const express = require('express')

const app = express()

const PORT = 3000

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening on 127.0.0.1:${PORT}`)
})

app.get('/', (req, res) => {
    res.end(`<h1>127.0.0.1:${PORT}</h1>`)
})
