import {useState, useEffect} from "react";
import {Box, Typography, IconButton} from "@mui/material";
import {KeyboardArrowDown} from "@mui/icons-material";

interface LandingPageProps {
  darkMode: boolean;
  onScrollToContent: () => void;
}

const LandingPage = ({darkMode, onScrollToContent}: LandingPageProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [keyboardSounds, setKeyboardSounds] = useState<AudioBuffer[]>([]);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const terminalLines = [
    "$ whoami",
    "Alexandre Mathieu",
    "$ cat profile.txt",
    "Platform Engineer at Bell Canada",
    "$ ls skills/",
    "infrastructure/ development/ problem-solving/",
    "$ echo 'Welcome to my portfolio!'",
    "Welcome to my portfolio!",
  ];

  // Initialize audio context and load Pixabay mechanical keyboard sounds
  const initializeAudio = async () => {
    if (!audioEnabled) {
      try {
        const context = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        setAudioContext(context);

        // Load the three Pixabay mechanical keyboard sounds
        await loadPixabayKeyboardSounds(context);
        setAudioEnabled(true);
        console.log("Audio context and Pixabay keyboard sounds loaded");
      } catch (error) {
        console.error("Failed to initialize audio context:", error);
      }
    }
  };

  // Load the three mechanical keyboard sounds from Pixabay
  const loadPixabayKeyboardSounds = async (context: AudioContext) => {
    const soundUrls = [
      "https://cdn.pixabay.com/download/audio/2022/03/24/audio_47f2aa4324.mp3?filename=mech-keyboard-02-102918.mp3",
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_e0971f98f5.mp3?filename=mechanical-key-soft-80731.mp3",
      "https://cdn.pixabay.com/download/audio/2024/04/01/audio_55caf28f71.mp3?filename=spacebar-click-keyboard-199448.mp3",
    ];

    const loadedSounds: AudioBuffer[] = [];

    for (let i = 0; i < soundUrls.length; i++) {
      try {
        console.log(`Loading keyboard sound ${i + 1}: ${soundUrls[i]}`);

        const response = await fetch(soundUrls[i], {
          mode: "cors",
        });

        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await context.decodeAudioData(arrayBuffer);
          loadedSounds.push(audioBuffer);
          console.log(
            `Successfully loaded keyboard sound ${
              i + 1
            } (${audioBuffer.duration.toFixed(2)}s)`
          );
        } else {
          console.warn(
            `Failed to load keyboard sound ${i + 1}: HTTP ${response.status}`
          );
        }
      } catch (error) {
        console.warn(`Error loading keyboard sound ${i + 1}:`, error);
      }
    }

    if (loadedSounds.length > 0) {
      setKeyboardSounds(loadedSounds);
      console.log(
        `Loaded ${loadedSounds.length} real mechanical keyboard sounds`
      );
    } else {
      console.warn("No sounds loaded, creating fallback");
      await createSimpleFallback(context);
    }
  };

  // Simple fallback if all sounds fail to load
  const createSimpleFallback = async (context: AudioContext) => {
    const sounds: AudioBuffer[] = [];

    // Create 3 different simple keyboard sounds
    for (let i = 0; i < 3; i++) {
      const sampleRate = context.sampleRate;
      const duration = 0.05 + i * 0.01; // Slightly different durations
      const bufferSize = sampleRate * duration;
      const buffer = context.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      for (let sample = 0; sample < bufferSize; sample++) {
        const t = sample / sampleRate;
        const freq = 1000 + i * 200; // Different frequencies
        const sound = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 20);
        data[sample] = sound * 0.3;
      }

      sounds.push(buffer);
    }

    setKeyboardSounds(sounds);
    console.log("Created simple fallback keyboard sounds");
  };

  // Play a random mechanical keyboard sound from the Pixabay collection
  const playTypingSound = () => {
    if (!audioEnabled || !audioContext || keyboardSounds.length === 0) {
      return;
    }

    try {
      // Random sound selection from the 3 Pixabay keyboard sounds
      const soundIndex = Math.floor(Math.random() * keyboardSounds.length);
      const source = audioContext.createBufferSource();
      const gainNode = audioContext.createGain();

      source.buffer = keyboardSounds[soundIndex];
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Natural volume variation for realistic typing
      const baseVolume = 0.4;
      const volumeVariation = 0.2;
      const volume = baseVolume + (Math.random() - 0.5) * volumeVariation;
      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);

      // Very subtle pitch variation for natural feel
      const pitchVariation = 0.98 + Math.random() * 0.04; // 0.98 to 1.02
      source.playbackRate.setValueAtTime(
        pitchVariation,
        audioContext.currentTime
      );

      // Play the full sound
      source.start(audioContext.currentTime);
    } catch (error) {
      console.error("Error playing keyboard sound:", error);
    }
  };

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setAnimationComplete(true);
      return;
    }

    const currentText = terminalLines[currentLine];
    const isCommand = currentText.startsWith("$");

    if (isCommand) {
      // For commands, type only the command part (after $)
      const commandText = currentText.substring(2); // Remove "$ "
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index <= commandText.length) {
          setDisplayText(commandText.slice(0, index));
          // Play typing sound for each character (but not for the final cursor position)
          if (index < commandText.length) {
            playTypingSound();
          }
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
            setDisplayText("");
          }, 500); // Shorter pause after commands
        }
      }, 80); // Typing speed

      return () => clearInterval(typingInterval);
    } else {
      // For responses, show text almost instantly
      setDisplayText(currentText);
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setDisplayText("");
      }, 800); // Pause before next line
    }
  }, [currentLine]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Handle Enter key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        // Initialize audio on user interaction
        initializeAudio();

        if (!animationComplete) {
          // Skip animation and jump to completion
          setCurrentLine(terminalLines.length);
          setAnimationComplete(true);
          setDisplayText("");
        } else {
          // Navigate to next section
          onScrollToContent();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [animationComplete, onScrollToContent, terminalLines.length]);

  // Initialize audio on any click
  useEffect(() => {
    const handleClick = () => {
      initializeAudio();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: darkMode
          ? "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)"
          : "linear-gradient(135deg, #f6f8fa 0%, #ffffff 50%, #f1f3f4 100%)",
        overflow: "hidden",
        fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
      }}
    >
      {/* Terminal Window */}
      <Box
        sx={{
          width: {xs: "90%", md: "600px"},
          minHeight: "400px",
          background: darkMode ? "#0d1117" : "#ffffff",
          border: darkMode ? "1px solid #30363d" : "1px solid #d0d7de",
          borderRadius: 2,
          boxShadow: darkMode
            ? "0 16px 32px rgba(0, 0, 0, 0.4)"
            : "0 16px 32px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Terminal Header */}
        <Box
          sx={{
            background: darkMode ? "#21262d" : "#f6f8fa",
            padding: "12px 16px",
            borderBottom: darkMode ? "1px solid #30363d" : "1px solid #d0d7de",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#28ca42",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              ml: 2,
              color: darkMode ? "#8b949e" : "#656d76",
              fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
            }}
          >
            alexandre@portfolio:~
          </Typography>
        </Box>

        {/* Terminal Content */}
        <Box
          sx={{
            padding: 3,
            fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          {/* Previous completed lines */}
          {terminalLines.slice(0, currentLine).map((line, index) => (
            <Typography
              key={index}
              component="div"
              sx={{
                color: line.startsWith("$")
                  ? darkMode
                    ? "#7c3aed"
                    : "#6366f1"
                  : darkMode
                  ? "#e6edf3"
                  : "#24292f",
                fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                fontSize: "1rem",
                mb: 0.5,
              }}
            >
              {line.startsWith("$") && (
                <span style={{color: darkMode ? "#f85149" : "#d73a49"}}>
                  {line.split(" ")[0]}{" "}
                </span>
              )}
              {line.startsWith("$") ? line.substring(2) : line}
            </Typography>
          ))}

          {/* Current typing line */}
          {currentLine < terminalLines.length && (
            <Typography
              component="div"
              sx={{
                color: terminalLines[currentLine].startsWith("$")
                  ? darkMode
                    ? "#7c3aed"
                    : "#6366f1"
                  : darkMode
                  ? "#e6edf3"
                  : "#24292f",
                fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                fontSize: "1rem",
                mb: 0.5,
              }}
            >
              {terminalLines[currentLine].startsWith("$") && (
                <span style={{color: darkMode ? "#f85149" : "#d73a49"}}>
                  ${" "}
                </span>
              )}
              {displayText}
              <span
                style={{
                  opacity: showCursor ? 1 : 0,
                  color: darkMode ? "#f85149" : "#d73a49",
                  animation: "blink 1s infinite",
                }}
              >
                ▋
              </span>
            </Typography>
          )}

          {/* Completion message */}
          {animationComplete && (
            <Typography
              component="div"
              sx={{
                color: darkMode ? "#f85149" : "#d73a49",
                fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                fontSize: "1rem",
                mt: 2,
                animation: "fadeIn 0.5s ease-in",
                "@keyframes fadeIn": {
                  from: {opacity: 0},
                  to: {opacity: 1},
                },
              }}
            >
              $ _
              <span
                style={{
                  opacity: showCursor ? 1 : 0,
                  marginLeft: "4px",
                }}
              >
                ▋
              </span>
            </Typography>
          )}
        </Box>
      </Box>

      {/* Scroll Indicator */}
      {animationComplete && (
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            animation: "fadeInUp 0.5s ease-in 0.5s both",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out",
            },
            "@keyframes fadeInUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
          onClick={onScrollToContent}
        >
          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#8b949e" : "#656d76",
              mb: 0.5,
              fontWeight: 300,
              fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
            }}
          >
            Press Enter to continue...
          </Typography>
          <IconButton
            disableRipple
            disableFocusRipple
            sx={{
              color: darkMode ? "#8b949e" : "#656d76",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                  animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                },
                "50%": {
                  transform: "translateY(-15px)",
                  animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                },
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:focus": {
                backgroundColor: "transparent",
                outline: "none",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "transparent",
                outline: "none",
              },
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </Box>
      )}

      {/* CSS for cursor blink */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
};

export default LandingPage;
