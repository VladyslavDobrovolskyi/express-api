require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const Router = require('./routes/User')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const sanitizer = require('express-mongo-sanitize')
const authenticateToken = require('./middlewares/authenticateToken')

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log(`Database: Successfully connected`))
  .catch(err => console.log(`Database: Connection ERROR (${err.message})`))

app.use(morgan(process.env.LOG_LEVEL))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(sanitizer())

app.get('/token', (req, res) => {
  const token = () => {
    const formattedDateTime = new Date()
      .toLocaleString('en-US', { timeZone: 'UTC', hour12: false })
      .replace(/[^\d]/g, '')
    return jwt.sign(
      { date: formattedDateTime },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '15s',
      }
    )
  }
  res.send(token())
})

app.use('/users', authenticateToken, Router)

app.get('*', (req, res) => {
  res.send(`<a>https://github.com/VladyslavDobrovolskyi/express-api</a>`)
})

app.listen(PORT, error => {
  error
    ? console.log(`Server: ${error.message}`)
    : console.log(`Server: Started successfully,
            Listening on 127.0.0.1:${PORT}`)
})
