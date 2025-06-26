import React from 'react';

const testimonials = [
  { name: "PT. Telkom Indonesia", text: "Sistem CCTV dari CCTVStore sangat handal dan mudah diakses.", logo: "/logo192.png" },
  { name: "Bank Mandiri", text: "Instalasi cepat, support responsif, kualitas gambar sangat jernih.", logo: "/logo192.png" },
  { name: "Astra International", text: "Integrasi cloud dan mobile sangat membantu monitoring cabang.", logo: "/logo192.png" },
];

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900">Testimoni <span className="text-green-500">Brand Ternama</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
            <img src={t.logo} alt={t.name} className="w-16 h-16 mb-4 rounded-full shadow" />
            <div className="text-lg font-bold mb-2 text-gray-900">{t.name}</div>
            <p className="text-gray-700 italic text-center mb-2">"{t.text}"</p>
            <div className="flex space-x-1 mt-2">
              {[...Array(5)].map((_, idx) => (
                <span key={idx} className="text-green-500 text-lg">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 