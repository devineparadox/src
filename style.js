import React, { useEffect } from 'react';

export default function MainComponent() {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll event logic here (if needed)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-poppins">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/80 backdrop-blur-sm z-50 px-4 py-3">
        {/* Navigation content */}
      </nav>

      {/* Side Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
        {/* Side navigation dots */}
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Hero content */}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        {/* About content */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-4">
        {/* Skills content */}
      </section>

      {/* Social Media Section */}
      <section id="social" className="min-h-screen flex items-center py-20 px-4">
        {/* Social media content */}
      </section>

      {/* Gaming Section */}
      <section id="gaming" className="min-h-screen flex items-center py-20 px-4">
        {/* Gaming profile content */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4">
        {/* Contact content */}
      </section>

      {/* Gradient Animation Styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gradient-animate {
          background: linear-gradient(-45deg, #2a0845, #6441A5, #2a0845);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
