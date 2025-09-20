import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Middleware to accept JSON data in the body
app.use(express.json());

// Enable CORS to allow frontend and backend to communicate
app.use(cors());

// --- Routes ---
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Make uploads folder static
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Use the route files
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


// --- Custom Error Handling Middleware ---
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Log the error for debugging
  console.error('--- ERROR HANDLER CAUGHT ---');
  console.error('Error Message:', err.message);
  console.error('Error Stack:', err.stack);
  
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// --- NEW: Process-level Crash Handlers ---
// This will catch any promise rejections that weren't handled elsewhere
process.on('unhandledRejection', (err, promise) => {
  console.error(`--- UNHANDLED REJECTION ---`);
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// This will catch any errors that were not caught in a try/catch block
process.on('uncaughtException', (err) => {
    console.error(`--- UNCAUGHT EXCEPTION ---`);
    console.error(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});