import React from 'react';
import { partners } from '../config/partners';

const services = [
  { name: "Instalasi Profesional", desc: "Tim teknisi berpengalaman, instalasi rapi & cepat.", icon: "🛠️" },
  { name: "Maintenance & Support", desc: "Perawatan rutin, troubleshooting, dan support 24/7.", icon: "🔧" },
  { name: "Integrasi Cloud & Mobile", desc: "Akses CCTV dari HP, notifikasi real-time, cloud backup.", icon: "📱" },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900">Layanan <span className="text-green-500">Kami</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{s.name}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <div className="mt-32">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We collaborate with the world's leading technology companies to deliver exceptional solutions
        </p>

        {/* Partners Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 