import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    mediaUrl: { type: String }, // Add this line
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Adds a relationship to the User model
    },
  },
  {
    timestamps: true,
  }
);

export default reviewSchema; // Note: we're exporting the schema, not a model