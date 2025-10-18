import {Box, Typography} from "@mui/material";

interface SectionProps {
  title: React.ReactNode;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  delay?: string;
  maxWidth?: string;
}

const Section = ({
  title,
  subtitle,
  icon,
  children,
  sectionRef,
  isVisible,
  delay = "0.1s",
  maxWidth = "600px",
}: SectionProps) => (
  <Box
    ref={sectionRef}
    sx={{
      width: "100%",
      mb: 12,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionDelay: isVisible ? delay : "0s",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Title Section */}
    <Box
      sx={{
        width: "100%",
        mb: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Title container */}
      <Box
        sx={{
          textAlign: "center",
          px: 3,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          {icon}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: {xs: "1.75rem", md: "2.4rem"},
              "& .emoji": {
                fontSize: {xs: "1.9rem", md: "2.6rem"},
              },
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Optional Subtitle */}
        {subtitle && (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{fontStyle: "italic", textAlign: "center"}}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>

    {/* Content Section - Centered */}
    <Box
      sx={{
        maxWidth: maxWidth,
        mx: "auto",
        px: 3,
        width: "100%",
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Section;
