import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Atom, Dna, Edit, Mail, Gift } from 'lucide-react';

const ScienceTimeline = () => {
  const events = [
    {
      title: 'Registration Open',
      date: 'till 15th Feb, 2025',
      icon: <Edit className="w-6 h-6" />,
      description: 'Register your team and project proposal to join the scientific journey.',
      color: 'bg-blue-500'
    },
    {
      title: 'Selection Announcement',
      date: '25th Feb, 2025',
      icon: <Mail className="w-6 h-6" />,
      description: 'Selected students will receive confirmation via email.',
      color: 'bg-green-500'
    },
    {
      title: 'Exhibition Day',
      date: ['1st March, 2025', 'Reporting time: 9:30 AM', 'Exhibition starts at 10 AM'],
      icon: <Calendar className="w-6 h-6" />,
      description: 'Showcase your project and witness groundbreaking innovations.',
      color: 'bg-purple-500'
    },
    {
      title: 'Prize and Certificates',
      date: 'After 4 PM, 1st March 2025',
      icon: <Gift className="w-6 h-6" />,
      description: 'Celebrate your achievements with prizes and certificates.',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950 to-[#294dc6] text-white overflow-hidden" id="schedule">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Atom className="w-64 h-64 absolute -top-20 -left-20" />
          <Dna className="w-64 h-64 absolute -bottom-20 -right-20" />
        </div>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-3 rounded-full bg-white/5 mb-4">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
            Scientific Journey Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on a chronological adventure through our exhibition milestones
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 w-1 h-full bg-white/10"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Events */}
          {events.map((event, index) => (
            <div key={index} className="relative md:mb-24">
              <motion.div
                className="flex flex-col md:flex-row items-start group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 transform -translate-x-1.5 md:-translate-x-1.5 mt-6">
                  <motion.div 
                    className="w-full h-full bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  />
                </div>

                {/* Content Box */}
                <div className={`
                  w-full md:w-5/12 
                  ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}
                  pl-8 md:pl-0
                  mb-8 md:mb-0
                `}>
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10
                             hover:bg-white/10 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-4`}>
                      <div className={`p-3 rounded-full ${index % 2 === 0 ? 'md:ml-4' : 'mr-4'} ${event.color}`}>
                        {event.icon}
                      </div>
                      <div>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                        {Array.isArray(event.date) ? (
                          <div className="text-sm text-gray-400 mt-1">
                            {event.date.map((line, i) => (
                              <p key={i} className="mt-0.5">{line}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Icon */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Atom className="w-12 h-12 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScienceTimeline;