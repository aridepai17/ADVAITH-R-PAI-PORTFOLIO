# Advaith R Pai - Interactive MacOSPortfolio

A cutting-edge, interactive portfolio website that meticulously replicates the MacOS desktop experience within a modern web application. This portfolio showcases advanced React development skills through an innovative desktop metaphor that provides visitors with an unforgettable and engaging way to explore professional work, projects, and skills.

![Portfolio Preview](pics/homepage.png)

## 🌟 Overview

This portfolio transforms the traditional web experience into an interactive desktop environment, complete with draggable windows, a functional dock, and authentic MacOS-style interactions. Each "application" in the desktop represents different aspects of my professional portfolio - from project showcases to technical skills and contact information.

## ✨ Key Features

### 🖥️ Authentic MacOS Experience
- **Draggable & Resizable Windows**: Full window management system with smooth GSAP animations
- **Interactive Dock**: Custom dock with hover effects and application launching
- **Z-Index Layering**: Professional window focus and stacking management
- **System Tray**: Complete with functional icons and theme switching

### 📁 Rich Content Applications
- **Portfolio (Finder)**: Hierarchical project organization with folder navigation
- **Articles (Safari)**: Blog posts and technical articles viewer
- **Gallery (Photos)**: Image gallery with album organization and lightbox
- **Skills (Terminal)**: Technical skills displayed in terminal-style interface
- **Contact**: Interactive contact form and social links
- **Resume Viewer**: Built-in PDF viewer for resume documents

### 🎨 Design & Interactions
- **Dark/Light Mode**: Seamless theme switching with persistent state
- **Responsive Design**: Fully responsive across all device sizes
- **Micro-interactions**: Hover states, transitions, and attention to detail
- **Performance Optimized**: Smooth 60fps animations with GSAP

## 🛠 Technical Architecture

### Core Technologies
- **React 19**: Latest React features with concurrent rendering
- **Vite 7**: Lightning-fast development and optimized builds
- **Tailwind CSS 4**: Utility-first styling with modern features
- **TypeScript**: Type-safe development (via jsconfig)

### State Management
- **Zustand**: Lightweight, performant state management
- **Immer**: Immutable state updates with ease
- **Custom Hooks**: Reusable logic for window management and interactions

### Animation & Interactions
- **GSAP**: Professional-grade animations and draggable functionality
- **React Spring**: Additional smooth transitions
- **CSS Transforms**: Hardware-accelerated animations

### UI Components
- **Lucide React**: Modern, consistent icon system
- **React PDF**: In-app PDF rendering
- **React Tooltip**: Contextual help and information

