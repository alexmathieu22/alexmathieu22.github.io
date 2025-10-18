import {Typography, Box, Avatar, Chip} from "@mui/material";
import {Person, Code} from "@mui/icons-material";
import Section from "../Section/Section";

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  darkMode: boolean;
}

const AboutSection = ({sectionRef, isVisible, darkMode}: AboutSectionProps) => (
  <Section
    title="About Me 👨‍💻"
    sectionRef={sectionRef}
    isVisible={isVisible}
    delay="0.1s"
    icon={<Person sx={{color: "primary.main", fontSize: 28}} />}
  >
    <Box sx={{textAlign: "center"}}>
      {/* Professional avatar */}
      <Box sx={{mb: 3}}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            background: "primary.main",
            fontSize: "2.5rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          👨‍💻
        </Avatar>
      </Box>

      <Typography
        variant="body1"
        color={darkMode ? "white" : "text.primary"}
        paragraph
        sx={{
          fontSize: "1.2rem",
          lineHeight: 1.8,
          textAlign: "center",
          fontWeight: 300,
          mb: 3,
        }}
      >
        I'm a Computer Science professional focused on building scalable
        platform solutions. Currently working at Bell, where I develop
        infrastructure tools and enhance developer experiences through
        systematic engineering approaches.
      </Typography>

      {/* Professional skills */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: darkMode ? "white" : "text.primary",
        }}
      >
        Core Competencies ⚡
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Chip
          icon={<Code />}
          label="🏗️ Platform Engineering"
          color="primary"
          sx={{
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 2px 8px rgba(102, 126, 234, 0.2)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
        <Chip
          icon={<Code />}
          label="🏛️ System Architecture"
          color="secondary"
          sx={{
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 2px 8px rgba(156, 39, 176, 0.2)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
        <Chip
          label="🚀 DevOps & Automation"
          color="success"
          sx={{
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 2px 8px rgba(76, 175, 80, 0.2)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
      </Box>
    </Box>
  </Section>
);

export default AboutSection;
