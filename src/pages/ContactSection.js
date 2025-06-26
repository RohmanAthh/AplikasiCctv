import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gray-900">Hubungi <span className="text-green-500">Kami</span></h2>
      <p className="text-center text-gray-600 mb-8">
        Konsultasi gratis, tanya harga, atau butuh bantuan? Isi form di bawah atau hubungi kami langsung.
      </p>
      <form className="flex flex-col gap-4 bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto">
        <input type="text" placeholder="Nama" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
        <input type="email" placeholder="Email" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
        <textarea placeholder="Pesan" className="p-3 border rounded min-h-[100px] focus:outline-none focus:ring-2 focus:ring-green-500" />
        <button type="submit" className="bg-green-500 text-white py-2 rounded font-bold hover:bg-green-400 transition">Kirim</button>
      </form>
      <div className="mt-8 text-center text-gray-500">
        <div>Email: <a href="mailto:info@cctvstore.com" className="text-green-500 hover:underline">info@cctvstore.com</a></div>
        <div>Telepon: <a href="tel:+628123456789" className="text-green-500 hover:underline">+62 812-3456-789</a></div>
      </div>
    </section>
  );
} 