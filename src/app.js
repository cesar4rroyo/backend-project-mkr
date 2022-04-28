import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import courtRoutes from './routes/court.routes'
import authRoutes from './routes/auth.routes'
import { createRoles } from './libs/initialSetup'


const app = express()
createRoles()

app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        project: app.get('pkg').name,
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
    })
})

app.use('/api/courts',courtRoutes);
app.use('/api/auth',authRoutes);




export default app;