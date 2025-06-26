import React from "react";

const testimonials = [
  {
    name: "Pertamina",
    text: "Sistem CCTV dari CCTVStore sangat handal dan mudah diakses.",
    logo: "https://logo.clearbit.com/pertamina.com"
  },
  {
    name: "PLN",
    text: "Instalasi cepat, support responsif, kualitas gambar sangat jernih.",
    logo: "https://logo.clearbit.com/pln.co.id"
  },
  {
    name: "Pos Indonesia",
    text: "Integrasi cloud dan mobile sangat membantu monitoring cabang.",
    logo: "https://logo.clearbit.com/posindonesia.co.id"
  },
  {
    name: "WIKA",
    text: "Kualitas produk dan layanan CCTVStore sangat memuaskan.",
    logo: "https://logo.clearbit.com/wika.co.id"
  },
  {
    name: "Bank Jateng",
    text: "Sistem keamanan kantor kami jadi lebih terjamin.",
    logo: "https://logo.clearbit.com/bankjateng.co.id"
  },
  {
    name: "Semen Tiga Roda",
    text: "Monitoring area pabrik jadi lebih mudah dan aman.",
    logo: "https://logo.clearbit.com/indocement.co.id"
  },
  {
    name: "Wuling Motors",
    text: "Support teknis CCTVStore sangat responsif dan profesional.",
    logo: "https://logo.clearbit.com/wuling.id"
  },
  {
    name: "JNE Express",
    text: "Pengiriman dan instalasi sangat cepat, recommended!",
    logo: "https://logo.clearbit.com/jne.co.id"
  },
  {
    name: "Kopi Kenangan",
    text: "Sistem CCTVStore sangat membantu operasional harian kami.",
    logo: "https://img.logo.dev/kopikenangan.com?token=pk_GsuGzRiGRza5QbAaBoqAKg"
  },
  {
    name: "Ajinomoto",
    text: "Kualitas gambar CCTVStore sangat jernih dan detail.",
    logo: "https://logo.clearbit.com/ajinomoto.co.id"
  },
  {
    name: "Pos Indonesia",
    text: "Keamanan outlet-outlet kami kini lebih terjaga.",
    logo: "https://img.logo.dev/posindonesia.co.id?token=pk_GsuGzRiGRza5QbAaBoqAKg"
  },
  {
    name: "Garuda Indonesia",
    text: "Sistem monitoring sangat mudah digunakan.",
    logo: "https://logo.clearbit.com/garuda-indonesia.com"
  },
  {
    name: "Fossil",
    text: "Instalasi rapi dan pelayanan ramah.",
    logo: "https://img.logo.dev/fossil.com?token=pk_GsuGzRiGRza5QbAaBoqAKg"
  },
  {
    name: "Makita",
    text: "Produk CCTVStore sangat awet dan tahan lama.",
    logo: "https://logo.clearbit.com/makita.co.jp"
  },
  {
    name: "Superindo",
    text: "Sangat puas dengan layanan purna jual CCTVStore.",
    logo: "https://img.logo.dev/superindo.co.id?token=pk_GsuGzRiGRza5QbAaBoqAKg"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50 min-h-[60vh]">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gray-900">Testimoni <span className="text-green-500">Brand Ternama</span></h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Banyak perusahaan besar telah mempercayakan keamanan mereka pada CCTVSTORE. Berikut adalah pengalaman mereka menggunakan layanan kami.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
            <img
              src={t.logo}
              alt={t.name}
              className="w-16 h-16 mb-4 rounded-full object-contain bg-white border"
              onError={e => { e.target.onerror = null; e.target.src = '/logo192.png'; }}
            />
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
    </section>
  );
} 