import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import products from './data/products.js';

dotenv.config({ path: './config/config.env' });

connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany(); // Also clearing users for a clean slate

    // Create a sample admin user
    const createdUsers = await User.create([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123',
      },
    ]);

    const adminUser = createdUsers[0]._id;

    // Add the admin user's ID to each product
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported! ✅');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
    try {
      await Product.deleteMany();
      await User.deleteMany();
  
      console.log('Data Destroyed! ❌');
      process.exit();
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}