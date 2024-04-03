import 'dotenv/config'
import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import appRouter from './routers/index.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.use(logger('dev'))
app.use(cookieParser())

app.post('/file', uploader.single('myFile'), (req, res) => {
    res.send('Image uploaded')
  })

app.use(appRouter)

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log(`Server listening on port ${PORT}`)
})

