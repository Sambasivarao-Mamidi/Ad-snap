import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Twitter, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <span className="text-white">AdSnap</span>
                </h3>
                <p className="text-gray-400 mt-2 text-lg">
                  <span className="text-white">AI-Powered Ad Creation Platform</span>
                </p>
              </motion.div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                <span className="text-white">Transform your ideas into viral video ads in just 13 seconds. 
                Join thousands of creators who trust AdSnap for their marketing success.</span>
              </p>

              {/* Newsletter Signup */}
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 rounded-xl">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Templates', 'API Docs', 'Integrations'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-4">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Status'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
              { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0"
            >
              <span className="text-white">© 2024 AdSnap. All rights reserved.</span>
              <span className="hidden md:inline text-white">•</span>
              <span className="flex items-center gap-1 text-white">
                Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by AdSnap
              </span>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-white/5 backdrop-blur-sm"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}