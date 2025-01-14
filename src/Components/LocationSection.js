import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  const coordinates = {
    lat: 22.65548738901509,
    lng: 75.82509144387154
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Our Location
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us to experience the science exhibition in person
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-blue-700">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-gray-700">
                    <p>AB Rd, Rajendra Nagar,</p>
                    <p>Bijalpur, Indore,</p>
                    <p>Madhya Pradesh 452012</p>
                  </div>
                </div>
                

                {/* Get Directions Button */}
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors gap-2 mt-4"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                Exhibition: March 1, 2025
              </p>
              <p className="text-sm text-gray-700 mt-1">10:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Map Container */}
          <div className="md:col-span-2">
            <div className="h-[400px] rounded-lg overflow-hidden border border-blue-100 hover:border-blue-200 transition-colors shadow-md hover:shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM5JzE5LjgiTiA3NcKwNDknMzAuMyJF!5e0!3m2!1sen!2sin!4v1673947593027!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;