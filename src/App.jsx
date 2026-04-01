import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // Crucial fix for last step!
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Footer from './components/Footer'
import MainContent from './components/MainContent' // Placeholder for static content
import Pricing     from './components/Pricing'
import CTA from './components/CTA'
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); // Toggle between 'products' and 'cart'

  // Load JSON Data
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  // Add to Cart Logic
  const handleAddToCart = (item) => {
    const isExist = cart.find(p => p.id === item.id);
    if (!isExist) {
      setCart([...cart, item]);
      toast.success(`${item.name} added to cart! 🛒`);
    } else {
      toast.warning("Item is already in your cart!");
    }
  };

  // Remove from Cart
  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    toast.info("Item removed from cart");
  };

  // Checkout
  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout Successful! Your cart is now cleared.");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar cartCount={cart.length} />
      <Hero />

      {/* Refined Toggle Section Header from image_7.png */}
      <section className="text-center pt-24 pb-16 bg-white">
        <h2 className="text-4xl font-extrabold text-slate-950 mb-4">Premium Digital Tools</h2>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center my-10">
          <div className="join border border-purple-200 p-1.5 rounded-full bg-white shadow-inner">
            <button 
              onClick={() => setView('products')}
              className={`join-item btn rounded-full px-8 h-12 ${view === 'products' ? 'btn-primary' : 'btn-ghost text-primary'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setView('cart')}
              className={`join-item btn rounded-full px-8 h-12 ${view === 'cart' ? 'btn-primary' : 'btn-ghost text-primary'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>
      </section>

      {/* Main Dynamic Area */}
      <main className="container mx-auto px-4 md:px-10 pb-24">
        {view === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
            ))}
          </div>
        ) : (
          <Cart items={cart} onRemove={handleRemove} onCheckout={handleCheckout} />
        )}
      </main>

      {/* Remaining Static Sections from Figma */}
      <MainContent />
<Pricing/>
<CTA/>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </div>
  )
}

export default App