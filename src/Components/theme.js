import React from 'react';
import { Lightbulb, Atom, Globe } from 'lucide-react';

const themes = [
  {
    title: "Social Impact",
    description: "Create hardware solutions that solve important social problems. These can include devices to improve health, education, or help communities in need.",
    icon: <Atom className="w-6 h-6 text-blue-600" />,
    gradient: "from-blue-100 to-indigo-100",
    type: "Hardware"
  },
  {
    title: "Economic Impact",
    description: "Build hardware that supports industries, like machines for automation, tools for farming, or devices that make work faster and easier and mrore economical.",
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    gradient: "from-blue-100 to-purple-100",
    type: "Hardware"
  },
  {
    title: "Visual Physics Software",
    description: "Develop software that makes complex tasks easier, like apps for physics, data visualization, educational tools or bringing physics concepts to life.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    gradient: "from-blue-100 to-cyan-100",
    type: "Software"
  }
];

const Themes = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50" id="themes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4 border border-blue-100">
              Project Themes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Themes for Innovation
            </h2>
            <div className="max-w-2xl mx-auto px-4">
              <p className="text-lg sm:text-xl text-blue-600">
                Explore our key focus areas designed to inspire groundbreaking solutions and creative thinking
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Theme Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full
                  ${theme.type === 'Hardware' 
                    ? 'bg-blue-100 text-blue-600 border border-blue-200' 
                    : 'bg-cyan-100 text-cyan-600 border border-cyan-200'}`}>
                  {theme.type}
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }} />
              </div>
              
              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl shadow-sm transition-colors duration-300
                    ${theme.type === 'Hardware' 
                      ? 'bg-blue-50 group-hover:bg-blue-100' 
                      : 'bg-cyan-50 group-hover:bg-cyan-100'}`}>
                    {theme.icon}
                  </div>
                  <div className={`w-12 h-12 flex items-center justify-center text-2xl font-bold transition-colors duration-300 pt-6
                    ${theme.type === 'Hardware' 
                      ? 'text-blue-200 group-hover:text-blue-300' 
                      : 'text-cyan-200 group-hover:text-cyan-300'}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300
                  ${theme.type === 'Hardware' 
                    ? 'text-blue-900 group-hover:text-blue-600' 
                    : 'text-cyan-900 group-hover:text-cyan-600'}`}>
                  {theme.title}
                </h3>

                {/* Description */}
                <p className={`leading-relaxed
                  ${theme.type === 'Hardware' 
                    ? 'text-blue-600/80 group-hover:text-blue-600' 
                    : 'text-cyan-600/80 group-hover:text-cyan-600'}`}>
                  {theme.description}
                </p>

                {/* Bottom Decoration */}
                <div className={`absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${theme.type === 'Hardware' 
                    ? 'bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100' 
                    : 'bg-gradient-to-r from-cyan-100 via-cyan-400 to-cyan-100'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;