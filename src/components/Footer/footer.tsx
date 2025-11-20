import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import './footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-dark-500 to-dark-400 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Edmyr Batiancila
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate web developer crafting digital experiences with modern technologies 
              and creative problem-solving.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee size={16} className="text-amber-400" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#skills' },
                { name: 'Portfolio', href: '#works' },
                { name: 'Contact', href: '#contact' },
              ].map(({ name, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-primary-400 transition-all duration-300 cursor-pointer"
                >
                  {name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary" 
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium border border-primary-500/30"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Code size={16} />
              <span>Open source & constantly evolving</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-primary-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} Edmyr Batiancila</span>
              <span className="hidden md:block">•</span>
              <span>All rights reserved</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Designed & Developed in Philippines 🇵🇭
              </span>
              
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="icon"
                  className="p-2 bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 rounded-full border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={16} />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
