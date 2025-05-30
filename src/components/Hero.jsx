import React from "react";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import profileImage from "../assets/image2.jpg"; // Adjust the path to your image

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-8"></div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Mokabbir Miso
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-semibold mb-6 text-center lg:text-left">
              Full Stack Software Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Passionate about creating exceptional digital experiences through
              clean code, innovative solutions, and user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>

              <button
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/MokabbirMisho"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-mokabbir-miso/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="mailto:mokabbirmiso1992@gmail.com"
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-green-50"
              >
                <Mail size={24} className="text-green-600" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-300 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-400 rounded-3xl transform -rotate-3 scale-95 opacity-20"></div>
              <img
                src={profileImage}
                alt="Mokabbir Miso - Full Stack Developer"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-center aspect-square border-4 border-white"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-60 blur-lg"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
