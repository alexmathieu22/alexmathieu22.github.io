import {Box, Paper, Typography, Avatar} from "@mui/material";
import {Business} from "@mui/icons-material";
import Section from "../Section/Section";

interface BellSectionProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  darkMode: boolean;
}

const BellSection = ({sectionRef, isVisible, darkMode}: BellSectionProps) => (
  <Section
    title="Platform Engineer at Bell"
    sectionRef={sectionRef}
    isVisible={isVisible}
    delay="0.15s"
    icon={<Business sx={{mr: 1, color: "primary.main", fontSize: 28}} />}
  >
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        background: darkMode ? "#1e1e2e" : "white",
        border: `1px solid ${darkMode ? "#2d2d3d" : "#e0e0e0"}`,
      }}
    >
      {/* Subtitle */}
      <Box textAlign="center" mb={3}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            fontWeight: 400,
          }}
        >
          Building the future of telecommunications infrastructure 🚀
        </Typography>
      </Box>

      {/* Bell Logo */}
      <Paper
        elevation={2}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 2,
          textAlign: "center",
          background: darkMode ? "#2d2d3d" : "#f8f9fa",
          border: `1px solid ${darkMode ? "#3d3d4d" : "#e9ecef"}`,
        }}
      >
        <Avatar
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "#dc2626",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            boxShadow: "0 2px 8px rgba(220, 38, 38, 0.2)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: "2rem",
            }}
          >
            B
          </Typography>
        </Avatar>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: darkMode ? "white" : "#1e293b",
            mb: 1,
          }}
        >
          Bell Canada 🇨🇦
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mb: 1}}>
          Canada's largest telecommunications company
        </Typography>
      </Paper>

      {/* Expertise Areas */}
      <Box sx={{mb: 2}}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            textAlign: "center",
            color: darkMode ? "white" : "text.primary",
          }}
        >
          Areas of Expertise 🎯
        </Typography>

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"},
            gap: 2,
          }}
        >
          {/* Infrastructure Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              textAlign: "center",
              background: darkMode ? "#2d2d3d" : "white",
              border: `1px solid ${darkMode ? "#3d3d4d" : "#e0e0e0"}`,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                fontWeight: 600,
                color: darkMode ? "white" : "text.primary",
              }}
            >
              🏗️ Infrastructure & Platforms
            </Typography>
            <Typography variant="body2" sx={{color: "text.secondary"}}>
              Building scalable platform infrastructure for enterprise
              applications
            </Typography>
          </Paper>

          {/* Developer Tools Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              textAlign: "center",
              background: darkMode ? "#2d2d3d" : "white",
              border: `1px solid ${darkMode ? "#3d3d4d" : "#e0e0e0"}`,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                fontWeight: 600,
                color: darkMode ? "white" : "text.primary",
              }}
            >
              ⚡ Developer Experience
            </Typography>
            <Typography variant="body2" sx={{color: "text.secondary"}}>
              Creating tools to improve developer experience and productivity
            </Typography>
          </Paper>

          {/* CI/CD Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              textAlign: "center",
              background: darkMode ? "#2d2d3d" : "white",
              border: `1px solid ${darkMode ? "#3d3d4d" : "#e0e0e0"}`,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                fontWeight: 600,
                color: darkMode ? "white" : "text.primary",
              }}
            >
              🚀 Software Delivery
            </Typography>
            <Typography variant="body2" sx={{color: "text.secondary"}}>
              Enabling efficient software delivery across the organization
            </Typography>
          </Paper>

          {/* Cloud Platforms Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              textAlign: "center",
              background: darkMode ? "#2d2d3d" : "white",
              border: `1px solid ${darkMode ? "#3d3d4d" : "#e0e0e0"}`,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                fontWeight: 600,
                color: darkMode ? "white" : "text.primary",
              }}
            >
              ☁️ Cloud Technologies
            </Typography>
            <Typography variant="body2" sx={{color: "text.secondary"}}>
              Working with modern cloud technologies and containerization
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Paper>
  </Section>
);

export default BellSection;
