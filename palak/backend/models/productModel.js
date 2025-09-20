import mongoose from 'mongoose';
import reviewSchema from './reviewSchema.js';

const variantSchema = mongoose.Schema({
  size: { type: String, required: true }, // e.g., '100 ml', '250 gm'
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true, default: 0 },
});

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    // Detailed Description Fields
    longDescription: {
      type: String,
      required: true,
      default: 'No description available.',
    },
    ingredients: {
      type: [String],
      required: true,
      default: [],
    },
    howToUse: {
      type: String,
      required: true,
      default: 'No usage instructions available.',
    },
    // Variant Array
    variants: [variantSchema],
    reviews: [reviewSchema],
    // Overall rating (calculated from reviews)
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;