import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-600 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm tracking-widest">
        <div className="mb-2 font-bold text-green-500">CCTVSTORE — Solusi Keamanan Modern</div>
        <div>&copy; {new Date().getFullYear()} CCTVSTORE. All rights reserved.</div>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="mailto:info@futureweb.com" className="hover:text-cyan-300">info@futureweb.com</a>
          <span>|</span>
          <a href="tel:+628123456789" className="hover:text-cyan-300">+62 812-3456-789</a>
        </div>
      </div>
    </footer>
  );
}