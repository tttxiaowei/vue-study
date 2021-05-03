const express = require('express')

const app = express()
let port = 3000

const server = app.listen(port, () => {
    let host = server.address().address
    console.log('vue-study listening at http://%s:%s', host, port)
})
app.use(express.static('public'))
