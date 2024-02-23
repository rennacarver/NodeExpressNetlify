const express = require('express')
const cors = require('cors')
const PORT = 5656

const app = express()

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`index.js: Server is running on port ${PORT}`)
})