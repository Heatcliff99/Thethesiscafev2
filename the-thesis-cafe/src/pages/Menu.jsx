import { motion } from 'framer-motion';
import { Coffee, Utensils, IceCream, Wine } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  const menuCategories = [
    {
      id: 'coffee',
      name: 'Coffee & Beverages',
      icon: Coffee,
      items: [
        { name: 'Espresso', description: 'Rich and bold single shot', price: '₹120' },
        { name: 'Americano', description: 'Espresso with hot water', price: '₹150' },
        { name: 'Cappuccino', description: 'Espresso with steamed milk foam', price: '₹180' },
        { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '₹200' },
        { name: 'Mocha', description: 'Chocolate infused coffee delight', price: '₹220' },
        { name: 'Cold Coffee', description: 'Chilled blended coffee', price: '₹200' },
        { name: 'Iced Latte', description: 'Cold espresso with milk', price: '₹220' },
        { name: 'Hot Chocolate', description: 'Rich cocoa with whipped cream', price: '₹180' },
      ]
    },
    {
      id: 'continental',
      name: 'Continental',
      icon: Utensils,
      items: [
        { name: 'Grilled Chicken Sandwich', description: 'With herbs and cheese', price: '₹280' },
        { name: 'Veg Panini', description: 'Grilled veggies with mozzarella', price: '₹250' },
        { name: 'Chicken Burger', description: 'Juicy patty with fresh toppings', price: '₹320' },
        { name: 'Veg Burger', description: 'Crispy patty with lettuce', price: '₹220' },
        { name: 'Club Sandwich', description: 'Triple decker with fillings', price: '₹260' },
        { name: 'French Fries', description: 'Crispy golden fries', price: '₹150' },
      ]
    },
    {
      id: 'italian',
      name: 'Italian',
      icon: Utensils,
      items: [
        { name: 'Margherita Pizza', description: 'Classic tomato and basil', price: '₹350' },
        { name: 'Paneer Tikka Pizza', description: 'Spiced paneer with peppers', price: '₹420' },
        { name: 'Chicken Pepperoni Pizza', description: 'Loaded with pepperoni', price: '₹480' },
        { name: 'Penne Arrabiata', description: 'Spicy tomato sauce pasta', price: '₹320' },
        { name: 'Alfredo Pasta', description: 'Creamy white sauce pasta', price: '₹340' },
        { name: 'Lasagna', description: 'Layered pasta bake', price: '₹380' },
      ]
    },
    {
      id: 'chinese',
      name: 'Chinese',
      icon: Utensils,
      items: [
        { name: 'Hakka Noodles', description: 'Stir-fried noodles with veggies', price: '₹280' },
        { name: 'Chicken Noodles', description: 'Wok-tossed with chicken', price: '₹320' },
        { name: 'Fried Rice', description: 'Classic Chinese style', price: '₹260' },
        { name: 'Chicken Fried Rice', description: 'With egg and chicken', price: '₹300' },
        { name: 'Manchow Soup', description: 'Spicy vegetable soup', price: '₹180' },
        { name: 'Sweet Corn Soup', description: 'Creamy and comforting', price: '₹160' },
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: IceCream,
      items: [
        { name: 'Chocolate Lava Cake', description: 'With vanilla ice cream', price: '₹250' },
        { name: 'Brownie Sundae', description: 'Warm brownie with scoops', price: '₹280' },
        { name: 'Cheesecake', description: 'Classic New York style', price: '₹300' },
        { name: 'Tiramisu', description: 'Italian coffee dessert', price: '₹320' },
        { name: 'Ice Cream Scoop', description: 'Choice of flavors', price: '₹120' },
      ]
    },
    {
      id: 'mocktails',
      name: 'Mocktails',
      icon: Wine,
      items: [
        { name: 'Blue Lagoon', description: 'Refreshing citrus blend', price: '₹180' },
        { name: 'Virgin Mojito', description: 'Mint and lime freshness', price: '₹160' },
        { name: 'Strawberry Smoothie', description: 'Fresh strawberry blend', price: '₹200' },
        { name: 'Mango Madness', description: 'Tropical mango delight', price: '₹200' },
        { name: 'Green Apple Cooler', description: 'Crisp and refreshing', price: '₹180' },
      ]
    }
  ];

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Discover Our Culinary Delights</p>
        </div>
      </section>

      <section className="menu-section section">
        <div className="container">
          {menuCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="menu-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="category-header">
                <category.icon size={40} />
                <h2>{category.name}</h2>
              </div>
              
              <div className="menu-grid">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="menu-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                  >
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <span className="menu-price">{item.price}</span>
                    </div>
                    <p className="menu-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="menu-note section">
        <div className="container">
          <div className="note-card">
            <p>
              <strong>Note:</strong> Prices are subject to change. 
              Please inform our staff of any allergies or dietary restrictions.
              All dishes are prepared fresh to order.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
