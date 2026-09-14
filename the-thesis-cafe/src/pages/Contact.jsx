import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info section">
        <div className="container">
          <motion.div 
            className="contact-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="contact-cards">
              <motion.div 
                className="contact-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-icon">
                  <MapPin size={32} />
                </div>
                <h3>Visit Us</h3>
                <p>Pratap Nagar, Nagpur</p>
                <p>Maharashtra, India</p>
              </motion.div>

              <motion.div 
                className="contact-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="card-icon">
                  <Clock size={32} />
                </div>
                <h3>Opening Hours</h3>
                <p>Monday - Sunday</p>
                <p>11:00 AM - 11:00 PM</p>
              </motion.div>

              <motion.div 
                className="contact-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="card-icon">
                  <Mail size={32} />
                </div>
                <h3>Email Us</h3>
                <p>thethesiscafe@gmail.com</p>
              </motion.div>

              <motion.div 
                className="contact-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="card-icon">
                  <Phone size={32} />
                </div>
                <h3>Call Us</h3>
                <p>+91 XXXXX XXXXX</p>
                <p>For reservations</p>
              </motion.div>
            </div>

            <div className="contact-form-section">
              <motion.div 
                className="form-container"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2>Send us a Message</h2>
                <p>Have a question or want to make a reservation? Fill out the form below.</p>
                
                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <select>
                      <option value="">Subject</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="event">Event Booking</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn-primary">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <h2 className="section-title">Find Us Here</h2>
          <p className="section-subtitle">Easy to Locate in Pratap Nagar</p>
          
          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="map-placeholder-large">
              <MapPin size={80} />
              <h3>The Thesis Cafe</h3>
              <p>Pratap Nagar, Nagpur, Maharashtra</p>
              <a href="https://www.google.com/maps/search/the+thesis+cafe+nagpur" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-connect section">
        <div className="container">
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">Follow Us on Social Media</p>
          
          <motion.div 
            className="social-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://www.instagram.com/thethesiscafe/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <InstagramIcon size={24} />
              <span>@thethesiscafe</span>
            </a>
            <a href="https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <FacebookIcon size={24} />
              <span>The Thesis Cafe</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
