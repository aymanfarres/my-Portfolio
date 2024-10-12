
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-white py-6 mt-[6rem] ">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-gray-400">Connect with me:</p>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/aymanhisuka/?ref=tw_i&hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:scale-95 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/aymanfarres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:scale-95 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aymane-farres-b049a631a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:scale-95 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="aymanefarres6@gmail.com"
            className="text-gray-400 hover:scale-95 hover:text-white transition-colors duration-200"
            aria-label="Gmail"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+212691997098"
            className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-200 hover:scale-95 " 
            aria-label="Phone Number"
          >
            <FaPhone size={24} />
          </a>
        </div>
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Aymane Farres. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
