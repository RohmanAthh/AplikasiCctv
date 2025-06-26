import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import ProductsSection from "./pages/ProductsSection";
import ServicesSection from "./pages/ServicesSection";
import ContactSection from "./pages/ContactSection";
import LoginSection from "./pages/LoginSection";
import TestimonialsSection from "./pages/TestimonialsSection";
import ProfileSection from "./pages/ProfileSection";
import CartSection from "./pages/CartSection";
import CCTVInfoSection from "./pages/CCTVInfoSection";

function MainPage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/cctvinfo" element={<CCTVInfoSection />} />
        <Route path="/login" element={<LoginSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
