const path = require('path')
const express = require('express')
// import content from '../public/js/script'
const app = express()
const port = process.env.PORT || 3000

const basePath = path.join(__dirname, '../public')

app.use(express.static(basePath))

//start express server
app.listen(port, () => {
    console.log('Server started on post ' + port)
    // console.log(content + " server");
})

