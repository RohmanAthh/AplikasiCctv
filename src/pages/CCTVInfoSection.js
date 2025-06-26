import React from "react";
import { Link } from "react-router-dom";

export default function CCTVInfoSection() {
  return (
    <section id="cctvinfo" className="py-20 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center text-gray-700 bg-white rounded-xl shadow p-8">
        <Link to="/profile" className="inline-block mb-6 text-green-600 hover:underline font-semibold">&larr; Kembali ke Profil</Link>
        <h2 className="text-3xl font-bold mb-4 text-center">Informasi & Tips CCTV</h2>
        <ul className="list-disc list-inside">
          <li>Pastikan posisi kamera tidak terhalang objek.</li>
          <li>Gunakan password kuat untuk akses cloud CCTV Anda.</li>
          <li>Rutin cek rekaman dan update firmware perangkat.</li>
        </ul>
        <div className="mt-6 bg-green-50 rounded-xl p-6 shadow text-green-700 font-semibold">
          Promo: Upgrade ke Tier Premium, dapatkan cloud storage 1 tahun gratis!
        </div>
      </div>
    </section>
  );
} 