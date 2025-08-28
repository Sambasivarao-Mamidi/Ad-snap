import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { HomePage } from '@/components/HomePage';
import { StudioPage } from '@/components/StudioPage';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="adsnap-theme">
      <Router>
  <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/studio" element={<StudioPage />} />
            </Routes>
          </motion.div>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;