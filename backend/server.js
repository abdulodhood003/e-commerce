import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRouter.js'

// App config
const app = express()
const port = process.env.PORT || 8000

// Connect DB + Cloudinary
connectDB()
connectCloudinary()

// Middlewares
app.use(cors())
app.use(express.json()) // must come before routers

// API routes
app.use('/api/user', userRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Default route
app.get('/', (req, res) => {
  res.send("API Working")
})

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found')
})

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`)
})
