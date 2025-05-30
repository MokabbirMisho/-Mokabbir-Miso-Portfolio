import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "../data/data";

const Education = () => {
  return (
    <div className="space-y-6">
      {/* Education Section */}
      <div>
        <div className="flex items-center mb-8">
          <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-2xl mr-4">
            <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Education
          </h3>
        </div>

        {education.map((edu, index) => (
          <div
            key={edu.degree}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 mb-6"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h4>
            <h5 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
              {edu.school}
            </h5>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                {edu.duration} • {edu.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
