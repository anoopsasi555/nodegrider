const express = require('express')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.send("Anoo")
})

fsPromises.appendFile(path.join(__dirname, 'views', 'new.txt'), 'Hellooo')

app.listen(5000)