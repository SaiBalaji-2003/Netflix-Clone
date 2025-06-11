
import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Company': ['About Us', 'Careers', 'Press', 'Blog'],
    'Support': ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    'Features': ['Watch Offline', '4K Streaming', 'Multiple Devices', 'Family Profiles'],
    'Social': ['Facebook', 'Twitter', 'Instagram', 'YouTube']
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StreamFlix
            </h1>
          </div>
          
          <div className="text-foreground/60 text-sm text-center md:text-right">
            <p>&copy; 2024 StreamFlix. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for movie lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
