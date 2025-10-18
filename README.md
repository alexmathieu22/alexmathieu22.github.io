# Alexandre Mathieu - Software Engineer Portfolio 👨‍💻

A modern, interactive portfolio showcasing my experience as a Platform Engineer at Bell Canada. Built with React, TypeScript, and Material-UI featuring a unique terminal-style landing page with realistic keyboard sounds and smooth scroll animations.

## ✨ Features

- **🖥️ Terminal Landing Page**: Interactive terminal interface with realistic keyboard sound effects
- **🌙 Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎵 Audio Experience**: Realistic mechanical keyboard sounds during typing animations
- **🎯 Smooth Animations**: Staggered section animations with professional scroll effects
- **💼 Professional Sections**:
  - Terminal-style landing page with interactive animations
  - Terraform plan section showcasing infrastructure work
  - About Me with core competencies
  - Bell Canada Platform Developer role showcase
  - Experience carousel with career progression
  - Contact information and collaboration opportunities

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn package manager

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/test-portfolio.git
   cd test-portfolio
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/` to view the portfolio

### Build for Production

```bash
yarn build
```

## 🚀 Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings:

   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Automatic Deployment**:

   - Every push to the `main` branch will automatically trigger a deployment
   - The workflow builds the project and deploys to GitHub Pages
   - Your portfolio will be available at: `https://alexmathieu22.github.io/`

3. **Manual Deployment**:
   - Go to Actions tab in your GitHub repository
   - Click "Deploy to GitHub Pages" workflow
   - Click "Run workflow" button

### Local Development

For local development, the base URL is automatically handled by Vite.

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Material-UI (MUI) v5 for professional components
- **Styling**: Emotion/styled for dynamic theming
- **Audio**: Web Audio API for realistic keyboard sound effects
- **Icons**: Material Icons and custom emoji decorations
- **Animations**: CSS-in-JS transitions and transforms

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection/          # Personal introduction and skills
│   ├── ContactSection/        # Contact information
│   ├── ExperienceSection/     # Career experience carousel
│   ├── HeaderSection/         # Main portfolio header
│   ├── LandingPage/           # Terminal-style landing
│   ├── Section/               # Reusable section wrapper
│   └── TerraformPlanSection/  # Infrastructure work showcase
├── hooks/
│   └── useScrollAnimation.ts  # Custom scroll animation hook
├── theme/
│   └── theme.ts              # Material-UI theme configuration
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.css                 # Global styles and animations
```

## 🎯 Professional Focus

This portfolio highlights my expertise in:

- **🏗️ Platform Engineering**: Building scalable infrastructure solutions
- **🏛️ System Architecture**: Designing robust, maintainable systems
- **🚀 DevOps & Automation**: Streamlining development and deployment processes
- **☁️ Cloud Technologies**: Working with modern cloud platforms and containerization

## 📬 Contact

**Alexandre Mathieu**  
Platform Developer at Bell Canada

- 💼 LinkedIn: https://www.linkedin.com/in/alexmathieu22/
- 🌟 GitHub: https://github.com/alexmathieu22

---

_Built with ❤️ using React, TypeScript, and Material-UI_
