import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors()) //cors('aqui vai o do dns')

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => {
    console.log('Rodando...')
})

// Paulo
// eL1OJgGOCN2gWa0M