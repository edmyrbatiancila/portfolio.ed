import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight, Zap, Globe } from 'lucide-react';
import './works.css';
import Portfolio1 from '../../assets/can_i_use_clone.JPG';
import Portfolio2 from '../../assets/contact-list.JPG';
import Portfolio3 from '../../assets/python-website-clone.JPG';
import Portfolio4 from '../../assets/portfolio-first-attempt.JPG';
import Portfolio5 from '../../assets/moneybutton-game.JPG';
import Portfolio6 from '../../assets/fortune-cookies.JPG';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

const Works: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Can I Use Clone",
      description: "A responsive clone of the popular Can I Use website, showcasing browser compatibility data with modern web technologies and clean UI design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: Portfolio1,
      liveUrl: "https://edmyrbatiancila.github.io/Can_I_Use_Clone/",
      githubUrl: "#",
      category: "Web Development",
      featured: true
    },
    {
      id: 2,
      title: "Contact Management App",
      description: "A comprehensive contact management application with CRUD operations, search functionality, and modern UI components for efficient contact organization.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      imageUrl: Portfolio2,
      liveUrl: "https://contactlistv2.netlify.app/",
      githubUrl: "#",
      category: "React",
      featured: true
    },
    {
      id: 3,
      title: "Python Website Clone",
      description: "A pixel-perfect clone of the official Python website, demonstrating advanced CSS skills and responsive design principles.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
      imageUrl: Portfolio3,
      liveUrl: "https://edmyrbatiancila.github.io/Python_Website_Clone/",
      githubUrl: "#",
      category: "Web Development",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio V1",
      description: "My first portfolio attempt showcasing early development skills and design sensibilities with clean layouts and interactive elements.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      imageUrl: Portfolio4,
      liveUrl: "https://edmyr-portfolio.netlify.app/",
      githubUrl: "#",
      category: "Portfolio",
      featured: false
    },
    {
      id: 5,
      title: "Money Button Game",
      description: "An interactive web game featuring engaging gameplay mechanics, score tracking, and responsive design for entertainment and learning.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      imageUrl: Portfolio5,
      liveUrl: "https://money-button-game.netlify.app/",
      githubUrl: "#",
      category: "Games",
      featured: true
    },
    {
      id: 6,
      title: "Fortune Cookies App",
      description: "A delightful fortune cookie application with random quote generation, smooth animations, and an intuitive user experience.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Animations"],
      imageUrl: Portfolio6,
      liveUrl: "https://edmyrbatiancila.github.io/fortune_cookies/",
      githubUrl: "#",
      category: "Web Apps",
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (linkUrl: string): void => {
    window.open(linkUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.68, -0.55, 0.265, 1.55] as const
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-dark-500 to-dark-400"
      id="works"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            I am passionate about what I do. These projects showcase the skills I have gained from 
            4 months of coding bootcamp and 1 year of self-study. Each project demonstrates my growth 
            and commitment to continuous learning.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow'
                    : 'bg-dark-200/50 text-gray-300 border border-primary-500/20 hover:border-primary-500/40 hover:text-primary-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              variants={cardVariants}
              whileHover={{ y: -10, rotateY: 5 }}
              className={`group relative bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500 hover:shadow-glow-lg ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Zap size={14} />
                    <span>Featured</span>
                  </div>
                </motion.div>
              )}

              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-dark-400">
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleItemClick(item.liveUrl)}
                    className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300"
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </motion.button>
                  
                  {item.githubUrl && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleItemClick(item.githubUrl!)}
                      className="flex items-center gap-2 bg-dark-200 text-white px-4 py-2 rounded-lg font-medium hover:bg-dark-300 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Globe size={14} />
                    <span>Live Project</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleItemClick(item.liveUrl)}
                    className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>View Details</span>
                    <ExternalLink size={12} />
                  </motion.button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-glow-lg transition-all duration-300"
            onClick={() => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Let's Build Something Together</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Works;
