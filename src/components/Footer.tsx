
import { Link } from 'react-router-dom';
import { MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/facilities", label: "Library Facilities" },
    { to: "/opac", label: "OPAC Library" },
    { to: "/alumini", label: "Alumini" },
    { to: "/events", label: "Events and Exhibitions" },
    { to: "/donations", label: "Donations" },
    { to: "/e-resource", label: "E-resource" },
    { to: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <MapPin size={18} className="mr-2" />
              <p>Dina Patil Estate, Station Road,<br/> Bhandup (W) <br/>Mumbai 400078</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={18} className="mr-2" />
              <p>+91 - 704572536</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-gray-300">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; Late Dina Bama Patil Pratishthan's DINA BAMA PATIL LIBRARY & STUDY ROOM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;