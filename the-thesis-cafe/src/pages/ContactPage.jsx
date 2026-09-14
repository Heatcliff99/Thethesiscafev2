import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Mail, Phone, Send, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `*New Reservation/Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`
    
    // Encode for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919766443928?text=${encodedMessage}`, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Pratap Nagar,', 'Nagpur, Maharashtra', 'India'],
      color: 'from-[#2d5016] to-[#00B4D8]'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Monday - Sunday', '9:00 AM - 11:00 PM', 'Open all days'],
      color: 'from-[#00B4D8] to-[#48CAE4]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['thethesiscafe@gmail.com', 'For reservations & inquiries', 'We reply within 24 hours'],
      color: 'from-[#48CAE4] to-[#2d5016]'
    },
  ]

  return (
    <div className="min-h-screen pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016]/90 via-[#2d5016]/70 to-[#00B4D8]/80 z-10"></div>
        <img 
          src="/images/contact-hero.jpg" 
          alt="Contact The Thesis Cafe" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&h=1080&fit=crop'
          }}
        />
        
        <motion.div 
          className="relative z-20 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for reservations, inquiries, or feedback
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-2">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you via WhatsApp shortly!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"
                    placeholder="+91 9XXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="Table Reservation">Table Reservation</option>
                    <option value="Bulk Order">Bulk Order / Catering</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Query">General Query</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By clicking send, you'll be redirected to WhatsApp with your message pre-filled.
                  <br/>Your message will be sent to our team at +91 9766443928
                </p>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5!2d79.0!3d21.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA2JzAwLjAiTiA3OcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Thesis Cafe Location"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#2d5016] to-[#00B4D8] text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold font-playfair mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919766443928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="mailto:thethesiscafe@gmail.com"
                    className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                  >
                    <Mail className="w-6 h-6" />
                    <span>Email Us Directly</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/search/The+Thesis+Cafe+Pratap+Nagar+Nagpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                  >
                    <MapPin className="w-6 h-6" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
