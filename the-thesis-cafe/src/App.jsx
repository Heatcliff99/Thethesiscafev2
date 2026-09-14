import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Clock, Mail, Camera, User, Star, Coffee } from 'lucide-react'

// Import page components
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ]

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'menu':
        return <MenuPage />
      case 'about':
        return <AboutPage />
      case 'reviews':
        return <ReviewsPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentPage('home')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#00B4D8] rounded-full flex items-center justify-center">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent">
                  The Thesis Cafe
                </h1>
                <p className="text-xs text-gray-500">Pratap Nagar, Nagpur</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2d5016] to-[#00B4D8] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-playfair">The Thesis Cafe</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Where every cup tells a story and every bite inspires creativity. 
                Your perfect study spot in Pratap Nagar, Nagpur.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className="block text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-white/80 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Pratap Nagar, Nagpur, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 text-sm">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 text-sm">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>thethesiscafe@gmail.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/thethesiscafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Camera className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <User className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 The Thesis Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
