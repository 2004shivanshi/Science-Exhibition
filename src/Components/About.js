import React from 'react';
import { Beaker, Users, Brain, Rocket, FlaskConical , Microscope } from 'lucide-react';
import quote from "./images/quote.jpg";

const About = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-950 to-[#294dc6]" id='about'>
      <div className="max-w-8xl mx-auto px-10 sm:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Image Section */}
          <div className="w-full lg:w-1/2 relative group">
          <div className="relative" style={{ aspectRatio: '550 / 396' }}>
            <div className="absolute inset-0 bg-white/10 rounded-2xl transform -rotate-3 scale-[1.03] transition-transform group-hover:-rotate-2" />
            <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-2 scale-[1.03] transition-transform group-hover:rotate-1" />
            <img
              src={quote}
              alt="Science Exhibition"
              className="relative w-full h-full rounded-2xl shadow-2xl transform transition-transform group-hover:scale-[1.02] duration-500 object-contain"
            />
          </div>
            
            <div className="hidden sm:block absolute -top-6 -left-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-lg">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-lg">
              <Microscope className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-white rounded-full"></div>
                <span className="text-white font-medium uppercase tracking-wider text-sm sm:text-base">Discover & Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                About the IPS <span className="text-yellow-400">Inter-College</span> Science Exhibition
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Experience the spirit of innovation and collaboration in our no-fee inter-college Science Exhibition. 
                <span className="text-green-400 font-semibold">Open to students from all years</span>, this platform celebrates creativity and exploration in the scientific domain.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-4 sm:p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <a href='/register' className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5">
                Register for the Exhibition
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    title: "Our Visiom",
    description: "Our vision for this science exhibition is to inspire innovative solutions to overcome the challenges in science and engineering, fostering a community of curious minds, creative thinkers, and problem-solvers who will shape the future of scientific discovery and technological advancement"
  },
  {
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    title: "Our Mission",
    description: "To inspire curiosity, creativity, and critical thinking in students, educators, and the community through interactive and immersive science experiences."
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    title: "Team Participation",
    description: "Join with your classmates or represent your college solo to bring innovative ideas to life."
  },
  {
    icon: <Beaker className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    title: "Free Registration",
    description: "No registration fee required—participate and showcase your talent without any barriers."
  }
];

export default About;