import express from 'express'
import routes from './routes/routes'
import 'reflect-metadata'

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3000, () =>{
    console.log('Running port 3000!');
})