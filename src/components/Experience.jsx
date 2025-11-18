import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl mr-4">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          Experience
        </h3>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-indigo-300 dark:from-blue-600 dark:to-indigo-600"></div>

        {experiences.map((exp, index) => (
          <div
            key={`${exp.title}-${index}`}
            className="relative flex items-start mb-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

            <div className="ml-12 w-full">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </h5>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
