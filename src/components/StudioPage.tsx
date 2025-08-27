// ...existing code...
import { useState, useEffect } from 'react';
import StudioBackgroundLayers from './StudioBackgroundLayers';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Menu, Wand2, Sparkles, FileText, Layers, Music, Video, Calendar, Clock, Film, X, Brain, Eye, Download, Copy, Play, Edit, Save } from 'lucide-react';

interface Scene {
  id: number;
  title: string;
  duration: string;
  description: string;
  script: string;
  visual: string;
}

export function StudioPage() {
  const navigate = useNavigate();
  const [scriptTone, setScriptTone] = useState('');
  const [sceneCount, setSceneCount] = useState([3]);
  const [musicStyle, setMusicStyle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [statusText, setStatusText] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const [generatedScenes, setGeneratedScenes] = useState<Scene[]>([]);
  const [editingScene, setEditingScene] = useState<Scene | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [adDescription, setAdDescription] = useState('');

  const steps = [
    { id: 'script', label: 'Writing script...', status: 'Writing script...', icon: FileText },
    { id: 'storyboard', label: 'Building storyboard...', status: 'Building storyboard...', icon: Layers },
    { id: 'music', label: 'Adding music...', status: 'Adding music...', icon: Music },
    { id: 'video', label: 'Rendering final preview...', status: 'Rendering final preview...', icon: Video }
  ];

  // Mock previous projects data
  const previousProjects = [
    {
      id: 1,
      title: 'TechFlow Product Launch',
      date: '2 days ago',
      thumbnail: 'bg-gradient-to-br from-blue-600 to-purple-600',
      status: 'completed',
      description: 'Premium smartphone floating in cosmic space with energy particles',
      scenes: 3,
      duration: '15s',
      icon: '📱'
    },
    {
      id: 2,
      title: 'Fashion Forward Campaign',
      date: '1 week ago',
      thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-600',
      status: 'completed',
      description: 'Elegant model showcasing luxury fashion in minimalist setting',
      scenes: 4,
      duration: '20s',
      icon: '👗'
    },
    {
      id: 3,
      title: 'Eco-Friendly Solutions',
      date: '2 weeks ago',
      thumbnail: 'bg-gradient-to-br from-green-500 to-emerald-600',
      status: 'completed',
      description: 'Sustainable products in natural environment with organic transitions',
      scenes: 5,
      duration: '25s',
      icon: '🌱'
    },
    {
      id: 4,
      title: 'Gaming Revolution',
      date: '3 weeks ago',
      thumbnail: 'bg-gradient-to-br from-purple-600 to-indigo-700',
      status: 'completed',
      description: 'Next-gen gaming console with dynamic lighting and particle effects',
      scenes: 3,
      duration: '18s',
      icon: '🎮'
    },
    {
      id: 5,
      title: 'Culinary Masterpiece',
      date: '1 month ago',
      thumbnail: 'bg-gradient-to-br from-orange-500 to-red-600',
      status: 'completed',
      description: 'Gourmet food presentation with cinematic close-ups and steam effects',
      scenes: 4,
      duration: '22s',
      icon: '🍽️'
    },
    {
      id: 6,
      title: 'Fitness Transformation',
      date: '1 month ago',
      thumbnail: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      status: 'completed',
      description: 'Athletic performance showcase with dynamic movement and energy',
      scenes: 5,
      duration: '30s',
      icon: '💪'
    }
  ];

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsPanelOpen(false); // Close mobile panel on desktop
      }
    };
    
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle projects panel
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleSceneEdit = (updatedScene: Scene) => {
    setGeneratedScenes(scenes => 
      scenes.map(scene => 
        scene.id === updatedScene.id ? updatedScene : scene
      )
    );
    setIsEditModalOpen(false);
    setEditingScene(null);
  };

  const handleGenerate = async () => {
    if (!adDescription.trim()) return;
    
    setIsGenerating(true);
    setProgress(0);
    setCurrentStep(0);
    setGeneratedScenes([]);
    setStatusText(steps[0].status);

    // Simulate AI generation with progress and status updates
    for (let i = 0; i <= 100; i += 1) {
      await new Promise(resolve => setTimeout(resolve, 60));
      setProgress(i);
      
      if (i === 25 && currentStep === 0) {
        setCurrentStep(1);
        setStatusText(steps[1].status);
      } else if (i === 50 && currentStep === 1) {
        setCurrentStep(2);
        setStatusText(steps[2].status);
      } else if (i === 75 && currentStep === 2) {
        setCurrentStep(3);
        setStatusText(steps[3].status);
      }
    }

    // Mock generated scenes
    setGeneratedScenes([
      {
        id: 1,
        title: 'Opening Hook',
        duration: '3s',
        description: 'Attention-grabbing visual with product reveal',
        script: 'Transform your ideas into reality with cutting-edge innovation...',
        visual: 'Dynamic product showcase with energy particles'
      },
      {
        id: 2,
        title: 'Product Showcase',
        duration: '5s',
        description: 'Dynamic product demonstration with key features',
        script: 'Experience the power of next-generation technology...',
        visual: 'Close-up shots highlighting premium features'
      },
      {
        id: 3,
        title: 'Call to Action',
        duration: '5s',
        description: 'Compelling CTA with urgency and social proof',
        script: 'Join thousands of satisfied customers today...',
        visual: 'Brand logo with compelling offer display'
      }
    ]);

    // Auto-switch to Live Preview tab on completion
    setTimeout(() => {
      setIsGenerating(false);
      setProgress(0);
      setCurrentStep(0);
      setStatusText('');
      setActiveTab('preview');
      // Trigger pulse effect
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 3000);
    }, 500);
  };

  const handleProjectSelect = (project: any) => {
    console.log('Selected project:', project);
    setIsPanelOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
  {/* Multi-layer Aurora/Particles Animated Background */}
  <StudioBackgroundLayers />
  {/* Previous Projects Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsPanelOpen(false)}
            />
            
            {/* Projects Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200 
              }}
              className={`fixed left-0 top-0 h-full ${
                isMobile ? 'w-full' : 'w-96'
              } bg-gray-900/95 backdrop-blur-xl border-r border-white/10 shadow-2xl z-50`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Panel Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Film className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Previous Projects</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPanelOpen(false)}
                    className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                {/* Projects List */}
                <div className="flex-1 overflow-hidden">
                  <div className="space-y-4 overflow-y-auto h-full pr-2 scrollbar-thin scrollbar-thumb-blue-600/50 scrollbar-track-transparent">
                    {previousProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleProjectSelect(project)}
                      >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:bg-white/10">
                          {/* Project Thumbnail */}
                          <div className={`w-full h-24 ${project.thumbnail} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                            <div className="relative z-10 text-white font-bold text-lg">
                              {project.title.split(' ')[0]}
                            </div>
                            <div className="absolute top-2 right-2">
                              <Badge className="text-xs bg-green-600/80 text-green-100 border-0">
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                          
                          {/* Project Info */}
                          <div className="space-y-3">
                            <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{project.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{project.duration}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Layers className="w-3 h-3" />
                              <span>{project.scenes} scenes</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center gap-4">
              {/* Hamburger Menu */}
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePanel}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
              >
                <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              
              {/* Gradient Divider */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
              
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                  AdSnap Studio
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  AI-powered creative ad generation
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Circular Back to Home Button */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate('/')}
                      className="w-10 h-10 rounded-full p-0 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Home className="w-4 h-4 relative z-10" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Back to Home</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </header>

        {/* Studio Content */}
        <div className="p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-4 sm:gap-6 lg:gap-8 min-h-[500px]">
              {/* Creation Panel */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full"
              >
                <Card className="flex flex-col h-full p-6 lg:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl">
                  {/* Script Input */}
                  <div className="space-y-4 mb-8">
                    <label className="text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      Describe Your Ad Concept
                    </label>
                    <Textarea
                      value={adDescription}
                      onChange={(e) => setAdDescription(e.target.value)}
                      placeholder="e.g., A premium smartphone floating in cosmic space with energy particles, showcasing cutting-edge features with dramatic lighting and futuristic UI elements..."
                      className="min-h-36 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl text-lg p-6 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Options Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Script Tone */}
                    <div className="space-y-4">
                      <label className="text-lg font-bold text-white flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-400" />
                        Script Tone
                      </label>
                      <Select value={scriptTone} onValueChange={setScriptTone}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white rounded-2xl h-14 hover:border-gray-500 transition-colors">
                          <SelectValue placeholder="Choose tone" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="professional">💼 Professional</SelectItem>
                          <SelectItem value="energetic">⚡ Energetic</SelectItem>
                          <SelectItem value="emotional">❤️ Emotional</SelectItem>
                          <SelectItem value="playful">🎉 Playful</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Music Style */}
                    <div className="space-y-4">
                      <label className="text-lg font-bold text-white flex items-center gap-2">
                        <Music className="w-5 h-5 text-pink-400" />
                        Music Style
                      </label>
                      <Select value={musicStyle} onValueChange={setMusicStyle}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white rounded-2xl h-14 hover:border-gray-500 transition-colors">
                          <SelectValue placeholder="Select music" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="upbeat">🎵 Upbeat & Energetic</SelectItem>
                          <SelectItem value="corporate">💼 Corporate & Clean</SelectItem>
                          <SelectItem value="ambient">🌊 Ambient & Chill</SelectItem>
                          <SelectItem value="cinematic">🎭 Cinematic & Epic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Scene Count Slider */}
                  <div className="space-y-4 mb-8">
                    <label className="text-lg font-bold text-white flex items-center gap-2">
                      <Video className="w-5 h-5 text-green-400" />
                      Scene Count: {sceneCount[0]}
                    </label>
                    <Slider
                      value={sceneCount}
                      onValueChange={setSceneCount}
                      max={5}
                      min={2}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>2 scenes</span>
                      <span>5 scenes</span>
                    </div>
                  </div>


                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !adDescription.trim()}
                    className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-0 relative overflow-hidden group"
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
                </Card>
              </motion.div>

              {/* Preview Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full"
              >
                <Card className="flex flex-col h-full p-6 lg:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
                    <div className="flex items-center justify-center mb-6 relative">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <TabsList className="grid grid-cols-2 bg-gray-800/50 rounded-xl sm:rounded-2xl p-2">
                          <TabsTrigger 
                            value="preview" 
                            className="rounded-lg sm:rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(59,130,246,0.5)] font-bold transition-all duration-300 text-sm sm:text-base flex items-center justify-center px-3 sm:px-4 py-2"
                          >
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">Live Preview</span>
                            <span className="sm:hidden">Preview</span>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="storyboard" 
                            className="rounded-lg sm:rounded-xl data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.5)] font-bold transition-all duration-300 text-sm sm:text-base flex items-center justify-center px-3 sm:px-4 py-2"
                          >
                            <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">Storyboard</span>
                            <span className="sm:hidden">Story</span>
                          </TabsTrigger>
                        </TabsList>
                        
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-xs sm:text-sm px-3 sm:px-4 py-2">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">Export</span>
                        </Button>
                      </div>
                    </div>

                    <TabsContent value="preview" className="h-full flex flex-col flex-1">
                      <div className={`flex-1 h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl flex flex-col min-h-[500px] relative overflow-hidden transition-all duration-1000 ${showPulse ? 'shadow-[0_0_50px_rgba(59,130,246,0.6)] ring-2 ring-blue-500/50' : ''}`}>
                        {/* Progress Tracker - Inside Live Preview Tab */}
                        <AnimatePresence>
                          {isGenerating && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="p-3 sm:p-4 lg:p-6 border-b border-white/10 space-y-3 sm:space-y-4"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm sm:text-base lg:text-lg font-bold text-white">Generation Progress</span>
                                <span className="text-sm sm:text-base lg:text-lg text-blue-400 font-bold">{progress}%</span>
                              </div>
                              <Progress value={progress} className="h-3 bg-gray-800" />
                              
                              <div className="flex justify-between gap-1 sm:gap-2">
                                {steps.map((step, index) => {
                                  const Icon = step.icon;
                                  const isActive = index === currentStep;
                                  const isCompleted = index < currentStep;
                                  
                                  return (
                                    <motion.div 
                                      key={step.id} 
                                      className="flex flex-col items-center gap-2"
                                      animate={{
                                        scale: isActive ? 1.1 : 1,
                                        y: isActive ? -2 : 0
                                      }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' :
                                        isCompleted ? 'bg-green-600 text-white' :
                                        'bg-gray-700 text-gray-400'
                                      }`}>
                                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                      </div>
                                      <span className={`text-xs font-medium text-center max-w-16 sm:max-w-20 ${
                                        isActive ? 'text-blue-400' :
                                        isCompleted ? 'text-green-400' :
                                        'text-gray-500'
                                      }`}>
                                        {step.label}
                                      </span>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {/* Preview Content */}
                        <div className="flex-1 flex items-center justify-center p-6">
                          <AnimatePresence mode="wait">
                            {isGenerating ? (
                              <motion.div
                                key="generating"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="text-center"
                              >
                                <div className="relative mb-6 sm:mb-8">
                                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto" />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400 animate-pulse" />
                                  </div>
                                </div>
                                
                                <motion.h4 
                                  className="text-lg sm:text-xl font-bold text-white mb-2"
                                  animate={{ opacity: [1, 0.7, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  AI is crafting your masterpiece...
                                </motion.h4>
                                <motion.p 
                                  className="text-gray-400 mb-4"
                                  key={currentStep}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  {steps[currentStep]?.label}
                                </motion.p>
                              </motion.div>
                            ) : generatedScenes.length > 0 ? (
                              <motion.div
                                key="video-preview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center"
                              >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
                                  <Video className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                </div>
                                <motion.h4 
                                  className="text-lg sm:text-xl font-bold text-white mb-2"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.6, delay: 0.2 }}
                                  style={{
                                    textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)'
                                  }}
                                >
                                  🎉 Your Ad is Ready!
                                </motion.h4>
                                <p className="text-gray-400">
                                  Check the Storyboard tab to see the detailed breakdown
                                </p>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="empty-preview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center"
                              >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                                  Live preview will appear here
                                </h4>
                                <p className="text-gray-400">
                                  Generate your ad to see the magic ✨
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent 
                      value="storyboard" 
                      className="h-full flex flex-col flex-1"
                    >
                      <motion.div 
                        className="h-full flex flex-col flex-1 min-h-[500px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnimatePresence mode="wait">
                          {generatedScenes.length > 0 ? (
                            <motion.div
                              key="storyboard"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-4"
                            >
                              <Accordion type="single" collapsible className="w-full">
                                {generatedScenes.map((scene) => (
                                  <AccordionItem key={scene.id} value={`scene-${scene.id}`} className="border-gray-700">
                                    <AccordionTrigger className="text-white hover:text-blue-400 font-bold">
                                      <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-3">
                                          <Badge className="bg-blue-600">{scene.duration}</Badge>
                                          <span className="text-left">{scene.title}</span>
                                        </div>
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setEditingScene(scene);
                                            setIsEditModalOpen(true);
                                          }}
                                          className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 mr-2"
                                        >
                                          <Edit className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300 space-y-4">
                                      <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                          <h5 className="font-semibold text-white mb-2">Visual Description</h5>
                                          <p className="text-sm">{scene.visual}</p>
                                        </div>
                                        <div>
                                          <h5 className="font-semibold text-white mb-2">Script</h5>
                                          <div className="p-4 bg-gray-800/50 rounded-xl">
                                            <p className="italic text-sm">"{scene.script}"</p>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="storyboard-placeholder"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="h-full flex items-center justify-center"
                            >
                              <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mb-6 mx-auto">
                                  <Layers className="w-10 h-10 text-gray-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                  Storyboard will appear here
                                </h4>
                                <p className="text-gray-400">
                                  Generate your ad to see the scene-by-scene breakdown
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Scene Modal */}
      <AnimatePresence>
        {isEditModalOpen && editingScene && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsEditModalOpen(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Edit className="w-5 h-5 text-blue-400" />
                    Edit Scene: {editingScene.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditModalOpen(false)}
                    className="text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Scene Title */}
                  <div>
                    <label className="text-sm font-semibold text-white mb-2 block">Scene Title</label>
                    <input
                      type="text"
                      value={editingScene.title}
                      onChange={(e) => setEditingScene({...editingScene, title: e.target.value})}
                      className="w-full bg-gray-800/50 border border-gray-600 text-white rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  {/* Duration */}
                  <div>
                    <label className="text-sm font-semibold text-white mb-2 block">Duration</label>
                    <input
                      type="text"
                      value={editingScene.duration}
                      onChange={(e) => setEditingScene({...editingScene, duration: e.target.value})}
                      className="w-full bg-gray-800/50 border border-gray-600 text-white rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="e.g., 3s"
                    />
                  </div>
                  
                  {/* Visual Description */}
                  <div>
                    <label className="text-sm font-semibold text-white mb-2 block">Visual Description</label>
                    <Textarea
                      value={editingScene.visual}
                      onChange={(e) => setEditingScene({...editingScene, visual: e.target.value})}
                      className="min-h-24 bg-gray-800/50 border-gray-600 text-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Describe the visual elements of this scene..."
                    />
                  </div>
                  
                  {/* Script */}
                  <div>
                    <label className="text-sm font-semibold text-white mb-2 block">Script</label>
                    <Textarea
                      value={editingScene.script}
                      onChange={(e) => setEditingScene({...editingScene, script: e.target.value})}
                      className="min-h-24 bg-gray-800/50 border-gray-600 text-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Enter the script/narration for this scene..."
                    />
                  </div>
                </div>
                
                {/* Modal Actions */}
                <div className="flex gap-3 mt-8 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setIsEditModalOpen(false)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleSceneEdit(editingScene)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}