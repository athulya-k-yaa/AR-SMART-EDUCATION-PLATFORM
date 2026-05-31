# AR Smart Education Platform
## 3D WebAR Platform for Science Learning - TCS Internship 2026

![AR Demo](screenshots/ar-demo.gif)
*3D Solar System + Human Anatomy models visualized in browser using WebAR*

### Overview
Web-based AR platform for interactive 3D visualization of Human Anatomy, Molecular Structures, Physics Concepts, and Solar System. Built during Tata Consultancy Services Internship Program 2026.

**Problem:** Students struggle to understand complex 3D concepts from 2D textbook diagrams  
**Solution:** Marker-based WebAR to visualize organs, molecules, physics simulations, planetary systems directly in browser - no app install needed  
**Impact:** Improves concept retention through interactive 3D exploration vs static learning

### Key Features
- **3D Human Anatomy:** Interactive heart, brain, skeleton models with zoom/rotate
- **Molecular Visualization:** H2O, CO2, and complex molecular structures in 3D
- **Physics Simulations:** Force vectors, motion, and mechanics visualized in AR
- **Solar System:** 3D planets with orbits, rotation, and scale visualization in AR
- **WebAR Technology:** Works on any browser with camera - Chrome, Safari, Edge
- **Marker-based Tracking:** Stable AR experience using AR.js + WebXR API
- **Interactive UI:** Built with React for smooth user experience

### Tech Stack
**Frontend:** React + Vite, Three.js/WebGL for 3D rendering  
**AR:** WebXR API, AR.js for marker tracking and AR scenes  
**Backend:** Node.js for server logic  
**Computer Vision:** OpenCV.js for image processing and marker detection  
**Data:** 3D models - Human organs, Molecular structures, Solar System, Physics simulations

### Results
- 6+ 3D educational modules built and deployed including Solar System
- 60fps rendering performance on standard laptops
- Zero app installation - pure web-based AR solution
- Demoed and reviewed by TCS mentor panel

### How to Run
```bash
npm install
npm run dev
