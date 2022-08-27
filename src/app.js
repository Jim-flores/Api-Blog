const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All Ok!'})
})

app.listen(8000, () => {
    console.log('Server started at port 8000');
})