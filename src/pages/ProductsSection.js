import React from "react";
import { useAuth } from "../context/AuthContext";

const products = [
  {
    name: "CCTV AI Pro 4K",
    desc: "Kamera CCTV dengan resolusi 4K, AI detection, night vision, tahan cuaca.",
    features: ["Resolusi 4K Ultra HD", "AI Human/Vehicle Detection", "Night Vision 40m", "IP67 Tahan Air"],
    category: "Premium",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: "Rp2.500.000"
  },
  {
    name: "CCTV Wireless Cloud",
    desc: "Tanpa kabel, mudah instalasi, cloud storage, bisa dipantau dari HP.",
    features: ["Wireless & Cloud Storage", "Akses Mobile App", "Audio 2 Arah", "Instalasi Mudah"],
    category: "Wireless",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    price: "Rp1.800.000"
  },
  {
    name: "Paket CCTV Rumah 4CH",
    desc: "4 kamera + DVR + instalasi, cocok untuk rumah dan kantor kecil.",
    features: ["4 Kamera 2MP", "DVR 4 Channel", "Gratis Instalasi", "Garansi 1 Tahun"],
    category: "Paket Rumah",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    price: "Rp4.500.000"
  },
  {
    name: "CCTV Mini Dome",
    desc: "Kamera dome kecil, cocok untuk indoor, desain minimalis.",
    features: ["Desain Compact", "Night Vision 20m", "Full HD 1080p", "Wide Angle"],
    category: "Indoor",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    price: "Rp950.000"
  },
  {
    name: "CCTV Outdoor Bullet",
    desc: "Kamera bullet tahan cuaca, cocok untuk area luar ruangan.",
    features: ["IP66 Tahan Cuaca", "Night Vision 30m", "Full HD 1080p", "Bracket Adjustable"],
    category: "Outdoor",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: "Rp1.200.000"
  },
  {
    name: "Paket CCTV Toko 8CH",
    desc: "8 kamera + DVR + instalasi, cocok untuk toko dan kantor menengah.",
    features: ["8 Kamera 2MP", "DVR 8 Channel", "Gratis Instalasi", "Garansi 2 Tahun"],
    category: "Paket Toko",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    price: "Rp8.900.000"
  },
  {
    name: "CCTV PTZ Zoom",
    desc: "Kamera PTZ dengan fitur zoom optik 20x, kontrol arah via aplikasi.",
    features: ["PTZ 20x Optical Zoom", "Auto Tracking", "Kontrol via App", "Night Vision 60m"],
    category: "PTZ",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    price: "Rp5.700.000"
  },
  {
    name: "CCTV Smart Indoor",
    desc: "Kamera smart indoor, bisa deteksi gerak & suara, rekam ke cloud.",
    features: ["Smart Motion & Sound Detection", "Cloud Recording", "Akses Mobile", "Audio 2 Arah"],
    category: "Smart Home",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: "Rp1.350.000"
  },
  {
    name: "CCTV Hidden Cam",
    desc: "Kamera tersembunyi, cocok untuk pengawasan rahasia.",
    features: ["Desain Mini", "Full HD 1080p", "Motion Detection", "Baterai Tahan 8 Jam"],
    category: "Hidden",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    price: "Rp1.100.000"
  },
];

export default function ProductsSection() {
  const { cart, setCart, user } = useAuth();

  const addToCart = (product) => {
    if (!user) {
      alert("Silakan login terlebih dahulu untuk menambah ke keranjang.");
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <section id="products" className="py-20 bg-blue-50">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900">Produk <span className="text-green-500">Unggulan</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="w-24 h-24 mb-4 object-cover rounded-lg" />
            <h3 className="text-xl font-bold mb-1 text-gray-900">{p.name}</h3>
            <div className="text-sm text-gray-500 mb-1">Kategori: <span className="font-semibold text-green-600">{p.category}</span></div>
            <p className="text-gray-600 mb-2 text-center">{p.desc}</p>
            <ul className="text-gray-700 text-sm mb-2 list-disc list-inside text-left w-full max-w-xs mx-auto">
              {p.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <div className="text-green-500 font-bold mb-2 text-lg">{p.price}</div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-400 transition"
              onClick={() => addToCart(p)}
            >
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 