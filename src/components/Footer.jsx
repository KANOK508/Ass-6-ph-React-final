import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-4 md:px-20 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Column 1: Brand & About */}
        <div className="col-span-1">
          <h2 className="text-3xl font-extrabold text-white mb-5 tracking-tight">
            DigiTools
          </h2>
          <p className="text-sm leading-relaxed opacity-70 max-w-xs">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Column 2: Product Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Product</h4>
          <ul className="space-y-4 text-sm opacity-80">
            {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm opacity-80">
            {["About", "Blog", "Careers", "Press"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Resources Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm opacity-80">
            {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Social Links (The new column) */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Social Links</h4>
          <div className="flex gap-4">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaInstagram size={20} />
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaFacebookF size={18} />
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

      </div>

   {/* Full-width Top Border */}
<div className="border-t border-slate-800/50 w-full mt-20"></div>

<div className="container mx-auto py-8 px-4 md:px-20">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Left Side: Copyright */}
    <div className="text-slate-500 text-sm font-medium">
      © 2026 Digitools. All rights reserved.
    </div>

    {/* Right Side: Legal Links */}
    <div className="flex gap-10 text-slate-500 text-sm font-medium">
      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-white transition-colors">Cookies</a>
    </div>

  </div>
</div>
    </footer>
  );
};

export default Footer;