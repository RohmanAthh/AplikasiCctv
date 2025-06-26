import React from "react";

const services = [
  { name: "Instalasi Profesional", desc: "Tim teknisi berpengalaman, instalasi rapi & cepat.", icon: "🛠️" },
  { name: "Maintenance & Support", desc: "Perawatan rutin, troubleshooting, dan support 24/7.", icon: "🔧" },
  { name: "Integrasi Cloud & Mobile", desc: "Akses CCTV dari HP, notifikasi real-time, cloud backup.", icon: "📱" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900">Layanan <span className="text-green-500">Kami</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-blue-50 rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{s.name}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 