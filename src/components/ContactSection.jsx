import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FiGithub, FiLinkedin, FiInstagram, FiMail,
  FiSend, FiCheckCircle, FiArrowRight
} from "react-icons/fi";

const socials = [
  { icon: FiMail, href: "mailto:sudhanshu.ok1802@gmail.com", label: "Email" },
  { icon: FiGithub, href: "https://github.com/Codesmashersgit", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sudhanshu-raj-45b205250/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [0.95, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#020202] flex flex-col items-center justify-center py-20 px-6 sm:px-20 font-outfit z-[100] overflow-hidden">

      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[180px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[180px] opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative w-full max-w-4xl mx-auto z-10 flex flex-col items-center"
      >

        {/* THEATRICAL HEADING */}
        <div className="text-center mb-28">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "1em" }}
            className="text-orange-500 text-[10px] font-black uppercase mb-10 block"
          >
            Digital handshake
          </motion.span>
          <h2 className="font-syne text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter whitespace-nowrap">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/50 to-white/10">TALK</span>
          </h2>
        </div>

        {/* MINIMALIST PREMIUM FORM */}
        <div className="w-full max-w-2xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
                <FiCheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="text-3xl font-black text-white font-syne mb-2 tracking-tight">Signal Received</h3>
              <p className="text-white/30 text-lg">I'll respond to your frequency soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-24">

              <div className="space-y-20">
                {/* NAME INPUT */}
                <div className="group relative">
                  <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-orange-500 transition-all duration-500 mb-6">01. Identity</span>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl sm:text-2xl font-medium focus:outline-none focus:border-orange-500 transition-all duration-700 placeholder:text-white/[0.02]"
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="group relative">
                  <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-purple-500 transition-all duration-500 mb-6">02. Gateway</span>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl sm:text-2xl font-medium focus:outline-none focus:border-purple-500 transition-all duration-700 placeholder:text-white/[0.02]"
                  />
                </div>

                {/* MESSAGE INPUT */}
                <div className="group relative">
                  <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-pink-500 transition-all duration-500 mb-6">03. Mission</span>
                  <textarea
                    required
                    rows="2"
                    placeholder="Your vision..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl sm:text-2xl font-medium focus:outline-none focus:border-pink-500 transition-all duration-700 resize-none placeholder:text-white/[0.02]"
                  />
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-8 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group relative flex items-center text-center justify-center gap-6 px-16 py-10 h-[40px] w-[300px] cursor-pointer sm:py-12 rounded-full bg-white text-black font-black uppercase tracking-[0.4em] text-xs transition-all duration-500 hover:bg-orange-500 hover:text-white shadow-2xl"
                >
                  Initiate Transmission

                </motion.button>
              </div>
            </form>
          )}
        </div>

        {/* MINIMAL SOCIALS */}
        <div className="mt-40 w-full flex flex-wrap justify-center items-center gap-10 sm:gap-20">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 group"
              target="_blank"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-500">
                <social.icon size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/10 group-hover:text-white/40 transition-all duration-500">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default ContactSection;