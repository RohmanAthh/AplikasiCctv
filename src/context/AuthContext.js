import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUserState] = useState(null);
  const [cart, setCart] = useState([]);

  // Simpan user ke localStorage setiap kali berubah
  useEffect(() => {
    if (user) {
      localStorage.setItem("cctv_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("cctv_user");
    }
  }, [user]);

  // Ambil user dari localStorage saat pertama kali load
  useEffect(() => {
    const saved = localStorage.getItem("cctv_user");
    if (saved) setUserState(JSON.parse(saved));
  }, []);

  // Setter agar tetap sinkron dengan localStorage
  const setUser = (u) => setUserState(u);

  return (
    <AuthContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 