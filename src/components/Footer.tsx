import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-8 md:px-16 bg-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/logo.svg" 
              alt="Coach Sérénité Logo" 
              className="w-16 h-16"
            />
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Instagram size={20} className="mr-2" />
              <p className="text-sm">coachserenite</p>
            </div>
            
            <div className="flex items-center">
              <Mail size={20} className="mr-2" />
              <p className="text-sm">alisoncoachserenite@gmail.com</p>
            </div>
            
            <div className="flex items-center">
              <Phone size={20} className="mr-2" />
              <p className="text-sm">07 81 05 55 48</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">© 2025 Coach Sérénité. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;