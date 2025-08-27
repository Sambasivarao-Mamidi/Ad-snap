import { motion } from 'framer-motion';
import HomeBackgroundLayers from './HomeBackgroundLayers'; // Correct ES import
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Zap, 
  Brain, 
  Target, 
  Heart,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Star,
  Calendar,
  Eye
} from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      name: 'TechFlow Product Launch',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2 days ago',
      duration: '13s',
      category: 'Product Launch'
    },
    {
      id: 2,
      name: 'StartupLaunch Brand Story',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '1 week ago',
      duration: '12s',
      category: 'Brand Story'
    },
    {
      id: 3,
      name: 'CreativeHub App Promo',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2 weeks ago',
      duration: '11s',
      category: 'App Promo'
    },
    {
      id: 4,
      name: 'BrandForge Event Invite',
      thumbnail: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '3 weeks ago',
      duration: '10s',
      category: 'Event'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#0a1a3c] via-[#3a1c71] to-[#a044ff] opacity-90" style={{background: 'linear-gradient(120deg, #0a1a3c 0%, #3a1c71 40%, #a044ff 80%, #ff6aee 100%)'}} />
      <HomeBackgroundLayers />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="inline-flex items-center gap-3 px-6 py-3 text-lg bg-blue-600 backdrop-blur-lg border border-blue-500 hover:border-blue-400 transition-all duration-300">
              <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="font-medium text-white">AI-Powered Ad Creation Studio</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight"
            style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
          >
            AdSnap —{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                AI-Powered Ad Creation Studio
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide"
          >
            Turn ideas into professional ads with AI-powered scripts, visuals, and music.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              onClick={() => navigate('/studio')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
              style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Play className="w-6 h-6 mr-3 relative z-10" />
              <span className="relative z-10">🚀 Start Creating</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '50K+', label: 'Ads Created', icon: '🎬' },
              { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '13s', label: 'Average Creation Time', icon: '⚡' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-800 backdrop-blur-sm border border-gray-600 hover:border-gray-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Previous Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}>
              Previous{' '}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium tracking-wide">
              Explore our latest AI-generated ad campaigns and see the power of creative automation in action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="group perspective-1000"
                >
                  <Card className="relative overflow-hidden bg-gray-800 backdrop-blur-xl border border-gray-600 rounded-3xl hover:border-blue-500 transition-all duration-500 hover:shadow-2xl">
                    <div className="relative">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white border-0">
                          {project.duration}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="bg-gray-800 text-white mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ textShadow: '0 0 30px rgba(34, 197, 94, 0.3)' }}>
              Why Choose{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AdSnap?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Generate professional video ads in under 13 seconds with AI optimization.',
                gradient: 'from-blue-600 to-cyan-600',
                color: 'text-blue-400'
              },
              {
                icon: Brain,
                title: 'AI-Optimized',
                description: 'Scene-by-scene optimization with auto-generated scripts and perfect music sync.',
                gradient: 'from-purple-600 to-pink-600',
                color: 'text-purple-400'
              },
              {
                icon: Target,
                title: 'Conversion Focused',
                description: 'Built for results with proven templates and data-driven optimization.',
                gradient: 'from-orange-600 to-red-600',
                color: 'text-orange-400'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="group perspective-1000"
                >
                  <Card className="relative p-8 h-full bg-gray-800 backdrop-blur-xl border border-gray-600 rounded-3xl hover:border-gray-500 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mb-6`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-300 font-medium tracking-wide">
                      {feature.description}
                    </p>

                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 border-t border-white/10" style={{ borderImage: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent) 1' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AdSnap
                  </h3>
                  <p className="text-white mt-2 text-lg font-medium">
                    AI-Powered Ad Creation Studio
                  </p>
                </motion.div>
                
                <p className="text-white text-lg leading-relaxed mb-8 max-w-md font-medium tracking-wide">
                  Transform your ideas into viral video ads instantly. 
                  Join thousands of creators who trust AdSnap for their marketing success.
                </p>

                {/* Newsletter Signup */}
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 rounded-xl font-bold">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-xl font-extrabold text-white mb-6">Product</h4>
                <ul className="space-y-4">
                  {['Features', 'Pricing', 'Templates', 'API Docs'].map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-white hover:text-blue-300 transition-colors duration-200 font-medium tracking-wide"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-white mb-6">Support</h4>
                <ul className="space-y-4">
                  {['Help Center', 'Contact', 'Privacy', 'Terms'].map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-white hover:text-blue-300 transition-colors duration-200 font-medium tracking-wide"
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
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`w-14 h-14 rounded-full bg-gray-800 backdrop-blur-sm border border-gray-600 hover:border-gray-500 flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-600">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white mb-4 md:mb-0 font-medium tracking-wide"
              >
                <span>© 2024 AdSnap. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by AdSnap Team
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="border-gray-600 text-white hover:text-blue-300 hover:border-gray-500 hover:bg-gray-800 backdrop-blur-sm font-bold"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-[-90deg]" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
