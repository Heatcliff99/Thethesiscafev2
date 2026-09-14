import { motion } from 'framer-motion'
import { Star, Coffee, Utensils, Wifi, Music, ChevronRight, Camera, User } from 'lucide-react'

const HomePage = ({ setCurrentPage }) => {
  const features = [
    { icon: Coffee, title: 'Premium Coffee', desc: 'Artisan blends & single-origin beans' },
    { icon: Utensils, title: 'Delicious Food', desc: 'Continental, Italian & Chinese cuisine' },
    { icon: Wifi, title: 'Free WiFi', desc: 'High-speed internet for work & study' },
    { icon: Music, title: 'Great Ambiance', desc: 'Perfect atmosphere for relaxation' },
  ]

  const reviews = [
    { name: 'Priya Sharma', rating: 5, text: 'Amazing cafe with great coffee and ambiance. Perfect place for studying!', date: '2 weeks ago' },
    { name: 'Rahul Mehta', rating: 5, text: 'Best cafe in Pratap Nagar! The pasta is delicious and staff is very friendly.', date: '1 month ago' },
    { name: 'Sneha Desai', rating: 4, text: 'Love the vibe here. Great for working on laptop. Coffee could be stronger.', date: '3 weeks ago' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016]/90 via-[#2d5016]/70 to-[#00B4D8]/80 z-10"></div>
        <img 
          src="/images/hero.jpg" 
          alt="The Thesis Cafe Interior" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop'
          }}
        />
        
        <motion.div 
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Coffee className="w-12 h-12" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
            Welcome to<br/>
            <span className="bg-gradient-to-r from-[#48CAE4] to-[#D4AF37] bg-clip-text text-transparent">
              The Thesis Cafe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Where Every Cup Tells a Story & Every Bite Inspires Creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setCurrentPage('menu')}
              className="px-8 py-4 bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.button>
            <motion.button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve a Table
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of quality, comfort, and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
                Your Perfect Study & Relaxation Spot
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Located in the heart of Pratap Nagar, Nagpur, The Thesis Cafe offers more than just coffee. 
                We provide a space where students, professionals, and coffee lovers come together to work, 
                study, or simply unwind.
              </p>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                With our premium menu, cozy ambiance, and excellent service, we've become the go-to destination 
                for anyone seeking quality time in Nagpur.
              </p>
              <motion.button
                onClick={() => setCurrentPage('about')}
                className="px-8 py-4 bg-white text-[#2d5016] rounded-full font-semibold text-lg hover:bg-white/90 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-preview.jpg" 
                  alt="Cafe Ambiance" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=800&fit=crop'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">Real reviews from Google</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setCurrentPage('reviews')}
              className="px-8 py-4 bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all"
            >
              Read All Reviews
            </button>
          </motion.div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Follow Us on Social Media
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stay updated with our latest offerings, events, and behind-the-scenes content
          </motion.p>
          
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.instagram.com/thethesiscafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E4405F] to-[#F46197] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Camera className="w-6 h-6" />
              @thethesiscafe
            </motion.a>
            
            <motion.a
              href="https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1877F2] to-[#00C6FB] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <User className="w-6 h-6" />
              The Thesis Cafe
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
