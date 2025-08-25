import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Clock, Music, Palette, Wand2, Video, Download, Share2, Eye } from 'lucide-react';

export function AdCreationModule() {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('');
  const [mood, setMood] = useState('');
  const [music, setMusic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'setup', label: 'Scene Setup', icon: Video },
    { id: 'dialogue', label: 'Dialogue', icon: Sparkles },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'export', label: 'Export', icon: Download }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    setCurrentStep(0);

    // Simulate AI generation with progress
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setProgress(i);
      
      if (i === 25) setCurrentStep(1);
      else if (i === 50) setCurrentStep(2);
      else if (i === 75) setCurrentStep(3);
    }

    setTimeout(() => {
      setIsGenerating(false);
      setProgress(0);
      setCurrentStep(0);
    }, 500);
  };

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
            Transform Ideas into{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Viral Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI understands your vision and creates professional video ads that convert. 
            Just describe what you want and watch the magic happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Creation Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
              <Tabs defaultValue="create" className="space-y-8">
                <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-2xl p-2">
                  <TabsTrigger value="create" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Create New
                  </TabsTrigger>
                  <TabsTrigger value="templates" className="rounded-xl data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                    Templates
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="create" className="space-y-8">
                  {/* Progress Tracker */}
                  {isGenerating && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">Generation Progress</span>
                        <span className="text-sm text-blue-400">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-3 bg-gray-800" />
                      
                      <div className="flex justify-between">
                        {steps.map((step, index) => {
                          const Icon = step.icon;
                          const isActive = index === currentStep;
                          const isCompleted = index < currentStep;
                          
                          return (
                            <div key={step.id} className="flex flex-col items-center gap-2">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isActive ? 'bg-blue-600 text-white scale-110' :
                                isCompleted ? 'bg-green-600 text-white' :
                                'bg-gray-700 text-gray-400'
                              }`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className={`text-xs font-medium ${
                                isActive ? 'text-blue-400' :
                                isCompleted ? 'text-green-400' :
                                'text-gray-500'
                              }`}>
                                {step.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Prompt Input */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      Describe your ad concept
                    </Label>
                    <div className="relative">
                      <Textarea
                        placeholder="e.g., A sleek smartphone floating in cosmic space with energy particles, showcasing premium features with dramatic lighting..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-36 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl text-lg p-6 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      />
                      <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                        {prompt.length}/500
                      </div>
                    </div>
                  </div>

                  {/* Options Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Duration */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-white flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-400" />
                        Duration
                      </Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white rounded-2xl h-14 hover:border-gray-500 transition-colors">
                          <SelectValue placeholder="Choose duration" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="10s">10 seconds</SelectItem>
                          <SelectItem value="11s">11 seconds</SelectItem>
                          <SelectItem value="12s">12 seconds</SelectItem>
                          <SelectItem value="13s">13 seconds ⭐</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Music */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-white flex items-center gap-2">
                        <Music className="w-5 h-5 text-purple-400" />
                        Background Music
                      </Label>
                      <Select value={music} onValueChange={setMusic}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white rounded-2xl h-14 hover:border-gray-500 transition-colors">
                          <SelectValue placeholder="Select music style" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="upbeat">🎵 Upbeat & Energetic</SelectItem>
                          <SelectItem value="corporate">💼 Corporate & Professional</SelectItem>
                          <SelectItem value="ambient">🌊 Ambient & Chill</SelectItem>
                          <SelectItem value="dramatic">🎭 Dramatic & Cinematic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Mood Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-white flex items-center gap-2">
                      <Palette className="w-5 h-5 text-pink-400" />
                      Mood & Style
                    </Label>
                    <RadioGroup value={mood} onValueChange={setMood} className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'energetic', label: 'Energetic', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
                        { value: 'corporate', label: 'Corporate', icon: '💼', color: 'from-blue-500 to-indigo-500' },
                        { value: 'emotional', label: 'Emotional', icon: '❤️', color: 'from-pink-500 to-red-500' },
                        { value: 'fun', label: 'Fun & Playful', icon: '🎉', color: 'from-purple-500 to-pink-500' }
                      ].map((option) => (
                        <motion.div 
                          key={option.value} 
                          className="relative"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`flex items-center space-x-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                            mood === option.value 
                              ? 'border-blue-500 bg-blue-500/10' 
                              : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/30'
                          }`}>
                            <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                            <Label htmlFor={option.value} className="text-white font-medium cursor-pointer flex items-center gap-3 flex-1">
                              <span className="text-2xl">{option.icon}</span>
                              <span>{option.label}</span>
                            </Label>
                            {mood === option.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-3 h-3 bg-blue-500 rounded-full"
                              />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                    disabled={!prompt || isGenerating}
                    className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white py-7 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-0 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isGenerating ? (
                      <div className="flex items-center justify-center relative z-10">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3" />
                        <span>Generating Magic...</span>
                        <div className="ml-3 flex space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center relative z-10">
                        <Wand2 className="w-6 h-6 mr-3" />
                        <span>Generate My Ad</span>
                        <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
                      </div>
                    )}
                  </Button>
                </TabsContent>

                <TabsContent value="templates" className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Product Launch', category: 'E-commerce', preview: '🚀' },
                      { name: 'App Promo', category: 'Technology', preview: '📱' },
                      { name: 'Brand Story', category: 'Corporate', preview: '🏢' },
                      { name: 'Event Invite', category: 'Social', preview: '🎪' }
                    ].map((template, index) => (
                      <motion.div
                        key={template.name}
                        className="p-4 rounded-2xl bg-gray-800/50 border border-gray-600 hover:border-gray-500 cursor-pointer transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-3xl mb-2">{template.preview}</div>
                        <h4 className="font-semibold text-white">{template.name}</h4>
                        <Badge variant="secondary" className="mt-2">{template.category}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl h-full shadow-2xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Live Preview</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl flex items-center justify-center min-h-96 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isGenerating ? (
                      <motion.div
                        key="generating"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center"
                      >
                        <div className="relative mb-8">
                          <div className="w-32 h-32 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Sparkles className="w-12 h-12 text-blue-400 animate-pulse" />
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-white mb-2">
                          AI is crafting your masterpiece...
                        </h4>
                        <p className="text-gray-400 mb-4">
                          {steps[currentStep]?.label} in progress
                        </p>
                        
                        <div className="flex justify-center space-x-2">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mb-6 mx-auto">
                          <Video className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Your generated ad will appear here
                        </h4>
                        <p className="text-gray-400">
                          Fill out the form to see the magic happen
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Status Bar */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-blue-400 animate-pulse' : 'bg-gray-500'}`} />
                      <span className="text-gray-400">Generation Status</span>
                    </div>
                    <span className={isGenerating ? 'text-blue-400 font-medium' : 'text-gray-500'}>
                      {isGenerating ? 'Processing...' : 'Ready to create'}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}