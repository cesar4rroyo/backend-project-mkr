import express from 'express'
import morgan from 'morgan'
import courtRoutes from './routes/court.routes.js'
import authRoutes from './routes/auth.routes.js'
import roleRoutes from './routes/role.routes.js'
import { createRoles } from './libs/initialSetup.js'


const app = express()
createRoles()

const pkg = {
    name: 'booking-gool',
    version: '1.0.0',
    author: 'cesar4rroyo',
    description: 'Web app to book soccer fields'
}

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
app.use('/api/roles',roleRoutes);




export default app;