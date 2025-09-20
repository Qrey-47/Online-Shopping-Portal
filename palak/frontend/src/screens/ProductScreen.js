import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Rating from '../components/Rating';
import { ArrowLeft } from 'lucide-react';

const ProductScreen = () => {
  const [product, setProduct] = useState({ variants: [], reviews: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);
  const [reviewError, setReviewError] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState('');
  const { id: productId } = useParams();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
        if (data.variants && data.variants.length > 0) {
          setSelectedVariant(data.variants[0]);
        }
        setLoading(false);
      } catch (err) {
        setError('Product not found');
        setLoading(false);
      }
    };
    if (productId) {
      fetchProduct();
    }
  }, [productId, reviewSuccess]);

  const submitReviewHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('rating', rating);
    formData.append('comment', comment);
    if (image) formData.append('media', image);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(`/api/products/${productId}/reviews`, formData, config);
      setReviewSuccess('Review submitted successfully!');
      setReviewError('');
      setRating(0);
      setComment('');
      setImage(null);
      e.target.reset(); // Clear the file input
    } catch (err) {
      setReviewError(err.response?.data?.message || 'An error occurred');
      setReviewSuccess('');
    }
  };

  const deleteReviewHandler = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        await axios.delete(`/api/products/${productId}/reviews/${reviewId}`, config);
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      } catch (err) {
        alert(err.response?.data?.message || 'Could not delete review');
      }
    }
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;
  if (error) return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;

  return (
    <div className="container product-screen-container">
      <Link to="/" className="btn go-back-btn">
        <ArrowLeft size={16} />
        Go Back
      </Link>
      
      <div className="product-screen-wrapper">
        <div className="product-details-layout">
    {/* Column 1: Image */}
    <div className="product-image-container">
        <img src={product.image} alt={product.name} />
    </div>

    {/* Column 2: All Product Info */}
    <div className="product-info-container">
        <h1>{product.name}</h1>
        <div className="rating">
            <Rating value={product.rating} />
            <span className="rating-text">{product.numReviews} reviews</span>
        </div>
        
        {selectedVariant && <p className="price">₹{selectedVariant.price}</p>}
        
        <div className="variant-selector">
            <h3>Quantities</h3>
            {product.variants.map((variant) => (
                <button
                    key={variant.size}
                    className={`variant-btn ${selectedVariant?.size === variant.size ? 'selected' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                >
                    {variant.size}
                </button>
            ))}
        </div>
        
        {/* Status and Add to Cart are now here */}
        {selectedVariant && (
            <div className="action-box">
                <p><strong>Status:</strong> {selectedVariant.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                <button className="btn" disabled={selectedVariant.countInStock === 0}>
                    Add to Cart
                </button>
            </div>
        )}
    </div>
</div>

        <div className="product-extra-details">
          <div className="tabs-nav">
            <button className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
            <button className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
            <button className={`tab-btn ${activeTab === 'howToUse' ? 'active' : ''}`} onClick={() => setActiveTab('howToUse')}>How To Use</button>
          </div>
          <div className="tab-content">
            {activeTab === 'description' && <p>{product.longDescription}</p>}
            {activeTab === 'ingredients' && <ul>{product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>}
            {activeTab === 'howToUse' && <p>{product.howToUse}</p>}
          </div>
        </div>

        <div className="reviews-section">
          <h2>Reviews</h2>
          {product.reviews.length === 0 && <p>No reviews yet.</p>}
          {product.reviews.map((review) => (
            <div key={review._id} className="review-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{review.name}</strong>
                {userInfo && userInfo._id === review.user && (
                  <button 
                    className="btn" 
                    style={{backgroundColor: '#c44545', padding: '0.3rem 0.6rem', fontSize: '0.8rem'}}
                    onClick={() => deleteReviewHandler(review._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <Rating value={review.rating} />
              <p className="review-date">{new Date(review.createdAt).toLocaleDateString()}</p>
              <p>{review.comment}</p>
              {review.mediaUrl && (
                  <img src={review.mediaUrl} alt="Review media" className="review-media" />
              )}
            </div>
          ))}
          
          <div className="review-form-container">
            <h3>Write a Customer Review</h3>
            {reviewSuccess && <p style={{color: 'green'}}>{reviewSuccess}</p>}
            {reviewError && <p style={{color: 'red'}}>{reviewError}</p>}
            {userInfo ? (
              <form onSubmit={submitReviewHandler}>
                <div className="form-group"><label>Rating</label><select value={rating} onChange={(e) => setRating(e.target.value)} required><option value="">Select...</option><option value="1">1 - Poor</option><option value="2">2 - Fair</option><option value="3">3 - Good</option><option value="4">4 - Very Good</option><option value="5">5 - Excellent</option></select></div>
                <div className="form-group"><label>Comment</label><textarea rows="4" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea></div>
                <div className="form-group"><label>Add Photo/Video</label><input type="file" onChange={(e) => setImage(e.target.files[0])} /></div>
                <button type="submit" className="btn">Submit Review</button>
              </form>
            ) : (<p>Please <Link to="/login">sign in</Link> to write a review.</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;