// import React from 'react';
// import { Trophy, Award, Atom, Beaker, FlaskConical, Zap, Droplet, Binary } from 'lucide-react';

// const PrizeSection = () => {
//   const categories = [
//     {
//       name: "Social Impact",
//       icon: <Atom />,
//       particles: ["H", "Na", "Li"],
//       color: "blue"
//     },
//     {
//       name: "Economic Impact",
//       icon: <Binary />,
//       particles: ["01", "10", "11"],
//       color: "indigo"
//     },
//     {
//       name: "Environmental Impact",
//       icon: <FlaskConical />,
//       particles: ["O₂", "H₂O", "CO₂"],
//       color: "cyan"
//     }
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       {/* DNA Helix Background */}
//       <div className="absolute inset-0 opacity-5">
//         {[...Array(10)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-20 h-20 border-4 border-blue-600 rounded-full"
//             style={{
//               left: `${(i * 10)}%`,
//               top: `${Math.sin(i) * 20 + 50}%`,
//               transform: `scale(${Math.sin(i * 0.5) + 1.5})`,
//               opacity: 0.3
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Prize Pool Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center space-x-2 mb-6">
//             <div className="relative">
//               <div className="absolute inset-0 animate-ping">
//                 <Trophy className="w-8 h-8 text-yellow-500 opacity-30" />
//               </div>
//               <Trophy className="w-8 h-8 text-yellow-500 relative" />
//             </div>
//           </div>

//           <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
//             Prize Pool: ₹60,000
//           </h2>

//           <div className="flex justify-center gap-2 mb-6">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"
//                 style={{ animationDelay: `${i * 0.2}s` }}
//               />
//             ))}
//           </div>

//           <p className="text-slate-600 max-w-2xl mx-auto">
//             Discover groundbreaking innovations across three categories, each representing a crucial aspect of future development.
//           </p>
//         </div>

//         {/* Category Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {categories.map((category, idx) => (
//             <div
//               key={idx}
//               className="relative group"
//             >
//               {/* Floating Particles */}
//               {category.particles.map((particle, i) => (
//                 <div
//                   key={i}
//                   className="absolute text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-1000"
//                   style={{
//                     top: `${20 + i * 30}%`,
//                     left: `${10 + i * 30}%`,
//                     animation: `float ${3 + i}s infinite ease-in-out`,
//                     animationDelay: `${i * 0.5}s`
//                   }}
//                 >
//                   {particle}
//                 </div>
//               ))}

//               <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-${category.color}-100 group-hover:border-${category.color}-300`}>
//                 {/* Category Icon */}
//                 <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                   {category.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="mt-8 text-center">
//                   <h3 className={`text-2xl font-bold text-${category.color}-600 mb-4`}>
//                     {category.name}
//                   </h3>

//                   {/* Prize Positions */}
//                   <div className="space-y-4">
//                     {['Gold', 'Silver', 'Bronze'].map((position, i) => (
//                       <div key={i} className="relative overflow-hidden">
//                         <div className={`p-3 rounded-lg bg-${category.color}-50 group-hover:bg-${category.color}-100 transition-colors duration-300`}>
//                           <Award className={`w-6 h-6 text-${category.color}-500 mx-auto`} />
//                           <div className={`text-${category.color}-600 font-semibold mt-1`}>
//                             {position}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className={`absolute top-0 right-0 w-32 h-32 bg-${category.color}-100 rounded-full opacity-20 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
//                 <div className={`absolute bottom-0 left-0 w-32 h-32 bg-${category.color}-100 rounded-full opacity-20 -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500`} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Science Elements */}
//         <div className="flex justify-center mt-16 space-x-8">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
//               style={{ animationDelay: `${i * 0.3}s` }}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PrizeSection;

// import React from 'react';
// import { Trophy, Award, Atom, Beaker, Flask, Brain, ChartBar, Leaf } from 'lucide-react';

// const PrizeSection = () => {
//   const categories = [
//     {
//       name: "Social Impact",
//       icon: <Brain />,
//       description: "Innovations driving societal change and community welfare",
//       gradientClass: "from-rose-400 via-fuchsia-500 to-indigo-500"
//     },
//     {
//       name: "Economic Impact",
//       icon: <ChartBar />,
//       description: "Solutions revolutionizing financial landscapes",
//       gradientClass: "from-blue-400 via-cyan-500 to-teal-500"
//     },
//     {
//       name: "Environmental Impact",
//       icon: <Leaf />,
//       description: "Technologies preserving our planet's future",
//       gradientClass: "from-green-400 via-emerald-500 to-teal-500"
//     }
//   ];

//   return (
//     <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       {/* Animated Background Elements */}
//   <div className="absolute inset-0">
//     {[...Array(20)].map((_, i) => (
//       <div
//         key={i}
//         className="absolute w-2 h-2 rounded-full bg-blue-500 opacity-20 animate-pulse"
//         style={{
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           animationDelay: `${Math.random() * 2}s`,
//         }}
//       />
//     ))}
//   </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Prize Pool Showcase */}
//         <div className="relative mb-24">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-10 transform -rotate-1" />
//           <div className="relative bg-white rounded-3xl shadow-2xl p-12 overflow-hidden">
//             {/* Decorative Circuit Lines */}
//             <div className="absolute inset-0 opacity-5">
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute border border-gray-500"
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     left: `${i * 20}%`,
//                     top: '50%',
//                     borderRadius: '50%',
//                     transform: 'rotate(45deg)',
//                   }}
//                 />
//               ))}
//             </div>

