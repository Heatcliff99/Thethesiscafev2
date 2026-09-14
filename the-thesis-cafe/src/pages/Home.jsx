import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, Utensils, Clock, MapPin, Star,  } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing ambiance and the coffee is absolutely divine! Perfect place to relax and unwind.",
      date: "2 weeks ago"
    },
    {
      name: "Rahul Mehta",
      rating: 5,
      text: "Best cafe in Nagpur! The pasta and desserts are to die for. Highly recommend!",
      date: "1 month ago"
    },
    {
      name: "Anjali Deshmukh",
      rating: 5,
      text: "Lovely place with great food and friendly staff. The green theme is so refreshing!",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to The Thesis Cafe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Every Sip Tells a Story
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/menu" className="btn-primary">View Menu</Link>
            <Link to="/contact" className="btn-secondary">Book a Table</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <motion.div 
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <Coffee size={48} />
              <h3>Premium Coffee</h3>
              <p>Expertly brewed coffee beans from the finest sources</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <Utensils size={48} />
              <h3>Delicious Food</h3>
              <p>Continental, Italian & Chinese cuisine made with love</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <Clock size={48} />
              <h3>Cozy Ambiance</h3>
              <p>Perfect setting for relaxation and conversations</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <MapPin size={48} />
              <h3>Prime Location</h3>
              <p>Located in the heart of Pratap Nagar, Nagpur</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p className="section-subtitle">A Place Where Ideas Brew</p>
              <p>
                The Thesis Cafe is more than just a cafe – it's a sanctuary for thinkers, dreamers, and coffee lovers. 
                Nestled in Pratap Nagar, Nagpur, we've created a space where the aroma of freshly brewed coffee 
                meets the warmth of genuine hospitality.
              </p>
              <p>
                Our green-themed interior reflects our commitment to creating a refreshing and rejuvenating 
                environment. Whether you're here for a quick espresso or a leisurely meal, we promise an 
                experience that lingers long after your last sip.
              </p>
              <Link to="/about" className="btn-primary">Learn More</Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <Coffee size={80} />
                <span>Cafe Ambiance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Reviews Section */}
      <section className="reviews-preview section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Live Reviews from Google</p>
          
          <motion.div 
            className="reviews-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {reviews.map((review, index) => (
              <motion.div key={index} className="review-card" variants={fadeInUp}>
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4>{review.name}</h4>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#d4af37" color="#d4af37" />
                    ))}
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="reviews-cta">
            <Link to="/reviews" className="btn-secondary">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section section">
        <div className="container">
          <h2 className="section-title">Follow Us</h2>
          <p className="section-subtitle">Stay Connected</p>
          
          <div className="social-links">
            <a href="https://www.instagram.com/thethesiscafe/" target="_blank" rel="noopener noreferrer" className="social-link">
              <InstagramIcon size={40} />
              <span>@thethesiscafe</span>
            </a>
            <a href="https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FacebookIcon size={40} />
              <span>The Thesis Cafe</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
