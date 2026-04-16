/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import makhanad from "./assets/makhnahd.jpg";
import logo from "./assets/main-logo.jpeg";

import {
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Heart,
  Star,
  Menu,
  X,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const SevaarthLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "8287489371";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Sevaarth, I'd like to order Premium Phool Makhana!`;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low Calorie",
      desc: "Perfect for weight-conscious snacking",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Gluten-Free",
      desc: "Safe for those with gluten sensitivities",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Rich in Protein",
      desc: "Essential building blocks for your body",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "High Fibre",
      desc: "Promotes healthy digestion and satiety",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-dark-green selection:bg-brand-green selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-green/20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="relative z-10 w-30 h-auto max-w-md mx-auto drop-shadow"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
            <a
              href="#benefits"
              className="hover:text-brand-green transition-colors"
            >
              Why Us
            </a>
            <a
              href="#product"
              className="hover:text-brand-green transition-colors"
            >
              Product
            </a>
            <a
              href="#about"
              className="hover:text-brand-green transition-colors"
            >
              Our Story
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark-green text-white px-6 py-2.5 rounded-full hover:bg-brand-green transition-all shadow-lg hover:shadow-brand-green/20 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-serif">
              <a href="#benefits" onClick={() => setIsMenuOpen(false)}>
                Why Sevaarth?
              </a>
              <a href="#product" onClick={() => setIsMenuOpen(false)}>
                Phool Makhana
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                Our Story
              </a>
              <a
                href={whatsappLink}
                className="bg-brand-dark-green text-white p-4 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-dark-green text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3 fill-current" />
              Premium Quality from Bihar
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Healthy Snacking <br />
              <span className="text-brand-green italic">
                Rooted in Tradition.
              </span>
            </h1>
            <p className="text-lg opacity-80 mb-8 max-w-lg leading-relaxed">
              Experience the pure, crunchy goodness of handpicked Phool Makhana,
              sourced directly from the heartland of Bihar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                className="bg-brand-dark-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Order on WhatsApp
              </a>
              <a
                href="#product"
                className="border-2 border-brand-dark-green/20 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-dark-green transition-all flex items-center justify-center gap-2"
              >
                View Product
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full transform -translate-y-10 scale-75"></div>
            <img
              src={makhanad}
              alt="Phool Makhana Bowl"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-brand-green/20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-brand-green fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif">100%</div>
                  <div className="text-xs uppercase tracking-wider opacity-60">
                    Natural & Pure
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-green mb-4">
              Why Sevaarth?
            </h2>
            <p className="text-4xl font-serif font-bold">
              The Superfood Your Body Deserves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-brand-cream/50 border border-brand-green/10 hover:border-brand-green/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="py-24 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-brand-green/10">
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Phool Makhana (250g)
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Handpicked from the fields of Bihar",
                    "Naturally processed & Sun-dried",
                    "Light, crunchy & perfectly roasted",
                    "Ideal for fasting (Vrat) & healthy diets",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" />
                      <span className="opacity-80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-cream p-4 rounded-2xl text-center">
                    <div className="text-xs uppercase tracking-widest opacity-50 mb-1">
                      Net Weight
                    </div>
                    <div className="text-xl font-bold">250g</div>
                  </div>
                  <div className="bg-brand-cream p-4 rounded-2xl text-center">
                    <div className="text-xs uppercase tracking-widest opacity-50 mb-1">
                      Shelf Life
                    </div>
                    <div className="text-xl font-bold">12 Months</div>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  className="w-full bg-brand-dark-green text-white py-4 rounded-2xl font-bold text-center block hover:bg-brand-green transition-all shadow-lg"
                >
                  Order Now via WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-green mb-4">
                Nutrition Facts
              </h2>
              <h3 className="text-4xl font-serif font-bold mb-8">
                Fuel Your Body Right
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Energy", value: "356.96 kcal" },
                  { label: "Protein", value: "9.02 g" },
                  { label: "Carbohydrates", value: "79.50 g" },
                  { label: "Fat", value: "0.32 g" },
                  { label: "Sodium", value: "4.58 mg" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 border-b border-brand-dark-green/10"
                  >
                    <span className="font-medium opacity-70">
                      {stat.label} (per 100g)
                    </span>
                    <span className="font-bold text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-brand-green/5 rounded-xl border border-brand-green/10 text-xs italic opacity-60">
                *Values are approximate and may vary based on natural harvest
                conditions.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-brand-dark-green text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/10 blur-[120px] rounded-full transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-green mb-6">
                Our Heritage
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                From the Fertile Fields of Bihar to Your Home
              </h3>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                At Sevaarth, we bring you premium makhana sourced directly from
                Bihar — the heartland of the world's best fox nuts. Our mission
                is simple: to deliver pure, healthy, and traditional nutrition
                to modern lifestyles.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-brand-green font-bold mb-2">
                    Direct Sourcing
                  </h4>
                  <p className="text-sm opacity-60">
                    We work directly with farmers to ensure the highest quality
                    and fair prices.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-green font-bold mb-2">
                    Purity Guaranteed
                  </h4>
                  <p className="text-sm opacity-60">
                    Naturally processed without any artificial additives or
                    preservatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          {...fadeIn}
          className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-brand-green/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Snack Healthy?
          </h2>
          <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">
            Join thousands of health-conscious snackers who have made the switch
            to Sevaarth.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href={whatsappLink}
              className="bg-brand-dark-green text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-green transition-all flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-7 h-7" />
              Order on WhatsApp
            </a>
            <div className="flex items-center gap-8 text-sm font-medium opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                FSSAI Licensed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                Bihar Origin
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-brand-green/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-dark-green rounded-full flex items-center justify-center text-white font-serif font-bold">
                  S
                </div>
                <span className="font-serif text-xl font-bold">Sevaarth</span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed mb-6">
                Premium Phool Makhana from Bihar. Bringing traditional nutrition
                to your modern lifestyle.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors cursor-pointer">
                  <Star className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li>
                  <a href="#benefits" className="hover:text-brand-green">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#product" className="hover:text-brand-green">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-brand-green">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href={whatsappLink} className="hover:text-brand-green">
                    Order Now
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-green" />
                  +91 8287489371
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-green" />
                  support@sevaarth.store
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-green mt-1" />
                  161 Ashok Nagar, Dalsingsarai, Samastipur, Bihar 848114
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">
                Certification
              </h4>
              <div className="bg-brand-cream p-6 rounded-2xl border border-brand-green/10">
                <div className="text-xs font-bold mb-2">FSSAI LIC NO.</div>
                <div className="text-sm font-mono opacity-80">
                  10425330000289
                </div>
                <div className="mt-4 pt-4 border-t border-brand-dark-green/5 text-[10px] uppercase tracking-wider opacity-50">
                  Manufactured & Packed by <br />
                  Swadesh Makhana Foods
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-brand-green/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
            <p>© 2026 Sevaarth. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-green">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-green">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold">
          Order on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

export default function App() {
  return <SevaarthLanding />;
}
