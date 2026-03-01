import React from "react";

const Footer = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Learn", href: "/learn" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Custom Software", href: "/custom-software" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "Consultancy", href: "/business-consultancy" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Custom Website", href: "/custom-website" },
    { name: "Smart Automation", href: "/smart-automation" },
    { name: "Digital Partnerships", href: "/digital-partnership" },
  ];

  return (
    <footer className="bg-black text-gray-400 pt-50 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Side: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-white text-3xl font-light tracking-wider">ANSELY</h2>
              <p className="text-sm leading-relaxed max-w-sm">
                Let us guide you in your digital evolution. We transform your
                vision into reality with innovation and precision.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Subscribe to our weekly newsletter</h3>
              <div className="flex gap-2 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Your Original Links Reorganized */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Pages</h3>
              <ul className="space-y-3 text-sm">
                {pages.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Services</h3>
              <ul className="space-y-3 text-sm">
                {services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:contact@ansely.co.uk" className="hover:text-white transition-colors">contact@ansely.co.uk</a></li>
                <li><a href="tel:+447380909597" className="hover:text-white transition-colors">+44 738 0909597</a></li>
                <li className="pt-4 flex gap-4">
                  {/* Social links added to match the image style */}
                  <div className="w-8 h-8 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">f</div>
                  <div className="w-8 h-8 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">in</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} <span className="text-white">Ansely</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
