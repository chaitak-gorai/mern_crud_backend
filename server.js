import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import cors from 'cors'
import bodyParser from 'body-parser'

import {
  createController,
  deleteController,
  readController,
  updateController,
} from './controllers/createController.js'
const app = express()
dotenv.config()
app.use(
  bodyParser.json({
    extended: true,
  })
)
connectDB()
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running..')
})
app.post('/create', createController)
app.get('/read', readController)
app.post('/update', updateController)
app.post('/delete', deleteController)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(
    `Server started in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
