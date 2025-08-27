# AdSnap - AI-Powered Ad Creation Studio

A premium, futuristic React application for creating AI-powered video advertisements with a dark theme, neon accents, and glassmorphism design.

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Ad Generation** - Create professional video ads with AI assistance
- **Multi-Page Navigation** - Seamless React Router integration (Home ↔ Studio)
- **Real-time Progress Tracking** - Animated progress indicators during ad generation
- **Scene-by-Scene Storyboard** - Collapsible accordion view of ad scenes

### 🎨 Design System
- **Premium Dark Theme** - Deep gradients with neon blue (#3b82f6) and purple (#a855f7) accents
- **Glassmorphism Effects** - Backdrop-blur cards with subtle transparency
- **Gradient Typography** - Extrabold headings with glow effects
- **Smooth Animations** - Framer Motion powered transitions throughout

### 📱 Mobile Experience
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Swipeable Tabs** - Touch gesture navigation between Live Preview and Storyboard
- **Collapsible Sidebar** - Hamburger menu with expandable Previous Projects
- **Touch-Optimized UI** - Optimized for mobile interactions

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adsnap-studio.git
cd adsnap-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: TailwindCSS
- **UI Components**: Radix UI (shadcn/ui)
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── HomePage.tsx        # Landing page with hero and projects
│   ├── StudioPage.tsx      # Main studio interface
│   └── theme-provider.tsx  # Dark theme provider
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── main.tsx               # Application entry point
```

## 🎮 Usage

### Navigation
- **Home Page**: Click "🚀 Start Creating" to navigate to the Studio
- **Studio Page**: Use "Back to Home" button or sidebar navigation
- **Sidebar**: Access Previous Projects and navigation menu

### Creating Ads
1. Fill out the ad creation form with your requirements
2. Select script tone, scene count, and music style
3. Click "Generate My Ad" to start the AI creation process
4. Monitor real-time progress with animated status updates
5. View results in Live Preview or Storyboard tabs

### Mobile Features
- Swipe left/right between tabs on mobile devices
- Tap hamburger menu to access sidebar navigation
- Expand Previous Projects to view project history

## 🎨 Design Tokens

### Colors
- **Primary Blue**: #3b82f6
- **Primary Purple**: #a855f7
- **Background**: Deep gray gradients
- **Text**: White with gray variants
- **Accents**: Neon blue/purple gradients

### Typography
- **Headings**: Extrabold with gradient text and glow effects
- **Body**: Medium weight with proper contrast
- **Interactive**: Bold with hover states

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Components
- **HomePage**: Landing page with hero section and project showcase
- **StudioPage**: Main creation interface with sidebar and tabs
- **UI Components**: Reusable components from shadcn/ui library

## 🚀 Deployment

The application is built with Vite and can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://radix-ui.com/) for accessible UI components
- [Framer Motion](https://framer.com/motion/) for smooth animations
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
