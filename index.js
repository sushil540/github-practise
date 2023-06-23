const express = require('express')
const app = express()
const port = 3050
const configDB = require('./db')
const cors = require('cors')
const routes = require('./routes')

configDB()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port,()=>{
    console.log('server is running at port',port)
})

