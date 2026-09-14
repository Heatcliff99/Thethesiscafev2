import { motion } from 'framer-motion';
import { Coffee, Heart, Users, Award, Clock, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'We source the finest coffee beans and ingredients to ensure every cup and dish meets our high standards.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every item on our menu is prepared with care and passion by our skilled chefs.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We believe in creating a space where people can connect, share ideas, and build relationships.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for our exceptional service and quality by food critics and customers alike.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '50+', label: 'Menu Items' },
    { number: '4.8', label: 'Google Rating' },
    { number: '365', label: 'Days Open' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>The Story Behind The Thesis Cafe</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="story-text">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">From Vision to Reality</p>
              <p>
                The Thesis Cafe was born from a simple idea – to create a space where great coffee meets 
                great conversation. Located in the vibrant Pratap Nagar area of Nagpur, we've become more 
                than just a cafe; we're a community hub.
              </p>
              <p>
                Our name reflects our belief that every great idea starts like a thesis – with passion, 
                dedication, and countless hours of refinement. Just like a thesis defense, we believe in 
                standing behind the quality of what we serve.
              </p>
              <p>
                The green theme that adorns our interior isn't just aesthetic – it represents growth, 
                freshness, and our commitment to sustainability. We strive to create an environment that 
                rejuvenates the mind and soul.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder large">
                <Coffee size={100} />
                <span>Our Story</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What Makes Us Special</p>
          
          <motion.div 
            className="values-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  <feature.icon size={40} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section section">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">Find Us Here</p>
          
          <motion.div 
            className="location-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="location-info">
              <div className="info-item">
                <MapPin size={24} />
                <div>
                  <h4>Address</h4>
                  <p>Pratap Nagar, Nagpur, Maharashtra</p>
                </div>
              </div>
              <div className="info-item">
                <Clock size={24} />
                <div>
                  <h4>Hours</h4>
                  <p>Open Daily: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            <div className="location-map">
              <div className="map-placeholder">
                <MapPin size={60} />
                <span>Pratap Nagar, Nagpur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
