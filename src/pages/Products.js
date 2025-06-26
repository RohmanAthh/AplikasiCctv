import React from "react";

const products = [
  { name: "CCTV AI Pro", desc: "Kamera 4K, AI detection, night vision, tahan cuaca.", img: "/logo192.png", price: "Rp2.500.000" },
  { name: "CCTV Wireless", desc: "Tanpa kabel, mudah instalasi, cloud storage.", img: "/logo192.png", price: "Rp1.800.000" },
  { name: "Paket CCTV Rumah", desc: "4 kamera + DVR + instalasi, cocok untuk rumah.", img: "/logo192.png", price: "Rp4.500.000" },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900">Produk <span className="text-green-500">Unggulan</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">{p.name}</h3>
            <p className="text-gray-600 mb-2">{p.desc}</p>
            <div className="text-green-500 font-bold mb-2">{p.price}</div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-400 transition">Beli Sekarang</button>
          </div>
        ))}
      </div>
    </div>
  );
}