const express = require('express')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/tasks.js')
const multer = require('multer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('./db/mongoose')
const auth = require('../middleware/auth.js')

app.use(express.json())
app.listen(port, ()=>{
    console.log("Server is up on port " + port)
})
app.use(userRouter)
app.use(taskRouter)




