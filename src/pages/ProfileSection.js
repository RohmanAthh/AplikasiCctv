import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProfileSection() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <section id="profile" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white min-h-[60vh]">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-green-500">
        <h2 className="text-3xl font-extrabold mb-2 text-green-600">Profil Pengguna</h2>
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mb-2">
            {user.email[0].toUpperCase()}
          </div>
          <div className="text-lg font-semibold text-gray-800">{user.email}</div>
          <div className="text-sm text-gray-500">Tier: <span className="font-bold text-green-500">{user.tier || "Basic"}</span></div>
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-400 transition mb-8">Upgrade Tier</button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link to="/cart" className="flex flex-col items-center bg-blue-50 rounded-xl p-4 shadow hover:bg-green-50 transition">
            <span className="text-3xl mb-2">🛒</span>
            <span className="font-semibold text-green-700">Keranjang</span>
            <span className="text-xs text-gray-500 mt-1">Lihat produk yang Anda pilih</span>
          </Link>
          <Link to="/cctvinfo" className="flex flex-col items-center bg-blue-50 rounded-xl p-4 shadow hover:bg-green-50 transition">
            <span className="text-3xl mb-2">📹</span>
            <span className="font-semibold text-green-700">Info CCTV</span>
            <span className="text-xs text-gray-500 mt-1">Tips & promo seputar CCTV</span>
          </Link>
        </div>
      </div>
    </section>
  );
} 