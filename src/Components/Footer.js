import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-950 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Institute Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">IPS Academy IES</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-10 h-10 mr-2 text-blue-400" />
                AB Rd, Rajendra Nagar,Bijalpur, 
                Indore,Madhya Pradesh 452012
              </p>
              {/* <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                www.ipsacademy.org
              </p> */}
              <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                March 1, 2025: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Technical Support */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Technical Support</h3>
            <div className="space-y-3">
              <p className="text-lg font-medium text-blue-400">Shivanshi Gupta</p>
              {/* <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                +91 9131715108
              </p> */}
              {/* <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                tech.support@ips.edu
              </p> */}
            </div>
          </div>

          {/* Event Queries */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Student Co-ordinator</h3>
            <div className="space-y-3">
              <p className="text-lg font-medium text-blue-400">Umang Sharma</p>
              {/* <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                +91 8602083290
              </p> */}
              <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                sciencexhibition2025@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/#about' },
                { name: 'Registration', path: '/signup' },
                { name: 'Schedule', path: '/#schedule' },
                { name: 'Guidelines', path: '/guidelines' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 text-blue-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} IPS Academy IES. All Rights Reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Science Exhibition Team</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
    </footer>
  );
};

export default Footer;