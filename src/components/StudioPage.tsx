import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Play, 
  Sparkles, 
  Zap, 
  Brain, 
  Palette, 
  Clock, 
  Music, 
  Video, 
  Download, 
  Copy,
  Star,
  ArrowRight,
  Wand2,
  Target,
  Users,
  TrendingUp,
  Heart,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Home,
  FolderOpen,
  Settings,
  Menu,
  X,
  Eye,
  FileText,
  Layers
} from 'lucide-react';

export function StudioPage() {
  const navigate = useNavigate();
  const [scriptTone, setScriptTone] = useState('');
  const [sceneCount, setSceneCount] = useState([3]);
  const [musicStyle, setMusicStyle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedScenes, setGeneratedScenes] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const steps = [
    { id: 'script', label: '📝 Writing script', icon: FileText },
    { id: 'storyboard', label: '🎭 Building storyboard', icon: Layers },
    { id: 'music', label: '🎶 Adding music', icon: Music },
    { id: 'video', label: '📹 Finalizing video', icon: Video }
  ];

  // Handle swipe gestures for mobile tab navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeTab === 'preview') {
      setActiveTab('storyboard');
    }
    if (isRightSwipe && activeTab === 'storyboard') {
      setActiveTab('preview');
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    setCurrentStep(0);
    setGeneratedScenes([]);

    // Simulate AI generation with progress
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 80));
      setProgress(i);
      
      if (i === 25) setCurrentStep(1);
      else if (i === 50) setCurrentStep(2);
      else if (i === 75) setCurrentStep(3);
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

    setTimeout(() => {
      setIsGenerating(false);
      setProgress(0);
      setCurrentStep(0);
    }, 500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-white/10 z-50 md:relative md:translate-x-0 md:w-64"
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AdSnap
                </h1>
                <p className="text-xs text-gray-400">AI Studio</p>
              </div>
            </motion.div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { icon: Home, label: 'Home', onClick: () => navigate('/') },
              { icon: FolderOpen, label: 'Previous Projects', onClick: () => setProjectsExpanded(!projectsExpanded), expandable: true },
              { icon: Sparkles, label: 'Studio', onClick: () => {}, active: true },
              { icon: Settings, label: 'Settings', onClick: () => {} }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <motion.button
                    onClick={item.onClick}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      item.active 
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.expandable && (
                      <motion.div
                        animate={{ rotate: projectsExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      </motion.div>
                    )}
                  </motion.button>
                  
                  {item.expandable && (
                    <AnimatePresence>
                      {projectsExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-8 mt-2 space-y-1 overflow-hidden"
                        >
                          {[
                            { name: 'TechFlow Product Launch', date: '2 days ago', status: 'completed' },
                            { name: 'StartupLaunch Brand Story', date: '1 week ago', status: 'completed' },
                            { name: 'CreativeHub App Promo', date: '2 weeks ago', status: 'completed' },
                            { name: 'BrandForge Event Invite', date: '3 weeks ago', status: 'completed' }
                          ].map((project) => (
                            <motion.button
                              key={project.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-gray-300 rounded-lg hover:bg-white/5 transition-colors group"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{project.name}</span>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Badge className="text-xs bg-green-600/20 text-green-400 border-green-500/30">
                                    {project.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-xs text-gray-600 mt-1">{project.date}</div>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="md:hidden text-gray-400 hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-extrabold text-white">
                  AdSnap Studio — Your Space for Creative Ad Generation
                </h1>
                <p className="text-gray-400 text-sm font-medium">
                  Create stunning ads with AI-powered precision
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/5 backdrop-blur-sm font-bold"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </header>

        {/* Studio Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Creation Panel */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                  {/* Progress Tracker */}
                  {isGenerating && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8 space-y-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-white">Generation Progress</span>
                        <span className="text-lg text-blue-400 font-bold">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-4 bg-gray-800" />
                      
                      <div className="flex justify-between">
                        {steps.map((step, index) => {
                          const Icon = step.icon;
                          const isActive = index === currentStep;
                          const isCompleted = index < currentStep;
                          
                          return (
                            <div key={step.id} className="flex flex-col items-center gap-2">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isActive ? 'bg-blue-600 text-white scale-110 shadow-lg shadow-blue-500/50' :
                                isCompleted ? 'bg-green-600 text-white' :
                                'bg-gray-700 text-gray-400'
                              }`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <span className={`text-sm font-medium text-center ${
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

                  {/* Script Input */}
                  <div className="space-y-4 mb-8">
                    <label className="text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      Describe Your Ad Concept
                    </label>
                    <Textarea
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
                    disabled={isGenerating}
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
              >
                <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl h-full shadow-2xl">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-2xl p-2 max-w-md">
                        <TabsTrigger value="preview" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold transition-all duration-300">
                          <Eye className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Live Preview</span>
                          <span className="sm:hidden">Preview</span>
                        </TabsTrigger>
                        <TabsTrigger value="storyboard" className="rounded-xl data-[state=active]:bg-purple-600 data-[state=active]:text-white font-bold transition-all duration-300">
                          <Layers className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Storyboard</span>
                          <span className="sm:hidden">Story</span>
                        </TabsTrigger>
                      </TabsList>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <TabsContent value="preview" className="flex-1">
                      <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl flex items-center justify-center min-h-96 relative overflow-hidden">
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
                              
                              <h4 className="text-xl font-bold text-white mb-2">
                                AI is crafting your masterpiece...
                              </h4>
                              <p className="text-gray-400 mb-4">
                                {steps[currentStep]?.label}
                              </p>
                            </motion.div>
                          ) : generatedScenes.length > 0 ? (
                            <motion.div
                              key="video-preview"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mb-6 mx-auto">
                                <Video className="w-10 h-10 text-gray-400" />
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                Your generated ad will appear here
                              </h4>
                              <p className="text-gray-400">
                                Fill out the form to see the magic happen
                              </p>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="empty-preview"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-center"
                            >
                              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mb-6 mx-auto">
                                <Play className="w-10 h-10 text-gray-400" />
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                Live preview will appear here
                              </h4>
                              <p className="text-gray-400">
                                Generate your ad to see the magic ✨
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </TabsContent>

                    <TabsContent 
                      value="storyboard" 
                      className="flex-1"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <motion.div 
                        className="h-full"
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
                                      <div className="flex items-center gap-3">
                                        <Badge className="bg-blue-600">{scene.duration}</Badge>
                                        <span className="text-left">{scene.title}</span>
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

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}