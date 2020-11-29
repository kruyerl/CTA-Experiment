const functions = require('firebase-functions')
const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Set up express

const app = express()
app.use(express.json())
app.use(cors())

// set up db

// set up routes
const baseRouter = require('./routes/baseRoutes')
const authRouter = require('./routes/authRoutes')

app.use('/', baseRouter)
app.use('/auth', authRouter)

// export firebase functions
export const api = functions.https.onRequest(app)
