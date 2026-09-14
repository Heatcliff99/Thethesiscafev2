import { motion } from 'framer-motion';
import { Star, ThumbsUp } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const allReviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing ambiance and the coffee is absolutely divine! Perfect place to relax and unwind. The staff is very friendly and attentive.",
      date: "2 weeks ago"
    },
    {
      name: "Rahul Mehta",
      rating: 5,
      text: "Best cafe in Nagpur! The pasta and desserts are to die for. Highly recommend the chocolate lava cake!",
      date: "1 month ago"
    },
    {
      name: "Anjali Deshmukh",
      rating: 5,
      text: "Lovely place with great food and friendly staff. The green theme is so refreshing and calming.",
      date: "3 weeks ago"
    },
    {
      name: "Vikram Patel",
      rating: 5,
      text: "Great spot for meetings and casual hangouts. The wifi is good and the coffee keeps you going!",
      date: "1 week ago"
    },
    {
      name: "Sneha Kulkarni",
      rating: 5,
      text: "The mocktails here are incredible! Love the virgin mojito. Will definitely come back again.",
      date: "2 months ago"
    },
    {
      name: "Arjun Singh",
      rating: 5,
      text: "Excellent food quality and presentation. The pizza was perfectly baked. Great value for money!",
      date: "3 weeks ago"
    },
    {
      name: "Meera Joshi",
      rating: 5,
      text: "A hidden gem in Pratap Nagar! The atmosphere is perfect for reading or working. Love this place!",
      date: "1 month ago"
    },
    {
      name: "Karan Malhotra",
      rating: 5,
      text: "Best cold coffee in town! The portions are generous and the taste is authentic. Highly recommended!",
      date: "2 weeks ago"
    },
    {
      name: "Pooja Reddy",
      rating: 5,
      text: "Such a beautiful cafe with amazing vibes. The staff goes above and beyond to make you feel welcome.",
      date: "4 weeks ago"
    }
  ];

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <section className="reviews-hero">
        <div className="reviews-hero-content">
          <h1>Customer Reviews</h1>
          <p>What Our Valued Customers Say About Us</p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="rating-overview section">
        <div className="container">
          <motion.div 
            className="rating-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rating-main">
              <div className="rating-number">4.8</div>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <p>Based on Google Reviews</p>
            </div>
            <div className="rating-breakdown">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="breakdown-row">
                  <span>{stars} Stars</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: stars === 5 ? '85%' : stars === 4 ? '10%' : '3%' }}
                    ></div>
                  </div>
                  <span>{stars === 5 ? '85%' : stars === 4 ? '10%' : '3%'}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="all-reviews section">
        <div className="container">
          <h2 className="section-title">All Reviews</h2>
          <p className="section-subtitle">Live from Google</p>
          
          <motion.div 
            className="reviews-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {allReviews.map((review, index) => (
              <motion.div
                key={index}
                className="review-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="review-item-header">
                  <div className="reviewer-avatar-large">
                    {review.name.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <h4>{review.name}</h4>
                    <div className="review-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                      ))}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <ThumbsUp size={20} />
                </div>
                <p className="review-item-text">{review.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="review-cta section">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Had a Great Experience?</h2>
            <p>Share your review on Google and help others discover us!</p>
            <a href="https://goo.gl/maps/your-location" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Write a Review
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
