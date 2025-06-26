import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 text-center">Tentang <span className="text-green-500">CCTVSTORE</span></h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        CCTVSTORE adalah penyedia solusi keamanan terdepan di Indonesia. Kami menghadirkan produk dan layanan CCTV modern dengan teknologi AI, cloud, dan mobile access. Dengan pengalaman lebih dari 10 tahun, kami dipercaya ribuan pelanggan dari rumah tangga, bisnis, hingga perusahaan besar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-50 rounded-xl p-8 shadow">
          <h3 className="font-bold text-green-500 mb-2">10+ Tahun Pengalaman</h3>
          <p>Ribuan proyek CCTV sukses di seluruh Indonesia.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-8 shadow">
          <h3 className="font-bold text-green-500 mb-2">Teknologi Terkini</h3>
          <p>AI, cloud, dan perangkat berkualitas internasional.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-8 shadow">
          <h3 className="font-bold text-green-500 mb-2">Garansi & Support</h3>
          <p>Garansi resmi, layanan purna jual, dan support 24 jam.</p>
        </div>
      </div>
    </section>
  );
} 