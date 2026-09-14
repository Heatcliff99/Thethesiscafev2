import { motion } from 'framer-motion'
import { Star, ThumbsUp } from 'lucide-react'

const ReviewsPage = () => {
  const reviews = [
    { name: 'Priya Sharma', rating: 5, text: 'Amazing cafe with great coffee and ambiance. Perfect place for studying! The staff is very cooperative and the WiFi speed is excellent.', date: '2 weeks ago', avatar: 'P' },
    { name: 'Rahul Mehta', rating: 5, text: 'Best cafe in Pratap Nagar! The pasta is delicious and staff is very friendly. Love the cozy atmosphere here.', date: '1 month ago', avatar: 'R' },
    { name: 'Sneha Desai', rating: 4, text: 'Love the vibe here. Great for working on laptop. Coffee could be stronger but overall a great experience.', date: '3 weeks ago', avatar: 'S' },
    { name: 'Amit Patel', rating: 5, text: 'Excellent food quality and reasonable prices. The chocolate brownie is a must-try! Will definitely come back.', date: '1 week ago', avatar: 'A' },
    { name: 'Neha Gupta', rating: 5, text: 'Perfect spot for college students. Good music, comfortable seating, and amazing mocktails. Highly recommend!', date: '2 months ago', avatar: 'N' },
    { name: 'Vikram Singh', rating: 4, text: 'Nice place to hang out with friends. The pizza was good and service was quick. Parking can be an issue during peak hours.', date: '3 weeks ago', avatar: 'V' },
    { name: 'Anjali Reddy', rating: 5, text: 'Absolutely love this place! The cold coffee is the best I have had in Nagpur. Great for both work and relaxation.', date: '1 month ago', avatar: 'A' },
    { name: 'Rohan Joshi', rating: 5, text: 'Great ambiance and even better food. The Chinese section of the menu is fantastic. Staff is always smiling and helpful.', date: '2 weeks ago', avatar: 'R' },
    { name: 'Kavita Nair', rating: 4, text: 'Lovely cafe with a study-friendly environment. Prices are student-friendly. Would love if they added more vegan options.', date: '1 month ago', avatar: 'K' },
  ]

  const ratingBreakdown = [
    { stars: 5, count: 78, percentage: 78 },
    { stars: 4, count: 15, percentage: 15 },
    { stars: 3, count: 5, percentage: 5 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ]

  return (
    <div className="min-h-screen pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016]/90 via-[#2d5016]/70 to-[#00B4D8]/80 z-10"></div>
        <img 
          src="/images/reviews-hero.jpg" 
          alt="Customer Reviews" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&h=1080&fit=crop'
          }}
        />
        
        <motion.div 
          className="relative z-20 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See what our amazing customers have to say about us
          </p>
        </motion.div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl font-bold bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-4">
                4.8
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-lg">
                Based on 100+ Google reviews
              </p>
              <a
                href="https://www.google.com/maps/search/The+Thesis+Cafe+Pratap+Nagar+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <ThumbsUp className="w-5 h-5" />
                Write a Review on Google
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Rating Breakdown</h3>
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="font-bold text-gray-700">{item.stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#2d5016] to-[#00B4D8] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-600 w-12 text-right">{item.count}%</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold font-playfair mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Had a Great Experience?
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Share your experience with others and help us grow!
          </motion.p>
          <motion.a
            href="https://www.google.com/maps/search/The+Thesis+Cafe+Pratap+Nagar+Nagpur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2d5016] rounded-full font-semibold text-lg hover:bg-white/90 transition-all shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThumbsUp className="w-5 h-5" />
            Leave Us a Review
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default ReviewsPage
