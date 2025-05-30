import React from "react";
import { skillCategories } from "../data/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-slate-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications
            across the full stack
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`group bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 relative`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`text-white mb-6 flex justify-center p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-gray-700 transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-white hover:shadow-md transition-all duration-200 border border-gray-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
