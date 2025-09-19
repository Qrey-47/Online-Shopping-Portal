import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc    Fetch a single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create a new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  // --- Our Checkpoints ---
  console.log('--- New Review Request Received at:', new Date().toLocaleTimeString());
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  // --------------------

  try {
    const { rating, comment } = req.body;

    if (!rating || !comment) {
        res.status(400);
        throw new Error('Rating and comment are required.');
    }

    console.log('Finding product by ID:', req.params.id);
    const product = await Product.findById(req.params.id);

    if (product) {
      console.log('Product found:', product.name);
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error('Product already reviewed');
      }

      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };

      if (req.file) {
        console.log('File was uploaded. Path:', req.file.path);
        review.mediaUrl = `/${req.file.path.replace(/\\/g, "/")}`;
      }

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      console.log('Saving product with new review...');
      await product.save();
      console.log('Product saved successfully.');
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    // This will catch the crash and log it clearly
    console.error('!!! --- ERROR CAUGHT IN createProductReview --- !!!');
    console.error(error);
    res.status(500).json({ message: 'Server error during review creation.' });
  }
});

// @desc    Delete a review
// @route   DELETE /api/products/:id/reviews/:reviewId
// @access  Private
const deleteProductReview = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    // Find the review to delete
    const review = product.reviews.find(
      (r) => r._id.toString() === req.params.reviewId.toString()
    );

    // Make sure review exists
    if (!review) {
      res.status(404);
      throw new Error('Review not found');
    }

    // Check if the user is the one who wrote the review
    if (review.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized to delete this review');
    }

    // Remove the review from the array
    product.reviews = product.reviews.filter(
      (r) => r._id.toString() !== req.params.reviewId.toString()
    );

    // Recalculate rating and numReviews
    product.numReviews = product.reviews.length;
    if (product.numReviews > 0) {
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
    } else {
      product.rating = 0;
    }

    await product.save();
    res.status(200).json({ message: 'Review removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// Don't forget to export the new function
export { getProductById, createProductReview, deleteProductReview };

