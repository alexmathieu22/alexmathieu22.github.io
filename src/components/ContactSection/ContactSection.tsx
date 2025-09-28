import {Paper, Typography, Box, Button, Chip, Avatar} from "@mui/material";
import {Email, LinkedIn, GitHub} from "@mui/icons-material";
import Section from "../Section/Section";

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  darkMode: boolean;
}

const ContactSection = ({
  sectionRef,
  isVisible,
  darkMode,
}: ContactSectionProps) => (
  <Section
    title="Let's Connect"
    sectionRef={sectionRef}
    isVisible={isVisible}
    delay="0.45s"
    icon={<Email sx={{mr: 1, color: "primary.main", fontSize: 28}} />}
  >
    <Paper
      elevation={2}
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: "center",
        background: darkMode ? "#1e1e2e" : "white",
        border: `1px solid ${darkMode ? "#2d2d3d" : "#e0e0e0"}`,
      }}
    >
      <Avatar
        sx={{
          width: 64,
          height: 64,
          mx: "auto",
          mb: 3,
          backgroundColor: "primary.main",
          fontSize: "1.5rem",
        }}
      >
        <Email />
      </Avatar>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: darkMode ? "white" : "text.primary",
        }}
      >
        Let's Connect
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          mb: 4,
          color: darkMode ? "#e6edf3" : "text.secondary",
        }}
      >
        I'm always open to discussing new opportunities, innovative projects,
        and connecting with fellow professionals in the tech industry.
      </Typography>

      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          size="large"
          startIcon={<LinkedIn />}
          href="https://www.linkedin.com/in/alexmathieu22/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 500,
            borderRadius: 1,
            px: 3,
            py: 1.5,
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          Connect on LinkedIn
        </Button>

        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHub />}
          href="https://github.com/alexmathieu22"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 500,
            borderRadius: 1,
            px: 3,
            py: 1.5,
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          View GitHub
        </Button>
      </Box>

      <Box
        sx={{
          mt: 3,
          p: 3,
          backgroundColor: darkMode ? "rgba(102, 126, 234, 0.2)" : "#f8f9fa",
          borderRadius: 1,
          border: `1px solid ${
            darkMode ? "rgba(102, 126, 234, 0.3)" : "#e9ecef"
          }`,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            color: darkMode ? "#e6edf3" : "text.secondary",
          }}
        >
          Open to contribute and help on open source / exciting projects! 🚀
        </Typography>
      </Box>
    </Paper>
  </Section>
);

export default ContactSection;
