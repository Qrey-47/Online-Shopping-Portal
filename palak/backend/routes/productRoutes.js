import express from 'express';
const router = express.Router();
import {
  getProductById,
  createProductReview,
  deleteProductReview, // Import the new function
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

router.route('/:id').get(getProductById);
router
  .route('/:id/reviews')
  .post(protect, upload.single('media'), createProductReview);

// Add this new route
router.route('/:id/reviews/:reviewId').delete(protect, deleteProductReview);

export default router;