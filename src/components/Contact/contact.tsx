import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Linkedin, Github, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: 'fJ3rShuNH0wHqioIp', // Your public key
    });
    console.log('EmailJS initialized');
  }, []);

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
    
    if (!formRef.current) {
      console.error('Form reference is null');
      return;
    }
    
    setFormState({ status: 'loading', message: 'Sending your message...' });

    try {
      console.log('Attempting to send email...');
      
      const result = await emailjs.sendForm(
        "service_9tsvboa",    // Service ID
        "template_5oebv39",   // Template ID
        formRef.current,       // Form element
        {
          publicKey: "uqzjqgpuJhE9hhl93",  // Public key in options
        }
      );
      
      console.log('Email sent successfully:', result);
      
      setFormState({ 
        status: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      
      (e.target as HTMLFormElement).reset();
      
      // Reset form state after 5 seconds
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' });
      }, 5000);
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      // Provide more specific error messages
      if (error?.text) {
        errorMessage = error.text;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      setFormState({ 
        status: 'error', 
        message: errorMessage
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
      id="contact"
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
            <Card className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm border-primary-500/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Mail className="text-primary-400" size={24} />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors duration-300" size={20} />
                      <Input
                        type="text"
                        name="from_name"
                        required
                        placeholder="Enter your full name"
                        className="pl-12 bg-dark-300/50 border-primary-500/30 text-white placeholder:text-gray-400 focus:border-primary-500/60 focus:ring-primary-500/30"
                      />
                    </div>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-300">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors duration-300" size={20} />
                      <Input
                        type="email"
                        name="from_email"
                        required
                        placeholder="Enter your email address"
                        className="pl-12 bg-dark-300/50 border-primary-500/30 text-white placeholder:text-gray-400 focus:border-primary-500/60 focus:ring-primary-500/30"
                      />
                    </div>
                  </motion.div>

                  {/* Message Input */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gray-400 group-focus-within:text-primary-400 transition-colors duration-300" size={20} />
                      <Textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="pl-12 bg-dark-300/50 border-primary-500/30 text-white placeholder:text-gray-400 focus:border-primary-500/60 focus:ring-primary-500/30 resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={formState.status === 'loading'}
                      className={`group w-full flex items-center justify-center gap-3 py-4 h-auto text-base font-medium ${
                        formState.status === 'loading'
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-glow-lg hover:from-primary-600 hover:to-secondary-600'
                      }`}
                    >
                      {formState.status === 'loading' ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      ) : (
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                      <span>
                        {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
                      </span>
                    </Button>
                  </motion.div>

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
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm border-primary-500/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-4">Quick Response</h4>
                  <p className="text-gray-300 leading-relaxed">
                    I typically respond within 24 hours. Looking forward to discussing 
                    your project and how we can work together to bring your ideas to life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm border-primary-500/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>• Frontend Development (React, TypeScript)</p>
                    <p>• Full-Stack Web Applications</p>
                    <p>• Responsive Design & UI/UX</p>
                    <p>• Website Optimization</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-sm border-primary-500/20">
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
