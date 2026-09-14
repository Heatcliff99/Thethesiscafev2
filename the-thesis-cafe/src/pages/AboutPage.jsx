import { motion } from 'framer-motion'
import { Award, Users, Star, Heart, Coffee, MapPin, Clock } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Star, value: '4.8', label: 'Google Rating' },
    { icon: Coffee, value: '100+', label: 'Menu Items' },
    { icon: Award, value: '5+', label: 'Years of Excellence' },
  ]

  return (
    <div className="min-h-screen pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016]/90 via-[#2d5016]/70 to-[#00B4D8]/80 z-10"></div>
        <img 
          src="/images/about-hero.jpg" 
          alt="About The Thesis Cafe" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop'
          }}
        />
        
        <motion.div 
          className="relative z-20 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            Our Story
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From a simple idea to Nagpur's favorite cafe destination
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-6">
                Where It All Began
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                The Thesis Cafe was born from a simple vision: to create a space in Pratap Nagar where students, 
                professionals, and coffee enthusiasts could come together to work, study, relax, and connect.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                What started as a small cafe has now become one of Nagpur's most beloved destinations. 
                We take pride in serving not just coffee and food, but an experience that keeps our 
                customers coming back.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every cup we serve is crafted with care, every dish is prepared with fresh ingredients, 
                and every corner of our cafe is designed to make you feel at home.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/story.jpg" 
                  alt="Our Journey" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=800&fit=crop'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Made with Love', desc: 'Every item prepared with passion and care' },
              { icon: Award, title: 'Quality First', desc: 'Only the finest ingredients make it to your plate' },
              { icon: Users, title: 'Community Focus', desc: 'Building connections one cup at a time' },
              { icon: Star, title: 'Excellence', desc: 'Constantly striving to exceed expectations' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-playfair mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-4">
              Visit Us Today
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Location</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Pratap Nagar,<br/>
                Nagpur, Maharashtra<br/>
                India
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Opening Hours</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Monday - Sunday<br/>
                9:00 AM - 11:00 PM<br/>
                Open all days
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
