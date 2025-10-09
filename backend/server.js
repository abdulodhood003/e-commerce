import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRouter.js';

const app = express();

// Connect MongoDB & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(cors({
  origin: 'https://abdul-admin-dashboard.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json()); // Must come before routers

// API routes
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Default route
app.get('/', (req, res) => res.send('API Working'));

// 404 handler
app.use((req, res) => res.status(404).send('Not Found'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: err.message });
});

export default app; // Vercel uses this for serverless
