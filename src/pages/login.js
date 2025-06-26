import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [error, setError] = useState("");
  const [regError, setRegError] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    }
  };

  // Register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegError("");
    try {
      await createUserWithEmailAndPassword(auth, regEmail, regPassword);
      setShowRegister(false);
      setEmail(regEmail);
      setPassword(regPassword);
      setRegEmail("");
      setRegPassword("");
      setError("Akun berhasil dibuat, silakan login.");
    } catch (err) {
      setRegError(err.message);
    }
  };

  return (
    <section id="login" className="py-20 bg-white flex justify-center">
      <div className="w-full max-w-sm bg-blue-50 shadow-2xl rounded-2xl px-8 py-8 border-t-4 border-green-500">
        {!showRegister ? (
          <>
            <h2 className="text-2xl font-extrabold mb-2 text-center text-gray-900">Login Admin</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button type="submit" className="bg-green-500 text-white py-2 rounded font-bold hover:bg-green-400 transition">Login</button>
              {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            </form>
            <div className="text-center mt-4">
              <button
                className="text-green-600 hover:underline font-semibold"
                onClick={() => setShowRegister(true)}
              >
                Belum punya akun? Daftar di sini
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold mb-2 text-center text-gray-900">Daftar Akun</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                value={regEmail}
                onChange={e => setRegEmail(e.target.value)}
                required
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="Password (min. 6 karakter)"
                value={regPassword}
                onChange={e => setRegPassword(e.target.value)}
                required
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button type="submit" className="bg-green-500 text-white py-2 rounded font-bold hover:bg-green-400 transition">Daftar</button>
              {regError && <p className="text-red-600 text-sm text-center">{regError}</p>}
            </form>
            <div className="text-center mt-4">
              <button
                className="text-green-600 hover:underline font-semibold"
                onClick={() => setShowRegister(false)}
              >
                Sudah punya akun? Login di sini
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
} 