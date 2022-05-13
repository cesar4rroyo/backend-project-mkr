import express from 'express'
import morgan from 'morgan'
import courtRoutes from './routes/court.routes.js'
import authRoutes from './routes/auth.routes.js'
import roleRoutes from './routes/role.routes.js'
import bookingRoutes from './routes/booking.routes.js'
import billingRoutes from './routes/billing.routes.js'
import pricesRoutes from './routes/price.routes.js'
import processRoutes from './routes/process.routes.js'
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
app.use('/api/bookings',bookingRoutes);
app.use('/api/billing',billingRoutes);
app.use('/api/prices',pricesRoutes);
app.use('/api/process',processRoutes);




export default app;