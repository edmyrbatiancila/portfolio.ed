import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Skills from './components/Skills/skills';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-dark-400 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform-gpu z-50"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Page Load Animation */}
      <motion.div
        className="fixed inset-0 bg-dark-500 z-40 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Navbar />
        <main className="flex flex-col relative">
          {/* Floating Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 rounded-full opacity-5"
                style={{
                  background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
                  left: `${10 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Page Sections with Scroll Animations */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            id="intro"
          >
            <Intro />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            id="skills"
          >
            <Skills />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            id="works"
          >
            <Works />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            id="contact"
          >
            <Contact />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Footer />
          </motion.section>
        </main>
      </motion.div>

      {/* Cursor Follow Effect (Desktop Only) */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-30 hidden lg:block"
        style={{
          background: 'radial-gradient(circle, #8b5cf620, transparent)',
          borderRadius: '50%',
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </div>
  );
}

export default App;

