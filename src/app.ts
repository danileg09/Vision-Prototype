import "reflect-metadata" 
import express from 'express'
import './database/connect'

import routes from "./main/router/routes"

const app = express()
app.use(express.json())
app.use(routes)

////////////////////////////////////////////////////////////////////


const id = 1
const name = "Daniel"
const email = "daniel@gmail.com"
const password = "12345"
const admin = true



////////////////////////////////////////////////////////////////////

app.listen(3000, () => console.log("Server is running!"))

