import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function TestimonialsCarousel() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'AdSnap transformed our marketing workflow completely. We went from spending weeks on ad creation to generating viral content in minutes. The ROI is absolutely incredible.',
      rating: 5,
      metric: '340% ROI increase'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Creative Lead',
      company: 'BrandForge',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The AI understands creativity better than some humans I\'ve worked with. Our engagement rates skyrocketed after switching to AdSnap.',
      rating: 5,
      metric: '450% engagement boost'
    },
    {
      name: 'Emily Thompson',
      role: 'Founder',
      company: 'StartupLaunch',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As a startup, budget is everything. AdSnap gave us enterprise-level ad quality at a fraction of the cost. It\'s a complete game-changer.',
      rating: 5,
      metric: '80% cost reduction'
    },
    {
      name: 'David Park',
      role: 'Social Media Manager',
      company: 'ViralCorp',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The speed and quality are unmatched. What used to take our team days now takes 13 seconds. Our clients are blown away every single time.',
      rating: 5,
      metric: '95% time saved'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              10,000+
            </span>{' '}
            Creators
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See what marketing professionals and creators are saying about AdSnap
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="relative p-8 h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                        <Quote className="w-8 h-8 text-blue-400" />
                      </div>

                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-600 group-hover:border-blue-500 transition-colors duration-300 grayscale group-hover:grayscale-0"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                          {testimonial.metric}
                        </Badge>
                      </div>

                      {/* Content */}
                      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Glassmorphic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 text-white backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 text-white backdrop-blur-sm" />
          </Carousel>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechFlow', 'BrandForge', 'StartupLaunch', 'ViralCorp', 'CreativeHub'].map((company, index) => (
              <motion.div
                key={company}
                className="text-2xl font-bold text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}