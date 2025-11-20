import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Server, Palette, Zap } from 'lucide-react';
import './skills.css';
import htmlLogo from '../../assets/HTML.png';
import cssLogo from '../../assets/css-logo.png';
import javascriptLogo from '../../assets/JavaScript.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import githubLogo from '../../assets/github.png';
import reactLogo from '../../assets/react-logo.png';
import jqueryLogo from '../../assets/jQuery.png';
import socketLogo from '../../assets/socket.png';
import mysqlLogo from '../../assets/mysql.png';
import wampLogo from '../../assets/wamp-logo.png';
import canvaLogo from '../../assets/canva-logo.png';
import sqlLogo from '../../assets/sql-logo.png';
import phpLogo from '../../assets/php.png';
import nodeLogo from '../../assets/nodejs-logo.png';
import laravelLogo from '../../assets/laravel-logo.png';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: Array<{
    name: string;
    logo: string;
    level: number;
    description: string;
  }>;
}

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", logo: htmlLogo, level: 90, description: "Semantic markup and accessibility" },
        { name: "CSS", logo: cssLogo, level: 85, description: "Modern layouts and animations" },
        { name: "JavaScript", logo: javascriptLogo, level: 80, description: "ES6+ and modern JS concepts" },
        { name: "SQL", logo: sqlLogo, level: 75, description: "Database queries and optimization" },
        { name: "PHP", logo: phpLogo, level: 70, description: "Server-side development" }
      ]
    },
    {
      title: "Frameworks",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", logo: reactLogo, level: 85, description: "Component-based development" },
        { name: "Laravel", logo: laravelLogo, level: 75, description: "Full-stack PHP framework" },
        { name: "Bootstrap", logo: bootstrapLogo, level: 80, description: "Responsive design framework" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "GitHub", logo: githubLogo, level: 85, description: "Version control and collaboration" },
        { name: "Node.js", logo: nodeLogo, level: 70, description: "Server-side JavaScript" },
        { name: "MySQL", logo: mysqlLogo, level: 75, description: "Database management" },
        { name: "WAMP", logo: wampLogo, level: 70, description: "Local development environment" }
      ]
    },
    {
      title: "Libraries",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "jQuery", logo: jqueryLogo, level: 80, description: "DOM manipulation and AJAX" },
        { name: "Socket.IO", logo: socketLogo, level: 65, description: "Real-time communication" }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Canva", logo: canvaLogo, level: 85, description: "Graphics and design creation" }
      ]
    }
  ];

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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
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
    <section ref={ref} className="py-20 bg-gradient-to-b from-dark-400 to-dark-500">
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
              About Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I am extremely passionate about web and software development. I received intensive training 
            at a Coding Bootcamp for four months and continued self-studying for a year to reach advanced 
            levels in the tools utilized by full-stack developers. Currently, I am focusing on full stack 
            web development with six years of experience in support roles.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover:shadow-glow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group/skill"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-1 shadow-md"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-white group-hover/skill:text-primary-400 transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <span className="text-sm text-gray-400 font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-dark-400/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "15+", label: "Technologies", icon: Code },
            { number: "6+", label: "Years Experience", icon: Database },
            { number: "4", label: "Months Bootcamp", icon: Globe },
            { number: "1+", label: "Years Self-Study", icon: Zap },
          ].map(({ number, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-dark-200/30 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20 group-hover:border-primary-500/40 transition-all duration-300">
                <Icon size={24} className="mx-auto mb-3 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {number}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
