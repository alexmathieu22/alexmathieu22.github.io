import {Box, Typography, Chip} from "@mui/material";

interface HeaderSectionProps {
  headerRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

const HeaderSection = ({headerRef, isVisible}: HeaderSectionProps) => (
  <Box
    ref={headerRef}
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative",
      px: 2,
    }}
  >
    <Typography
      variant="h1"
      component="h1"
      gutterBottom
      sx={{
        fontWeight: 700,
        mb: 4,
        color: "text.primary",
        fontSize: {xs: "2.5rem", sm: "3.5rem", md: "4.5rem"},
      }}
    >
      Hi, I'm Alexandre
    </Typography>

    <Box sx={{mb: 4}}>
      <Typography
        variant="h4"
        color="text.secondary"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 400,
          fontSize: {xs: "1.5rem", sm: "2rem", md: "2.5rem"},
        }}
      >
        Platform Engineer at Bell
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          maxWidth: "600px",
        }}
      >
        <Chip
          label="Platform Engineering"
          color="primary"
          variant="outlined"
          sx={{
            fontSize: "1rem",
            py: 2,
            px: 1,
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 2px 8px rgba(102, 126, 234, 0.2)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
        <Chip
          label="DevOps & Automation"
          color="secondary"
          variant="outlined"
          sx={{
            fontSize: "1rem",
            py: 2,
            px: 1,
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 2px 8px rgba(156, 39, 176, 0.2)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
        <Chip
          label="System Architecture"
          color="success"
          variant="outlined"
          sx={{
            fontSize: "1rem",
            py: 2,
            px: 1,
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 2px 8px rgba(76, 175, 80, 0.2)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default HeaderSection;
