import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Name and Title */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl italic mb-2">Md Mokabbir Rahman Miso</h3>
            <p className="text-gray-400">Full Stack Software Developer</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/MokabbirMisho"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mokabbir-miso/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mokabbirmiso1992@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Credit Text */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Where ideas turn into clean, functional code.
            </p>
            <p className="text-gray-500 text-sm mt-1">© Mokabbir.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
