import { Shield, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-red-600 mr-2" />
            <span className="font-bold">CyberGuard</span>
          </div>
          
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} CyberGuard Team. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <GitHub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;