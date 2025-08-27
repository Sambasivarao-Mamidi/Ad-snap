// Remove unused React import since we're using JSX transform
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MoreVertical, FolderOpen } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
  status: string;
  description: string;
  scenes: number;
  duration: string;
  icon: string;
}

interface ProjectsSidebarProps {
  isExpanded: boolean;
  onProjectSelect: (project: Project) => void;
  isMobile?: boolean;
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProjectsSidebar({ isExpanded, onProjectSelect, isMobile = false, onClose, onMouseEnter, onMouseLeave }: ProjectsSidebarProps) {
  // Mock previous projects data
  const previousProjects: Project[] = [
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
      title: 'StartupLaunch Brand Story',
      date: '1 week ago',
      thumbnail: 'bg-gradient-to-br from-green-500 to-teal-600',
      status: 'completed',
      description: 'Dynamic startup journey with innovative solutions showcase',
      scenes: 4,
      duration: '20s',
      icon: '🚀'
    },
    {
      id: 3,
      title: 'CreativeHub App Promo',
      date: '2 weeks ago',
      thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-600',
      status: 'completed',
      description: 'Creative app interface with vibrant animations',
      scenes: 3,
      duration: '12s',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'BrandForge Event Invite',
      date: '3 weeks ago',
      thumbnail: 'bg-gradient-to-br from-orange-500 to-red-600',
      status: 'completed',
      description: 'Professional event invitation with elegant design',
      scenes: 2,
      duration: '10s',
      icon: '🎪'
    },
    {
      id: 5,
      title: 'InnovateTech Demo',
      date: '1 month ago',
      thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      status: 'completed',
      description: 'Technology demonstration with futuristic elements',
      scenes: 5,
      duration: '25s',
      icon: '⚡'
    },
    {
      id: 6,
      title: 'EcoGreen Campaign',
      date: '1 month ago',
      thumbnail: 'bg-gradient-to-br from-emerald-500 to-green-600',
      status: 'completed',
      description: 'Sustainable products with nature-inspired visuals',
      scenes: 4,
      duration: '18s',
      icon: '🌱'
    }
  ];

  const handleProjectClick = (project: Project) => {
    onProjectSelect(project);
    if (isMobile && onClose) {
      onClose();
    }
  };

  if (isMobile) {
    return (
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Mobile Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={onClose}
            />
            
            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.4 
              }}
              className="fixed left-0 top-0 h-full w-full bg-white/5 backdrop-blur-lg border-r border-gradient-to-b from-blue-500/30 to-purple-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-50"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-blue-400" />
                    <h2 className="text-lg font-bold text-white">📂 Previous Projects</h2>
                  </div>
                  {onClose && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="text-gray-400 hover:text-white"
                    >
                      ✕
                    </Button>
                  )}
                </div>
                
                {/* Projects List */}
                <div className="flex-1 overflow-hidden">
                  <div className="space-y-3 overflow-y-auto h-full pr-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
                    {previousProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        className="group cursor-pointer"
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: 2,
                          rotateX: 1
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:bg-white/10">
                          {/* Thumbnail */}
                          <div className="relative mb-3 overflow-hidden rounded-lg">
                            <div className={`w-full h-16 ${project.thumbnail} flex items-center justify-center relative`}>
                              <div className="text-2xl">{project.icon}</div>
                              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                            </div>
                            <div className="absolute top-2 right-2">
                              <Badge className="text-xs bg-green-600/80 text-green-100 border-0">
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                          
                          {/* Project Info */}
                          <div className="space-y-2">
                            <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <Calendar className="w-3 h-3" />
                              <span>{project.date}</span>
                            </div>
                            
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-500">{project.scenes} scenes</span>
                              <span className="text-gray-500">{project.duration}</span>
                            </div>
                            
                            {/* Hover Actions */}
                            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <Button size="sm" variant="ghost" className="text-xs text-blue-400 hover:text-blue-300 p-1 h-auto">
                                Load Project
                              </Button>
                              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1 h-auto">
                                <MoreVertical className="w-3 h-3" />
                              </Button>
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
    );
  }

  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isExpanded ? 260 : 60
      }}
      transition={{ 
        type: "spring", 
        damping: 25, 
        stiffness: 200,
        duration: 0.4 
      }}
      className="h-full bg-white/5 backdrop-blur-lg border-r border-gradient-to-b from-blue-500/30 to-purple-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex flex-col"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Collapsed State - Icons Only */}
      {!isExpanded && (
        <div className="p-4 flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <FolderOpen className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            {previousProjects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => handleProjectClick(project)}
              >
                {project.icon}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Expanded State - Full Content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-6 h-full flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <FolderOpen className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold text-white">📂 Previous Projects</h2>
          </div>
          
          {/* Projects List */}
          <div className="flex-1 overflow-hidden">
            <div className="space-y-3 overflow-y-auto h-full pr-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
              {previousProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 1
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:bg-white/10">
                    {/* Thumbnail */}
                    <div className="relative mb-3 overflow-hidden rounded-lg">
                      <div className={`w-full h-16 ${project.thumbnail} flex items-center justify-center relative`}>
                        <div className="text-2xl">{project.icon}</div>
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge className="text-xs bg-green-600/80 text-green-100 border-0">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{project.scenes} scenes</span>
                        <span className="text-gray-500">{project.duration}</span>
                      </div>
                      
                      {/* Hover Actions */}
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Button size="sm" variant="ghost" className="text-xs text-blue-400 hover:text-blue-300 p-1 h-auto">
                          Load Project
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1 h-auto">
                          <MoreVertical className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
