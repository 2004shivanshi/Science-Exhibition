import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Star, Rocket, Beaker,Globe , Brain } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      title: "Collaborative Learning",
      description: "Encourage teamwork among inter-college students and mentors.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-50 to-purple-50"
    },
    {
      title: "Critical Thinking",
      description: "Promote analytical skills and problem-solving through experimentation.",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-50 to-blue-50"
    },
    {
      title: "Innovation",
      description: "Transform creative ideas into impactful solutions for real-world challenges.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-indigo-50 to-blue-50"
    },
    {
      title: "Hands-on Experience",
      description: "Provide practical exposure with advanced scientific equipment.",
      icon: <Beaker className="w-6 h-6" />,
      gradient: "from-cyan-50 to-blue-50"
    },
    {
      title: "Inclusive Platform",
      description: "A no-fee inter-college platform open to students from all years.",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Celebration of Science",
      description: "Recognize and celebrate contributions to the scientific community.",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-blue-50 to-yellow-50"
    }
  ];
  

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4 border border-blue-100">
            Our Mission
          </span>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Key Objectives
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white">
                    {objective.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-blue-600 text-sm">
                    {objective.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;