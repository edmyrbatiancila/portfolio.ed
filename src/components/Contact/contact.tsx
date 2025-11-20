import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Linkedin, Github, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './contact.css';
import linkedinLogo from '../../assets/linkedin-logo.png';
import youtubeLogo from '../../assets/youtube-logo.png';
import githubLogo from '../../assets/github.png';

interface LogoItem {
  imageSrc: string;
  altText: string;
  linkUrl: string;
  icon: React.ElementType;
  color: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  const logoListItems: LogoItem[] = [
    {
      imageSrc: linkedinLogo,
      altText: "Logo of LinkedIn",
      linkUrl: "https://www.linkedin.com/in/edmyr-batiancila/",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600"
    },
    {
      imageSrc: youtubeLogo,
      altText: "Logo of Youtube",
      linkUrl: "https://youtube.com/@edmyrbatiancila5469?si=p7aG43rj4wAAIrH8",
      icon: Youtube,
      color: "from-red-500 to-red-600"
    },
    {
      imageSrc: githubLogo,
      altText: "Logo of GitHub",
      linkUrl: "https://github.com/edmyrbatiancila",
      icon: Github,
      color: "from-gray-700 to-gray-900"
    },
  ];

  const handleLogoClick = (linkUrl: string): void => {
    window.open(linkUrl, '_blank');
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setFormState({ status: 'loading', message: 'Sending your message...' });

    try {
      await emailjs.sendForm(
        "service_9tsvboa",
        "template_5oebv39",
        formRef.current,
        "fJ3rShuNH0wHqioIp"
      );
      
      setFormState({ 
        status: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      
      (e.target as HTMLFormElement).reset();
      
      // Reset form state after 5 seconds
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' });
      }, 5000);
      
    } catch (error) {
      setFormState({ 
        status: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' });
      }, 5000);
    }
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

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-dark-400 to-dark-500"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="text-primary-400" size={24} />
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors duration-300" size={20} />
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-dark-300/50 border border-primary-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/60 focus:shadow-glow/50 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors duration-300" size={20} />
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-dark-300/50 border border-primary-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/60 focus:shadow-glow/50 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 group-focus-within:text-primary-400 transition-colors duration-300" size={20} />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-dark-300/50 border border-primary-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/60 focus:shadow-glow/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                    formState.status === 'loading'
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-glow-lg'
                  } text-white`}
                >
                  {formState.status === 'loading' ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                  <span>
                    {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>

                {/* Status Message */}
                {formState.status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      formState.status === 'success'
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {formState.status === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span className="text-sm font-medium">{formState.message}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Quick Response</h4>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond within 24 hours. Looking forward to discussing 
                  your project and how we can work together to bring your ideas to life.
                </p>
              </div>

              <div className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
                <div className="space-y-2 text-gray-300">
                  <p>• Frontend Development (React, TypeScript)</p>
                  <p>• Full-Stack Web Applications</p>
                  <p>• Responsive Design & UI/UX</p>
                  <p>• Website Optimization</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                {logoListItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.altText}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLogoClick(item.linkUrl)}
                      className={`group relative p-4 rounded-xl bg-gradient-to-r ${item.color} hover:shadow-glow transition-all duration-300`}
                    >
                      <IconComponent size={24} className="text-white" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-dark-300 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.altText.replace('Logo of ', '')}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
