import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

const MenuPage = () => {
  const menuCategories = [
    {
      name: 'Coffee & Beverages',
      items: [
        { name: 'Cappuccino', price: 120, desc: 'Classic Italian coffee with frothy milk' },
        { name: 'Latte', price: 130, desc: 'Smooth espresso with steamed milk' },
        { name: 'Cold Coffee', price: 140, desc: 'Chilled coffee blend with ice cream' },
        { name: 'Iced Americano', price: 110, desc: 'Refreshing cold espresso' },
        { name: 'Mocha', price: 150, desc: 'Chocolate-infused coffee delight' },
        { name: 'Hot Chocolate', price: 120, desc: 'Rich cocoa with whipped cream' },
        { name: 'Green Tea', price: 80, desc: 'Organic green tea leaves' },
        { name: 'Masala Chai', price: 70, desc: 'Traditional Indian spiced tea' },
      ]
    },
    {
      name: 'Continental',
      items: [
        { name: 'Grilled Sandwich', price: 150, desc: 'Toasted bread with veggies and cheese' },
        { name: 'Club Sandwich', price: 180, desc: 'Triple-decker with chicken/paneer' },
        { name: 'French Fries', price: 120, desc: 'Crispy golden potato fries' },
        { name: 'Peri Peri Fries', price: 140, desc: 'Spicy seasoned fries' },
        { name: 'Garlic Bread', price: 130, desc: 'Toasted bread with garlic butter' },
        { name: 'Cheesy Garlic Bread', price: 160, desc: 'Extra cheese with garlic' },
        { name: 'Veg Burger', price: 160, desc: 'Grilled patty with fresh veggies' },
        { name: 'Chicken Burger', price: 190, desc: 'Juicy chicken patty burger' },
      ]
    },
    {
      name: 'Italian',
      items: [
        { name: 'Margherita Pizza', price: 280, desc: 'Classic tomato, mozzarella & basil' },
        { name: 'Farmhouse Pizza', price: 320, desc: 'Loaded with fresh vegetables' },
        { name: 'Peppy Paneer Pizza', price: 340, desc: 'Spicy paneer with peppers' },
        { name: 'Chicken Tikka Pizza', price: 380, desc: 'Tandoori chicken with onions' },
        { name: 'Penne Arrabiata', price: 260, desc: 'Spicy tomato sauce pasta' },
        { name: 'Penne Alfredo', price: 280, desc: 'Creamy white sauce pasta' },
        { name: 'Fettuccine Carbonara', price: 300, desc: 'Classic creamy bacon pasta' },
        { name: 'Lasagna', price: 320, desc: 'Layered pasta with meat sauce' },
      ]
    },
    {
      name: 'Chinese',
      items: [
        { name: 'Veg Fried Rice', price: 180, desc: 'Wok-tossed rice with vegetables' },
        { name: 'Egg Fried Rice', price: 200, desc: 'Classic Chinese fried rice with egg' },
        { name: 'Chicken Fried Rice', price: 220, desc: 'Savory chicken fried rice' },
        { name: 'Hakka Noodles', price: 190, desc: 'Stir-fried noodles with veggies' },
        { name: 'Paneer Chili', price: 240, desc: 'Spicy Indo-Chinese paneer' },
        { name: 'Chicken Chili', price: 260, desc: 'Tangy spicy chicken dish' },
        { name: 'Veg Manchurian', price: 220, desc: 'Deep-fried veg balls in sauce' },
        { name: 'Chicken Manchurian', price: 250, desc: 'Classic chicken in gravy' },
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Chocolate Brownie', price: 140, desc: 'Warm brownie with ice cream' },
        { name: 'Butterscotch Brownie', price: 150, desc: 'Rich butterscotch delight' },
        { name: 'Red Velvet Cake', price: 160, desc: 'Classic layered cake' },
        { name: 'Chocolate Truffle Cake', price: 170, desc: 'Decadent chocolate cake' },
        { name: 'Ice Cream Sundae', price: 150, desc: 'Vanilla ice cream with toppings' },
        { name: 'Gulab Jamun', price: 120, desc: 'Traditional Indian sweet' },
      ]
    },
    {
      name: 'Mocktails & Smoothies',
      items: [
        { name: 'Blue Lagoon', price: 140, desc: 'Refreshing blue curacao mocktail' },
        { name: 'Virgin Mojito', price: 130, desc: 'Mint and lime freshness' },
        { name: 'Strawberry Smoothie', price: 160, desc: 'Fresh strawberry blend' },
        { name: 'Mango Smoothie', price: 160, desc: 'Tropical mango delight' },
        { name: 'Oreo Shake', price: 170, desc: 'Cookies and cream shake' },
        { name: 'KitKat Shake', price: 170, desc: 'Chocolate KitKat blend' },
        { name: 'Fresh Lime Soda', price: 90, desc: 'Sweet or salty lime refreshment' },
        { name: 'Watermelon Juice', price: 110, desc: 'Freshly squeezed watermelon' },
      ]
    },
  ]

  return (
    <div className="min-h-screen pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016]/90 via-[#2d5016]/70 to-[#00B4D8]/80 z-10"></div>
        <img 
          src="/images/menu-hero.jpg" 
          alt="Delicious Food" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop'
          }}
        />
        
        <motion.div 
          className="relative z-20 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffee, food, and beverages
          </p>
        </motion.div>
      </section>

      {/* Online Ordering CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#2d5016] to-[#00B4D8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-playfair text-white mb-6">
            Order Online for Home Delivery
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.swiggy.com/city/nagpur/the-thesis-cafe-pratap-nagar-pratap-nagar-rest1061180"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-all shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Order on Swiggy
            </a>
            <a
              href="https://www.zomato.com/nagpur/the-thesis-cafe-pratap-nagar/order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Order on Zomato
            </a>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          {menuCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-[#2d5016] to-[#00B4D8] rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold font-playfair bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent">
                  {category.name}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#2d5016] to-[#00B4D8] rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#2d5016] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold bg-gradient-to-r from-[#2d5016] to-[#00B4D8] bg-clip-text text-transparent">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2d5016] to-[#00B4D8] text-white p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold font-playfair mb-4">Note</h3>
            <p className="text-white/90 mb-4">
              Prices are subject to change. Please check with our staff for the latest menu and pricing.
            </p>
            <p className="text-white/90">
              For bulk orders, party catering, or special requests, please contact us directly.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MenuPage
