import React from "react";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white pt-24 pb-12">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
          CCTV Masa Depan, <span className="text-green-500">Keamanan Tanpa Batas</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700">
          Pantau properti Anda 24/7 dengan teknologi AI, cloud, dan akses mobile. Solusi CCTV modern untuk rumah & bisnis.
        </p>
        <a href="#products" className="px-8 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-400 transition">Lihat Produk</a>
      </div>
      {/* Fitur */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-500 mb-2">AI Detection</h3>
          <p className="text-gray-700">Deteksi gerakan & wajah otomatis, notifikasi real-time ke HP Anda.</p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-500 mb-2">Cloud Storage</h3>
          <p className="text-gray-700">Rekaman tersimpan aman di cloud, bisa diakses kapan saja.</p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-500 mb-2">Support 24/7</h3>
          <p className="text-gray-700">Tim kami siap membantu Anda kapan saja, di mana saja.</p>
        </div>
      </div>
    </section>
  );
} 