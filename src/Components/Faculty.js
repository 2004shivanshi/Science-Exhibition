import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// Import faculty images
import f1 from "./images/faculty/f1.jpg";
import f2 from "./images/faculty/f2.jpg";
import f3 from "./images/faculty/f3.jpg";
const heads = [
  {
    name: "Dr. Sanjay Jain",
    role: "Associate Professor IPS Academy, IES Indore",
    image: f1
  },
  {
    name: "Dr. Kavita Soni",
    role: " Assistant Faculty, IPS Academy",
    image: f3
  },
  {
    name: "Mrs. vaishali Ghune",
    role: "Assistant Faculty, IPS Academy",
    image: f2
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
  </div>
);

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-10 py-30 text-left relative">
        <div className="max-w-[1400px] mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Faculty Co-Ordinator
          </h1>
        </div>

        <div className="space-y-20">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
              {heads.map((head) => (
                <MemberCard key={head.name} member={head} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;