import {useState} from "react";
import {Box, Typography, Card, CardContent, IconButton} from "@mui/material";
import {Work, ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import Section from "../Section/Section";

interface ExperienceSectionProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  emoji: string;
}

const experiences: Experience[] = [
  {
    title: "Platform Developer",
    company: "Bell Canada",
    period: "Jun 2024 - Present",
    description:
      "Developer in the platform/DevOps/DevEx team of the video team at Bell's Quebec software development office. Working on platform infrastructure, developer experience tools, and automation solutions to enhance software delivery for video streaming services.",
    emoji: "🛠️",
  },
  {
    title: "Full-stack Developer Intern",
    company: "Bell Canada",
    period: "May 2023 - Aug 2023",
    description:
      "Full-stack Developer Intern in the DevOps/DevEx Platform team. Gained hands-on experience with platform engineering, developer experience improvements, and DevOps practices in a hybrid work environment in Quebec, Canada.",
    emoji: "💻",
  },
  {
    title: "Pipeline/Scripting intern",
    company: "EXFO",
    period: "May 2022 - Aug 2022",
    description:
      "Programming internship focusing on embedded systems development, primarily under Linux environments. Applied automated testing methodologies and worked on various embedded system projects to ensure software quality and reliability.",
    emoji: "⚙️",
  },
  {
    title: "Research Assistant",
    company: "Université Laval",
    period: "Apr 2021 - Dec 2021",
    description:
      "Research assistant in the Computer Science and Software Engineering Department. Specialized in deep neural networks explainability, working with ensemble methods and machine learning frameworks including Python, PyTorch, and Scikit-Learn.",
    emoji: "🔍",
  },
];

const ExperienceSection = ({sectionRef, isVisible}: ExperienceSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  const goToPrevious = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setActiveIndex(
        (prev) => (prev - 1 + experiences.length) % experiences.length
      );
      setTimeout(() => setSlideDirection(null), 50);
    }, 250);
  };

  const goToNext = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
      setTimeout(() => setSlideDirection(null), 50);
    }, 250);
  };

  const goToIndex = (index: number) => {
    if (index === activeIndex) return;
    const direction = index > activeIndex ? "left" : "right";
    setSlideDirection(direction);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setSlideDirection(null), 50);
    }, 250);
  };

  const getPreviousIndex = () =>
    (activeIndex - 1 + experiences.length) % experiences.length;
  const getNextIndex = () => (activeIndex + 1) % experiences.length;

  return (
    <Section
      title={<>Experience</>}
      sectionRef={sectionRef}
      isVisible={isVisible}
      delay="0.25s"
      icon={<Work sx={{mr: 1, color: "primary.main", fontSize: 28}} />}
    >
      <Box
        sx={{display: "flex", flexDirection: "column", gap: 3, width: "100%"}}
      >
        {/* Dot Indicators */}
        <Box sx={{display: "flex", gap: 1, justifyContent: "center"}}>
          {experiences.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor:
                  index === activeIndex ? "primary.main" : "grey.400",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform:
                  slideDirection && index === activeIndex
                    ? "scale(1.2)"
                    : "scale(1)",
              }}
              onClick={() => goToIndex(index)}
            />
          ))}
        </Box>

        {/* Carousel Container */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            maxWidth: "900px", // Increased from 800px to accommodate larger main card
            margin: "0 auto",
            px: 6, // Add horizontal padding to prevent arrows from overlapping side cards
          }}
        >
          {/* Previous Arrow */}
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: "absolute",
              left: -20,
              zIndex: 2,
              backgroundColor: "background.paper",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Cards Container */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // This centers all cards vertically
              gap: 2,
              position: "relative",
              minHeight: "400px", // Increased from 320px to accommodate larger cards
              py: 2, // Add padding to prevent clipping
            }}
          >
            {/* Sliding Cards Container */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center", // Center all cards vertically within the sliding container
                gap: 2,
                width: "100%",
                transform:
                  slideDirection === "left"
                    ? "translateX(-100px)"
                    : slideDirection === "right"
                    ? "translateX(100px)"
                    : "translateX(0px)",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                justifyContent: "center",
                opacity: slideDirection ? 0.8 : 1,
                px: 1, // Add horizontal padding to prevent edge clipping
              }}
            >
              {/* Previous Card (Partial) */}
              <Card
                elevation={1}
                sx={{
                  minWidth: "160px", // Increased from 120px
                  width: "160px", // Increased from 120px
                  height: "220px", // Increased from 180px
                  borderRadius: 3,
                  opacity: 0.4,
                  transform: "scale(0.8)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    opacity: 0.6,
                    transform: "scale(0.85)",
                  },
                }}
                onClick={goToPrevious}
              >
                <CardContent
                  sx={{
                    p: 2,
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h4" sx={{mb: 1}}>
                    {experiences[getPreviousIndex()].emoji}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experiences[getPreviousIndex()].title}
                  </Typography>
                </CardContent>
              </Card>

              {/* Active Card (Full) */}
              <Card
                elevation={6}
                sx={{
                  flex: 1,
                  maxWidth: "600px", // Increased from 500px
                  height: "350px", // Increased from 280px
                  borderRadius: 3,
                  transform: "scale(1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 8,
                  },
                }}
                onClick={goToNext}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experiences[activeIndex].emoji}{" "}
                    {experiences[activeIndex].title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experiences[activeIndex].company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{
                      fontStyle: "italic",
                      mb: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experiences[activeIndex].period}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      textAlign: "justify",
                      flex: 1,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 6, // Increased from 4 to 6 lines
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {experiences[activeIndex].description}
                  </Typography>
                </CardContent>
              </Card>

              {/* Next Card (Partial) */}
              <Card
                elevation={1}
                sx={{
                  minWidth: "160px", // Increased from 120px
                  width: "160px", // Increased from 120px
                  height: "220px", // Increased from 180px
                  borderRadius: 3,
                  opacity: 0.4,
                  transform: "scale(0.8)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    opacity: 0.6,
                    transform: "scale(0.85)",
                  },
                }}
                onClick={goToNext}
              >
                <CardContent
                  sx={{
                    p: 2,
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h4" sx={{mb: 1}}>
                    {experiences[getNextIndex()].emoji}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experiences[getNextIndex()].title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Next Arrow */}
          <IconButton
            onClick={goToNext}
            sx={{
              position: "absolute",
              right: -20,
              zIndex: 2,
              backgroundColor: "background.paper",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* Navigation hint */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{textAlign: "center", opacity: 0.7}}
        >
          Use arrows or click cards to navigate • {activeIndex + 1} /{" "}
          {experiences.length}
        </Typography>
      </Box>
    </Section>
  );
};

export default ExperienceSection;
