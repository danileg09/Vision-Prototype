import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.send('Hello! 2.0')
})

app.listen(3000)

