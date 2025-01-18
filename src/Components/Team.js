import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import t1 from "./images/team.jpg";
import t2 from "./images/team2.jpg";
import t3 from "./images/team3.jpg";
const members = [
  {
    name: "Umang Sharma",
    role: "Student Co-ordinator",
    linkedIn: "https://www.linkedin.com/in/umang-sharma-323a12347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: t1
  },
  {
    name: "Shivanshi Gupta",
    role: "Student Co-ordinator",
    linkedIn: "https://www.linkedin.com/in/shivanshi-gupta-frontend-developer/",
    image: t2
  },
  {
    name: " Shishir Shrivastava",
    role: "",
   
    image: t3
  },
];

const MemberCard = ({ member }) => (
  <div className="bg-white/80 shadow-lg rounded-2xl p-5 transition-all duration-400 ease-in-out hover:translate-y-[-5px] hover:bg-white hover:shadow-xl border border-blue-100">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-70 md:h-60 object-cover rounded-xl mb-5 transition-transform duration-400 ease-in-out hover:scale-[1.03]"
    />
    <h4 className="text-xl font-semibold text-blue-800 mb-2">{member.name}</h4>
    <p className="text-base text-blue-600 font-medium mb-4">{member.role}</p>
    <div className="flex gap-4 pt-3 border-t border-blue-100">
      {member.linkedIn != '#' && (
        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm font-medium transition-all duration-300 ease-in-out py-1.5 px-3 rounded-full bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
          <FaLinkedinIn className="inline-block" />
        </a>
      )}
    </div>
  </div>
);

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-10 py-30 text-left relative">
        <div className="max-w-[1400px] mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Organizing Members
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-800 mb-8 max-w-3xl">
            Meet our Organizing Committee organizing the Science Exhibition
          </h2>
        </div>

        <div className="space-y-20">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
              {members.map((head) => (
                <MemberCard key={head.name} member={head} />
              ))}
            </div>
            
            <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-blue-100 mt-12 mb-12">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Need Help?
              </h3>
              <p className="text-lg text-blue-600 mb-6">
                For any queries regarding the Science Exhibition, please feel free to contact our student coordinators through LinkedIn.
              </p>
              <div className="flex flex-wrap gap-4">
                {members.map((member) => (
                  member.linkedIn !== '#' && (
                    <a 
                      key={member.name}
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full transition-all duration-300 ease-in-out"
                    >
                      <FaLinkedinIn className="text-lg" />
                      <span className="font-medium">Contact {member.name}</span>
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;