import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function CartSection() {
  const { cart } = useAuth();
  if (!cart.length) return (
    <section id="cart" className="py-20 bg-blue-50 min-h-[60vh]">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 text-center">
        <Link to="/profile" className="inline-block mb-6 text-green-600 hover:underline font-semibold">&larr; Kembali ke Profil</Link>
        <h2 className="text-3xl font-bold mb-4">Keranjang Pembelian</h2>
        <div className="text-gray-500">Keranjang Anda kosong.</div>
      </div>
    </section>
  );
  return (
    <section id="cart" className="py-20 bg-blue-50 min-h-[60vh]">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        <Link to="/profile" className="inline-block mb-6 text-green-600 hover:underline font-semibold">&larr; Kembali ke Profil</Link>
        <h2 className="text-3xl font-bold mb-4 text-center">Keranjang Pembelian</h2>
        {cart.map((item, i) => (
          <div key={i} className="flex justify-between border-b py-2">
            <span>{item.name}</span>
            <span className="font-bold text-green-500">{item.price}</span>
          </div>
        ))}
        <div className="text-right mt-4 font-bold">
          Total: <span className="text-green-500">
            Rp{cart.reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, '')), 0).toLocaleString()}
          </span>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition">Checkout</button>
      </div>
    </section>
  );
} 