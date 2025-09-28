import {useState} from "react";
import {Box, ThemeProvider, CssBaseline, Fab} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";

// Components
import LandingPage from "./components/LandingPage/LandingPage";
import TerraformPlanSection from "./components/TerraformPlanSection/TerraformPlanSection";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AboutSection from "./components/AboutSection/AboutSection";
import BellSection from "./components/BellSection/BellSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";

// Hooks
import useScrollAnimation from "./hooks/useScrollAnimation";

// Theme
import {getTheme} from "./theme/theme";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const theme = getTheme(darkMode ? "dark" : "light");

  // Scroll animation refs - header starts visible since it's likely in view on load
  const [headerRef, headerVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [bellSectionRef, bellSectionVisible] = useScrollAnimation();
  const [experienceRef, experienceVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  const toggleTheme = (): void => {
    setDarkMode(!darkMode);
  };

  const scrollToContent = (): void => {
    // Add a small delay to ensure the DOM is ready and avoid any conflicts
    setTimeout(() => {
      const terraformSection = document.getElementById("terraform-section");
      if (terraformSection) {
        terraformSection.scrollIntoView({behavior: "smooth", block: "start"});
      }
    }, 100);
  };

  const scrollToMainContent = (): void => {
    // Add a small delay to ensure the DOM is ready and avoid any conflicts
    setTimeout(() => {
      const contentSection = document.getElementById("main-content");
      if (contentSection) {
        contentSection.scrollIntoView({behavior: "smooth", block: "start"});
      }
    }, 100);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        }}
      >
        {/* Theme Toggle Button */}
        <Fab
          color="primary"
          aria-label="toggle theme"
          onClick={toggleTheme}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </Fab>

        {/* Terminal Landing Page */}
        <LandingPage darkMode={darkMode} onScrollToContent={scrollToContent} />

        {/* Terraform Plan Section */}
        <Box id="terraform-section">
          <TerraformPlanSection
            darkMode={darkMode}
            onScrollToContent={scrollToMainContent}
          />
        </Box>

        {/* Main Content */}
        <Box
          id="main-content"
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 4,
            px: 0,
          }}
        >
          {/* Header */}
          <HeaderSection headerRef={headerRef} isVisible={headerVisible} />

          {/* About Section */}
          <AboutSection
            sectionRef={aboutRef}
            isVisible={aboutVisible}
            darkMode={darkMode}
          />

          {/* Bell Platform Engineer Section */}
          <BellSection
            sectionRef={bellSectionRef}
            isVisible={bellSectionVisible}
            darkMode={darkMode}
          />

          {/* Experience Section */}
          <ExperienceSection
            sectionRef={experienceRef}
            isVisible={experienceVisible}
          />

          {/* Contact Section */}
          <ContactSection
            sectionRef={contactRef}
            isVisible={contactVisible}
            darkMode={darkMode}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
