const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 pr-10">
          <h2 className="text-3xl font-extrabold text-white mb-5">DigiTools</h2>
          <p className="text-sm leading-relaxed opacity-70">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-3 text-sm opacity-80">
            {["Features", "Pricing", "Templates", "Integrations"].map(link => (
              <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-sm opacity-80">
            {["About", "Blog", "Careers", "Press"].map(link => (
              <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-3 text-sm opacity-80">
            {["Documentation", "Help Center", "Community", "Contact"].map(link => (
              <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Links & Bottom Bar */}
      <div className="container mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>© 2026 DigiTools. All rights reserved.</p>
        
        {/* Social Icons based on image_6.png */}
        <div className="flex gap-4 my-4 md:my-0">
          {["Y", "f", "X"].map(icon => (
            <div key={icon} className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer text-white font-mono">
              {icon}
            </div>
          ))}
        </div>
        
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;