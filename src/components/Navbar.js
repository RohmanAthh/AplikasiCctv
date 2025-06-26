import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, cart } = useAuth();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl font-extrabold tracking-widest text-green-500">CCTVSTORE</div>
        <div className="hidden md:flex space-x-8 font-semibold items-center">
          <HashLink smooth to="/#home" className="hover:text-green-500 transition">Home</HashLink>
          <HashLink smooth to="/#about" className="hover:text-green-500 transition">About</HashLink>
          <HashLink smooth to="/#products" className="hover:text-green-500 transition">Products</HashLink>
          <HashLink smooth to="/#services" className="hover:text-green-500 transition">Services</HashLink>
          <HashLink smooth to="/#testimonials" className="hover:text-green-500 transition">Testimonials</HashLink>
          <HashLink smooth to="/#contact" className="hover:text-green-500 transition">Contact</HashLink>
          {user ? (
            <Link to="/profile" className="font-bold text-green-600 hover:underline">{user.email}</Link>
          ) : (
            <Link to="/login" className="hover:text-green-500 transition">Login</Link>
          )}
        </div>
        <button className="md:hidden text-green-500" onClick={() => setOpen(!open)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white text-gray-800">
          <HashLink smooth to="/#home" onClick={() => setOpen(false)} className="hover:text-green-500 transition">Home</HashLink>
          <HashLink smooth to="/#about" onClick={() => setOpen(false)} className="hover:text-green-500 transition">About</HashLink>
          <HashLink smooth to="/#products" onClick={() => setOpen(false)} className="hover:text-green-500 transition">Products</HashLink>
          <HashLink smooth to="/#services" onClick={() => setOpen(false)} className="hover:text-green-500 transition">Services</HashLink>
          <HashLink smooth to="/#testimonials" onClick={() => setOpen(false)} className="hover:text-green-500 transition">Testimonials</HashLink>
          <HashLink smooth to="/#contact" onClick={() => setOpen(false)} className="hover:text-green-500 transition">Contact</HashLink>
          {user ? (
            <Link to="/profile" className="font-bold text-green-600 hover:underline">{user.email}</Link>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)} className="hover:text-green-500 transition">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}