import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Brain, Palette, Clock, Target, Sparkles } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate professional video ads in under 13 seconds. No waiting, no complex rendering processes.',
      gradient: 'from-blue-600 to-cyan-600',
      color: 'text-blue-400',
      badge: 'Speed'
    },
    {
      icon: Brain,
      title: 'AI-Optimized',
      description: 'Scene-by-scene optimization with auto-generated music, dialogues, and visual effects for maximum impact.',
      gradient: 'from-purple-600 to-pink-600',
      color: 'text-purple-400',
      badge: 'Smart'
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Edit scenes, adjust styles, change tone, and fine-tune every aspect of your ad with intuitive controls.',
      gradient: 'from-orange-600 to-red-600',
      color: 'text-orange-400',
      badge: 'Flexible'
    }
  ];

  const additionalFeatures = [
    { icon: Clock, title: 'Real-time Preview', description: 'See changes instantly' },
    { icon: Target, title: 'Conversion Focused', description: 'Built for results' },
    { icon: Sparkles, title: 'Premium Quality', description: 'Professional output' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Why Choose AdSnap?
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Experience the future of ad creation with our cutting-edge AI technology that delivers results
              </p>
            </div>

            {/* Main Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="group perspective-1000">
                    <Card className="relative p-8 h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      {/* Badge */}
                      <div className="flex justify-between items-start mb-6">
                        <Badge variant="secondary" className="bg-gray-800/50 text-gray-300 border-gray-600">
                          {feature.badge}
                        </Badge>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Additional Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {additionalFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}