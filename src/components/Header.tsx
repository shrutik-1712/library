import { useState } from 'react';
import { MapPin, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubItem {
  to: string;
  label: string;
}

interface NavItem {
  to?: string;
  label: string;
  hasDropdown?: boolean;
  subItems?: SubItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems: NavItem[] = [
    { to: "/", label: "Home" },
    {
      label: "Library details",
      hasDropdown: true,
      subItems: [
        { to: "/facilities", label: "Rules" },
        { to: "/Library-info", label: "Library" },
        { to: "/studyRoom", label: "Study Room" },
      ]
    },
    { to: "/about", label: "About Us" },
    { to: "/opac", label: "OPAC Library" },
    { to: "/alumini", label: "Alumni" },
    { to: "/events", label: "Events and Exhibitions" },
    { to: "/donations", label: "Donations" },
    { to: "/e-resource", label: "E-resource" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full">
      {/* Top Header with Logo and Contact Info */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 lg:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center">
              <img 
                src="/src/assets/Images/LIbraryLogo.png" 
                alt="Library Logo" 
                className="h-12 lg:h-20 mr-3" 
              />
              <div className="flex flex-col">
                <h1 className="text-sm lg:text-xl font-bold leading-tight">
                  Late Dina Bama Patil Pratishthan's
                </h1>
                <h2 className="text-base lg:text-2xl font-bold text-blue-600 leading-tight">
                  DINA BAMA PATIL LIBRARY & STUDY ROOM
                </h2>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-start gap-2">
                <MapPin className="text-gray-600 mt-1" size={18} />
                <p className="text-sm">
                  Dina Patil Estate, Station Road,<br />
                  Bhandup (W)<br />
                  Mumbai 400078
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-gray-600" size={18} />
                <p className="text-sm">+91 - 704572536</p>
              </div>
            </div>

            <button 
              onClick={toggleMenu} 
              className="lg:hidden absolute right-4 top-4"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1e293b] text-white">
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-full`}>
          <div className="container mx-auto">
            <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center px-4 py-2 lg:py-0">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <div className="w-full lg:w-auto px-4 py-3 text-base font-medium hover:bg-gray-700 transition-colors duration-200 text-left lg:text-center whitespace-nowrap flex items-center justify-between cursor-pointer">
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className="ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                        />
                      </div>
                      <ul className="lg:absolute lg:top-full lg:left-0 lg:bg-[#1e293b] lg:min-w-[200px] lg:shadow-lg
                                   lg:hidden group-hover:block
                                   lg:group-hover:animate-fadeIn
                                   border-t-0 lg:border-t lg:border-gray-700
                                   z-50">
                        {item.subItems?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.to}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 whitespace-nowrap transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    item.to && (
                      <Link
                        to={item.to}
                        className="block w-full lg:w-auto px-4 py-3 text-base font-medium hover:bg-gray-700 transition-colors duration-200 text-left lg:text-center whitespace-nowrap"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;