//             <div className="text-center relative z-10">
//               <div className="inline-block">
//                 <div className="relative">
//                   <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-bounce" />
//                   <div className="absolute inset-0 bg-yellow-500 opacity-20 blur-xl" />
//                 </div>
//               </div>
//               <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
//                 ₹60,000
//               </h2>
//               <div className="text-2xl text-gray-600 font-medium">Total Prize Pool</div>
//               <div className="flex justify-center gap-3 mt-6">
//                 {[...Array(3)].map((_, i) => (
//                   <div 
//                     key={i}
//                     className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
//                     style={{ animationDelay: `${i * 0.2}s` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Category Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {categories.map((category, idx) => (
//             <div key={idx} className="group perspective-1000">
//               <div className="relative transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
//                 {/* Front Side */}
//                 <div className="bg-white rounded-2xl p-8 shadow-xl backface-hidden">
//                   <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradientClass} p-4 mb-6 text-white`}>
//                     {category.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h3>
//                   <p className="text-gray-600">{category.description}</p>
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 bg-white rounded-2xl p-8 shadow-xl backface-hidden rotate-y-180">
//                   <div className="space-y-6">
//                     {['Gold', 'Silver', 'Bronze'].map((position, i) => (
//                       <div key={i} className="flex items-center space-x-4">
//                         <Award className={`w-8 h-8 ${i === 0 ? 'text-yellow-500' : i === 1 ? 'text-gray-400' : 'text-orange-500'}`} />
//                         <span className="text-lg font-semibold text-gray-700">{position} Position</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Note */}
//         <div className="text-center">
//           <p className="text-gray-600">
//             Winners will be selected based on innovation, impact, and technical excellence
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PrizeSection;

import React from 'react';
import { Trophy, Award, Brain, ChartBar, Leaf, Beaker, Zap, FlaskConical, Microscope } from 'lucide-react';

const PrizeSection = () => {
    const categories = [
        {
            name: "Social Impact",
            icon: <Brain />,
            description: "Innovations driving societal change",
            gradientClass: "from-rose-400 via-fuchsia-500 to-indigo-500"
        },
        {
            name: "Economic Impact",
            icon: <ChartBar />,
            description: "Solutions revolutionizing Economic landscapes",
            gradientClass: "from-blue-400 via-cyan-500 to-teal-500"
        },
        {
            name: "Visual Physics Software",
            icon: <Leaf />,
            description: "Software Representation of Physics",
            gradientClass: "from-green-400 via-emerald-500 to-teal-500"
        }
    ];

    return (
        <section className="relative pb-24 pt-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-blue-500 opacity-20 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Prize Pool Showcase */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="relative mb-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 transform -rotate-1" />
                    <div className="relative bg-white rounded-3xl shadow-2xl p-12 overflow-hidden">
                        <div className="text-center relative z-10 flex flex-col items-center justify-center">
                            <div className="inline-flex items-center justify-center space-x-2 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 animate-ping">
                                        <Trophy className="w-10 h-10 text-yellow-500 opacity-30" />
                                    </div>
                                    <Trophy className="w-10 h-10 text-yellow-500 relative" />
                                </div>
                            </div>
                            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                                ₹60,000
                            </h2>
                            <div className="text-2xl text-gray-600 font-medium mb-8">Total Prize Pool</div>

                            {/* Prize Structure Overview */}
                            <div className="max-w-2xl mx-auto bg-blue-50 rounded-xl p-6">
                                <p className="text-blue-800 text-lg font-medium">
                                    Three winners will be selected from each category:
                                </p>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div className="flex flex-col items-center">
                                        <Award className="w-8 h-8 text-yellow-500 mb-2" />
                                        <span className="text-gray-700 font-semibold">1st Prize</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Award className="w-8 h-8 text-gray-400 mb-2" />
                                        <span className="text-gray-700 font-semibold">2nd Prize</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Award className="w-8 h-8 text-orange-500 mb-2" />
                                        <span className="text-gray-700 font-semibold">3rd Prize</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-1xl md:text-1xl font-bold mt-6">
                                    All participants will receive certificates. Winners will be selected based on innovation, impact, and technical excellence.
                                </p>
                            </div>
                            <div className="mt-8 flex space-x-4">
                                <Beaker className="w-8 h-8 text-blue-400 animate-bounce" />
                                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                                <FlaskConical className="w-8 h-8 text-green-400 animate-bounce" />
                                <Microscope className="w-8 h-8 text-purple-400 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {categories.map((category, idx) => (
                        <div key={idx} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                {/* Category Header */}
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradientClass} p-4 mb-6 text-white`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h3>
                                <p className="text-gray-600 mb-6">{category.description}</p>

                                {/* Prize Positions */}
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg">
                                        <Award className="w-6 h-6 text-yellow-500" />
                                        <span className="text-gray-700 font-medium">First Position</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                                        <Award className="w-6 h-6 text-gray-400" />
                                        <span className="text-gray-700 font-medium">Second Position</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-orange-50 p-3 rounded-lg">
                                        <Award className="w-6 h-6 text-orange-500" />
                                        <span className="text-gray-700 font-medium">Third Position</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                {/* <div className="text-center">
                    <p className="text-gray-600">
                        All participants will receive certificates. Winners will be selected based on innovation, impact, and technical excellence.
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default PrizeSection;