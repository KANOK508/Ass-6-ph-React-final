const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        {/* Brand */}
        <a className="text-3xl font-extrabold text-primary">DigiTools</a>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-700">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(link => (
            <a key={link} href="#" className="hover:text-primary transition-colors">{link}</a>
          ))}
        </div>

        {/* Cart & Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="font-medium text-sm">Cart ({cartCount})</span>
          </div>
          <button className="text-slate-700 hover:text-primary font-medium text-sm">Login</button>
          <button className="btn btn-primary rounded-full px-6 shadow-md shadow-purple-100">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;