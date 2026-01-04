import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Facebook, Twitter, 
  Instagram, Dog, ShieldCheck, Truck, Heart, Star, ChevronDown, 
  Users, ShoppingBag, Award 
} from 'lucide-react';

// 1. Hero Component
const Hero = () => (
  <section className="relative bg-[var(--color-primary-light)]/10 py-20 px-4 overflow-hidden">
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <div className="flex justify-center mb-6 animate-bounce">
        <Dog className="w-20 h-20 text-[var(--color-secondary)]" />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
        Your Pet's <span className="text-[var(--color-secondary)]">Happiness</span> <br/> starts with a conversation.
      </h1>
      <p className="text-xl text-base-content/80 max-w-2xl mx-auto mb-10">
        Have questions about our premium products, grooming services, or veterinary support? Our friendly PawMart team is always here to help you and your furry friends.
      </p>
    </div>
    <div className="absolute top-0 right-0 -mr-20 mt-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 left-0 -ml-20 mb-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl opacity-30"></div>
  </section>
);

// 2. Stats Component
const Stats = () => {
  const statsData = [
    { icon: <Users />, value: "15k+", label: "Happy Clients" },
    { icon: <ShoppingBag />, value: "500+", label: "Premium Products" },
    { icon: <Star />, value: "4.9", label: "Average Rating" },
    { icon: <Award />, value: "12", label: "Industry Awards" },
  ];
  return (
    <section className="py-12 bg-base-100 -mt-10 relative z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-base-100 shadow-2xl rounded-3xl p-10 border border-base-200">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex justify-center text-[var(--color-secondary)] mb-2">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</h3>
              <p className="text-base-content/70 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Services Component
const Services = () => {
  const serviceData = [
    { title: "Pet Grooming", desc: "Professional spa treatments for your furry friends.", icon: <Heart className="text-pink-500" /> },
    { title: "Vet Consultation", desc: "Expert medical advice from certified veterinarians.", icon: <ShieldCheck className="text-blue-500" /> },
    { title: "Rapid Delivery", desc: "Get pet essentials delivered within 24 hours.", icon: <Truck className="text-[var(--color-secondary)]" /> },
  ];
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-[var(--color-primary)]">Our Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {serviceData.map((service, i) => (
            <div key={i} className="p-8 rounded-3xl border border-base-200 hover:border-[var(--color-secondary)] hover:shadow-xl transition-all group bg-base-100">
              <div className="mb-6 p-4 bg-base-200 rounded-2xl w-fit group-hover:bg-[var(--color-secondary)]/10 transition-colors">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-base-content">{service.title}</h3>
              <p className="text-base-content/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. FAQ Component
const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express takes 24 hours." },
    { q: "Can I return a product?", a: "Yes, we have a 30-day no-questions-asked return policy." },
    { q: "Do you offer international shipping?", a: "Currently we ship across North America and parts of Europe." }
  ];
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-[var(--color-primary)]">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-base-200 rounded-2xl overflow-hidden bg-base-100">
            <button 
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left font-bold hover:bg-base-200 transition-colors text-base-content"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
            </button>
            {activeFaq === i && <div className="p-6 pt-0 text-base-content/80 bg-base-200">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

// 5. Contact Form Component
const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setIsSuccess(true); setTimeout(() => setIsSuccess(false), 5000); };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg mr-4"><Mail className="text-[var(--color-secondary)]" /></div>
                <div><h4 className="font-bold text-sm text-base-content">Email</h4><p className="text-[var(--color-primary-light)]">support@pawmart.com</p></div>
              </div>
              <div className="flex items-center">
                <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg mr-4"><Phone className="text-[var(--color-secondary)]" /></div>
                <div><h4 className="font-bold text-sm text-base-content">Call Us</h4><p className="text-[var(--color-primary-light)]">+1 (555) 000-0000</p></div>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-base-200 flex space-x-4">
            <Facebook className="cursor-pointer text-base-content hover:text-[var(--color-secondary)]" /> <Twitter className="cursor-pointer text-base-content hover:text-[var(--color-secondary)]" /> <Instagram className="cursor-pointer text-base-content hover:text-[var(--color-secondary)]" />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-base-100 border border-base-200 shadow-2xl rounded-3xl p-8 md:p-12">
            {isSuccess ? (
              <div className="flex flex-col items-center py-12 text-center animate-bounce">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-base-content">Message Sent!</h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input placeholder="Full Name" className="w-full px-4 py-4 bg-base-200 text-base-content border border-base-300 rounded-xl outline-none focus:border-[var(--color-primary)] focus:bg-base-100 transition-all placeholder-base-content/50" required />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-4 bg-base-200 text-base-content border border-base-300 rounded-xl outline-none focus:border-[var(--color-primary)] focus:bg-base-100 transition-all placeholder-base-content/50" required />
                </div>
                <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-4 bg-base-200 text-base-content border border-base-300 rounded-xl outline-none resize-none focus:border-[var(--color-primary)] focus:bg-base-100 transition-all placeholder-base-content/50" required></textarea>
                <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-primary-light)] transition-all">SEND MESSAGE</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
// Main App Component (Combining all components)
const App = () => {
  return (
    <div className="min-h-screen bg-[var(--color-base-200)] font-sans text-base-content overflow-x-hidden transition-colors duration-300">
      <Hero />
      <Stats />
      <Services />
      
      {/* 7. Newsletter Mini-Section */}
      <section className="py-20 bg-[var(--color-secondary)]/90 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">Join the Pack!</h2>
        <p className="mb-8 text-white/90 font-medium">Get 20% off your first order.</p>
        <div className="flex max-w-md mx-auto gap-2">
          <input className="flex-1 px-6 py-4 rounded-full outline-none text-gray-900 bg-white" placeholder="Enter email" />
          <button className="bg-gray-900 text-white px-6 rounded-full font-bold hover:bg-gray-800 transition-all">Join</button>
        </div>
      </section>

      <FAQ />
      <ContactForm />
    </div>
  );
};

export default App;