### Development Tools
- **ESLint**: Code quality and consistency
- **Path Aliases**: Clean import statements (#components, #store, etc.)
- **Hot Module Replacement**: Instant development feedback

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Dock.jsx         # Interactive dock component
│   ├── Navbar.jsx       # Top navigation bar
│   ├── Welcome.jsx      # Welcome screen
│   ├── Home.jsx         # Home window
│   └── WindowControls.jsx # Window control buttons
├── windows/             # Desktop application windows
│   ├── Finder.jsx       # Portfolio/projects viewer
│   ├── Safari.jsx       # Articles/blog viewer
│   ├── Photos.jsx       # Image gallery
│   ├── Terminal.jsx     # Skills display
│   ├── Contact.jsx      # Contact form
│   ├── Resume.jsx       # PDF resume viewer
│   └── index.js         # Window exports
├── store/               # State management
│   ├── window.js        # Window state management
│   ├── theme.js         # Theme switching logic
│   └── location.js      # File system navigation
├── constants/           # Application configuration
│   └── index.js         # All app constants and data
├── hoc/                 # Higher-order components
│   └── WindowWrapper.jsx # Window wrapper with drag functionality
└── styles/              # CSS and styling
    ├── index.css        # Main styles
    ├── dark.css         # Dark theme styles
    └── icon.css         # Icon-specific styles
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 18.0.0+** (for modern React features)
- **npm 7+** or **yarn 1.22+**

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/aridepai17/ADVAITH-R-PAI-PORTFOLIO.git
   cd ADVAITH-R-PAI-PORTFOLIO
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to experience the portfolio

### Production Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The optimized production bundle will be generated in the `dist/` directory.

## 🎯 Featured Projects

The portfolio showcases several notable projects:

### **DijkstraFlow**
- Interactive algorithm visualization platform
- Real-time Dijkstra's algorithm demonstrations
- Built for educational purposes and interview preparation
- **Live Demo**: https://dijkstraflowalgo.vercel.app/

### **Selectra** 
- AI-powered resume analysis tool
- Instant feedback on keywords, formatting, and impact
- Built with Next.js and Tailwind CSS
- **Live Demo**: https://selectra-nine.vercel.app/

### **Caffiend**
- Coffee consumption and spending tracker
- Caffeine level monitoring and analytics
- Personal wellness and habit tracking application
- **Live Demo**: https://caffiendcoffeetracker.netlify.app/

## 🔧 Customization Guide

### Adding New Applications

1. **Create Window Component**
   ```jsx
   // src/windows/NewApp.jsx
   import WindowWrapper from "#hoc/WindowWrapper";
   
   const NewApp = () => {
     return (
       <WindowWrapper target="newapp">
         {/* Your app content */}
       </WindowWrapper>
     );
   };
   export default NewApp;
   ```

2. **Register in Constants**
   ```js
   // src/constants/index.js
   const dockApps = [
     // ... existing apps
     {
       id: "newapp",
       name: "New App",
       icon: "newapp.png",
       canOpen: true,
     },
   ];
   ```

3. **Add to Window Config**
   ```js
   const WINDOW_CONFIG = {
     // ... existing windows
     newapp: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   };
   ```

### Theme Customization

Modify CSS variables in `src/styles/dark.css`:

```css
:root.dark-mode {
  --bg-primary: #000000;
  --bg-secondary: #1a1a1a;
  --text-primary: #ffffff;
  --accent: #007aff;
}
```

## 🎨 Design System

### Color Palette
- **Primary**: MacOS Blue (#007AFF)
- **Secondary**: System Gray (#8E8E93)
- **Background**: Dynamic (light/dark mode)
- **Accent**: Hover states and interactions

### Typography
- **System Font**: San Francisco (fallback to system-ui)
- **Monospace**: SF Mono (for terminal/code display)
- **Sizes**: Responsive scaling from mobile to desktop

### Animation Principles
- **Duration**: 200-300ms for transitions
- **Easing**: Cubic bezier for natural movement
- **Performance**: 60fps target with GPU acceleration

## 📱 Browser Compatibility

- **Chrome/Edge**: Full support (recommended)
- **Safari**: Full support with optimized performance
- **Firefox**: Full support
- **Mobile**: Responsive design with touch interactions

## 🤝 Contributing

While this is a personal portfolio, I appreciate feedback and suggestions:

1. **Report Issues**: Use GitHub Issues for bugs or problems
2. **Feature Requests**: Open an issue with the "enhancement" label
3. **Security**: Please report security vulnerabilities privately

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Get in Touch

- **GitHub**: [@aridepai17](https://github.com/aridepai17)
- **Twitter/X**: [@rpaiv17](https://x.com/rpaiv17)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- **GSAP Team**: For creating the best animation library on the web
- **Tailwind CSS**: For revolutionizing utility-first CSS
- **React Team**: For building such an amazing framework
- **Vercel**: For providing excellent hosting solutions
- **MacOS Design Team**: For creating an iconic user interface that inspired this project

---

*Built with passion, coffee, and countless hours of refinement. This portfolio represents my dedication to creating exceptional user experiences through thoughtful design and clean, maintainable code.*