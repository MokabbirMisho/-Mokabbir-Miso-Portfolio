import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            Background
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic foundation in software
            development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  );
};

export default About;
