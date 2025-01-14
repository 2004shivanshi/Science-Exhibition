'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, Atom, Pipette, Microscope } from "lucide-react";

const StepsForParticipation = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      title: "Registration",
      subtitle: "Step 1",
      icon: <FlaskConical className="w-6 h-6" />,
      details: [
        "Fill up participant details online.",
        "No registration fee required.",
        "Receive a confirmation email for selected projects."
      ]
    },
    {
      title: "Project Development",
      subtitle: "Step 2",
      icon: <Pipette className="w-6 h-6" />,
      details: [
        "Develop your project independently before the deadline.",
        "Ensure your project aligns with the provided guidelines.",
        "Prepare all necessary documentation and a presentation."
      ]
    },
    {
      title: "Exhibition",
      subtitle: "Step 3",
      icon: <Microscope className="w-6 h-6" />,
      details: [
        "The exhibition starts at 9 AM.",
        "Prizes will be awarded to selected projects.",
        "Certificates will be distributed to all participants."
      ]
    }
  ];
  

  return (
    <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 opacity-10"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <Atom className="w-32 h-32 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-10"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <Atom className="w-40 h-40 text-cyan-400" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Steps for Participation
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Follow these steps to participate in our prestigious science exhibition
          </p>
        </motion.div>

        {/* Steps Navigation */}
        <div className="relative mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index + 1)}
                className={`group flex flex-col items-center w-full sm:w-auto ${
                  index !== steps.length - 1 ? 'mb-8 sm:mb-0' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    transition-all duration-300 border-2
                    ${activeStep === index + 1 
                      ? 'bg-blue-500 border-blue-400 text-white' 
                      : 'bg-blue-800 border-blue-700 text-blue-200'}
                  `}
                  whileHover={{ scale: 1.1 }}
                >
                  {activeStep > index + 1 ? (
                    <CheckCircle2 className="w-8 h-8" />
                  ) : (
                    step.icon
                  )}
                </motion.div>
                <div className="mt-4 text-center">
                  <p className={`text-sm font-medium mb-1 ${
                    activeStep === index + 1 ? 'text-blue-400' : 'text-blue-300'
                  }`}>
                    {step.subtitle}
                  </p>
                  <h3 className={`text-lg font-semibold transition-colors ${
                    activeStep === index + 1 ? 'text-cyan-400' : 'text-blue-200'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Progress Line */}
          <div className="absolute top-8 left-0 w-full hidden sm:block">
            <div className="h-0.5 bg-blue-800 w-full" />
            <motion.div 
              className="h-0.5 bg-blue-400 absolute top-0 left-0"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Details */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {steps[activeStep - 1]?.details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-tl-2xl rounded-br-2xl p-6
                         border border-blue-700/50 hover:border-blue-500/50
                         hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3">
                <p className="text-blue-100 text-lg leading-relaxed">
                  {detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default StepsForParticipation;