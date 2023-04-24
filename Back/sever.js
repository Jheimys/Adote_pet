import express from 'express'
import cors from 'cors'
import userRoutes from"./routes/userRoutes.js"


const app = express()

app.use(cors({credentials:true, origin: 'http://localhost:3000'}))
app.use(express.static('public'))
app.use(express.json())

//Routes
app.use('/users', userRoutes)

const Port = 5000 || process.env.PORT()

app.listen(Port, () => {
    console.log(`Sevidor rodando na porta ${Port}`)
})


