import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Download, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import './intro.css';
import { containerVariants, itemVariants } from '../../utils/Intro/motionVariants';
import { textArray } from '../../utils/Intro/introText';
import { downloadResume } from '../../utils/Intro/download-resume';

const Intro: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  // function for Downloading Resume:
  // const downloadResume = () => {
  //   const link = document.createElement('a');

  //   link.href = '/external_file/Edmyr_Batiancila_Resume.pdf';
  //   link.download = 'Edmyr_Batiancila_Resume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-500 via-dark-400 to-dark-300"
      id="intro"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #d946ef 0%, transparent 70%)',
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <Sparkles size={16} className="animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gray-100">Hello, I'm </span>
            <motion.span
              className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Edmyr Batiancila
            </motion.span>
          </motion.h1>

          {/* Dynamic role text */}
          <motion.div
            variants={itemVariants}
            className="h-16 md:h-20 mb-8 flex items-center justify-center"
          >
            <motion.h2
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
            >
              A{' '}
              <span className="text-primary-400 font-bold">
                {textArray[currentText]}
              </span>
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            After completing a bootcamp and pursuing self-study, I was ready to embark on my journey 
            into the field of web/software development and make a significant impact in the tech industry. Right now I already step into the professional world, eager to contribute my skills and passion to innovative projects. I am still learning and growing every day.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="group flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-glow-lg transition-all duration-300"
                onClick={() => {
                  const worksElement = document.getElementById("works");
                  if (worksElement) {
                    worksElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>View My Work</span>
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="flex items-center gap-3 bg-dark-200/50 backdrop-blur-sm border border-primary-500/30 text-gray-300 px-8 py-4 rounded-full font-medium hover:bg-dark-200/70 hover:border-primary-500/50 transition-all duration-300"
                onClick={ downloadResume }
              >
                <Download size={20} />
                <span>Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/edmyrbatiancila", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/edmyr-batiancila/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="group p-3 rounded-full bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/50 hover:shadow-glow transition-all duration-300"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={24} className="text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Intro;
