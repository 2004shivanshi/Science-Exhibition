import React from 'react';
import p1 from "./images/gallery/1.jpg";
import p2 from "./images/gallery/2.jpg";
import p3 from "./images/gallery/3.jpg";
import p4 from "./images/gallery/4.jpg";
import p5 from "./images/gallery/5.jpg";
import p6 from "./images/gallery/6.jpg";
import p7 from "./images/gallery/7.jpg";
import p8 from "./images/gallery/8.jpg";
import p9 from "./images/gallery/9.jpg";
import p10 from "./images/gallery/10.jpg";
import p11 from "./images/gallery/11.jpg";
const Gallery = () => {
  // Sample image data with different sizes
  const images = [
    {
      id: 1,
      url: p3,
      size: "1600x1200",
      featured: true
    },
    {
      id: 2,
      url: p9,
      size: "900x1600",
    },
    {
      id: 3,
      url: p10,
      size: "900x1600",
    },
    {
      id: 4,
      url: p11,
      size: "900x1600",
    },
    {
      id: 5,
      url: p5,
      size: "720x1280",
    },
    {
      id: 6,
      url: p6,
      size: "720x1280",
    },
    {
      id: 7,
      url: p7,
      size: "720x1280",
    },
    {
      id: 8,
      url: p8,
      size: "720x1280",
    },
    {
      id: 9,
      url: p4,
      size: "720x1280",
    },
    {
      id: 10,
      url: p1,
      size: "960x1280",
    },
    {
      id: 11,
      url: p2,
      size: "960x1280",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Past Years Events
          </h1>
          
          <div className="mb-12">
            <p className="text-lg text-blue-700">
              Relive the moments of innovation and discovery from our previous science exhibitions.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            {images.filter(img => img.featured).map(img => (
              <div key={img.id} className="w-full lg:w-3/4 mx-auto">
                <div className="bg-white/80 rounded-2xl p-4 shadow-lg transition-all duration-400 hover:shadow-xl border border-blue-100">
                  <img
                    src={img.url}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-400 hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.filter(img => !img.featured).map(img => (
              <div
                key={img.id}
                className="bg-white/80 rounded-2xl p-4 shadow-lg transition-all duration-400 hover:shadow-xl border border-blue-100"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={img.url}
                    className="w-full h-auto object-cover transition-transform duration-400 hover:scale-[1.02]"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm">{img.alt}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default Gallery;