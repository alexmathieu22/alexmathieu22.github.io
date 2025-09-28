import {useState, useEffect} from "react";
import {Box, Typography} from "@mui/material";

interface TerraformPlanSectionProps {
  darkMode: boolean;
  onScrollToContent: () => void;
}

const TerraformPlanSection = ({
  darkMode,
  onScrollToContent,
}: TerraformPlanSectionProps) => {
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const terraformLines = [
    "$ terraform plan",
    "",
    "Terraform used the selected providers to generate the following execution plan.",
    "Resource actions are indicated with the following symbols:",
    "  + create",
    "  ~ modify",
    "  - destroy",
    "",
    "Terraform will perform the following actions:",
    "",
    "  # aws_infrastructure.kubernetes_cluster will be created",
    '  + resource "aws_eks_cluster" "main" {',
    '      + name     = "production-cluster"',
    '      + version  = "1.28"',
    '      + status   = "ACTIVE"',
    "    }",
    "",
    "  # monitoring.prometheus_stack will be created",
    '  + resource "helm_release" "monitoring" {',
    '      + name       = "prometheus-stack"',
    '      + namespace  = "monitoring"',
    '      + chart      = "kube-prometheus-stack"',
    "    }",
    "",
    "  # cicd_pipeline.github_actions will be modified",
    '  ~ resource "github_actions_workflow" "deploy" {',
    "      + auto_scaling     = true",
    '      ~ deployment_env   = "staging" -> "production"',
    "      + security_scans   = true",
    "    }",
    "",
    "  # security.network_policies will be created",
    '  + resource "kubernetes_network_policy" "security" {',
    '      + namespace = "default"',
    "      + ingress_rules = [",
    '          + "allow-internal-traffic",',
    '          + "deny-external-access"',
    "        ]",
    "    }",
    "",
    "ASCII Art - Platform Engineering Tasks:",
    "",
    "    ┌─────────────────────────────────────────────────────────────┐",
    "    │                    🏗️  INFRASTRUCTURE                       │",
    "    │   ┌─── EKS ───┐   ┌─── RDS ───┐   ┌─── S3 ────┐           │",
    "    │   │    ⚙️     │   │    💾     │   │    📦     │           │",
    "    │   │ Kubernetes │   │ Database  │   │  Storage  │           │",
    "    │   └───────────┘   └───────────┘   └───────────┘           │",
    "    └─────────────────────────────────────────────────────────────┘",
    "",
    "    ┌─────────────────────────────────────────────────────────────┐",
    "    │                     📊 MONITORING                           │",
    "    │   ┌─ Prometheus ─┐  ┌─ Grafana ─┐  ┌─ AlertManager ─┐      │",
    "    │   │      📈      │  │     📉     │  │       🚨       │      │",
    "    │   │   Metrics    │  │ Dashboards │  │     Alerts     │      │",
    "    │   └──────────────┘  └────────────┘  └────────────────┘      │",
    "    └─────────────────────────────────────────────────────────────┘",
    "",
    "    ┌─────────────────────────────────────────────────────────────┐",
    "    │                      🔄 CI/CD PIPELINE                     │",
    "    │                                                             │",
    "    │  Code → Test → Build → Security → Deploy → Monitor         │",
    "    │   📝     🧪     🏗️       🔒        🚀       📊           │",
    "    │                                                             │",
    "    │  GitHub Actions → Docker → AWS ECR → EKS → Datadog        │",
    "    └─────────────────────────────────────────────────────────────┘",
    "",
    "    ┌─────────────────────────────────────────────────────────────┐",
    "    │                     🔐 SECURITY & COMPLIANCE               │",
    "    │                                                             │",
    "    │   ┌─ Network ─┐  ┌─ Identity ─┐  ┌─ Compliance ─┐         │",
    "    │   │    🛡️     │  │     👤     │  │      📋      │         │",
    "    │   │  Policies  │  │    IAM     │  │   SOC2/ISO   │         │",
    "    │   └────────────┘  └────────────┘  └──────────────┘         │",
    "    └─────────────────────────────────────────────────────────────┘",
    "",
    "Plan: 4 to add, 1 to change, 0 to destroy.",
    "",
    "Changes to Outputs:",
    '  + cluster_endpoint = "https://k8s.bell.platform.ca"',
    '  + monitoring_url   = "https://grafana.bell.platform.ca"',
    "",
    "Do you want to perform these actions?",
    "  Terraform will perform the actions described above.",
    "  Only 'yes' will be accepted to approve.",
    "",
    "  Enter a value: yes",
    "",
    "Platform Engineering Excellence Achieved!",
  ];

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Intersection observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {threshold: 0.5} // Trigger when 50% of the component is visible
    );

    const terraformElement = document.getElementById("terraform-section");
    if (terraformElement) {
      observer.observe(terraformElement);
    }

    return () => {
      if (terraformElement) {
        observer.unobserve(terraformElement);
      }
    };
  }, []);

  // Handle Enter key press only when visible
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onScrollToContent();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isVisible, onScrollToContent]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background: darkMode ? "#0d1117" : "#000000",
        overflow: "auto",
        fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
        color: darkMode ? "#e6edf3" : "#ffffff",
      }}
    >
      {/* Terminal Header Bar */}
      <Box
        sx={{
          background: darkMode ? "#21262d" : "#1a1a1a",
          padding: "8px 16px",
          borderBottom: darkMode ? "1px solid #30363d" : "1px solid #333333",
          display: "flex",
          alignItems: "center",
          gap: 1,
          position: "sticky",
          top: 0,
          zIndex: 1,
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
            color: darkMode ? "#8b949e" : "#999999",
            fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
          }}
        >
          alexandre@bell-platform:~/infrastructure
        </Typography>
      </Box>

      {/* Terminal Content - Full Screen */}
      <Box
        sx={{
          flex: 1,
          padding: 3,
          fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
          fontSize: {xs: "0.8rem", md: "1rem"},
          lineHeight: 1.4,
          overflowY: "auto",
        }}
      >
        {/* All terraform lines displayed at once */}
        {terraformLines.map((line, index) => {
          const isCommand = line.startsWith("$");
          const isResource =
            line.includes("# ") &&
            (line.includes("will be") || line.includes("resource"));
          const isAction =
            line.includes("+ ") || line.includes("~ ") || line.includes("- ");
          const isAsciiHeader =
            line.includes("ASCII Art") || line.includes("🚀");
          const isOutput =
            line.includes("Plan:") || line.includes("Changes to Outputs:");

          return (
            <Typography
              key={index}
              component="div"
              sx={{
                color: isCommand
                  ? darkMode
                    ? "#7c3aed"
                    : "#bb86fc"
                  : isResource
                  ? darkMode
                    ? "#f79009"
                    : "#ffb86c"
                  : isAction
                  ? line.includes("+")
                    ? darkMode
                      ? "#3fb950"
                      : "#50fa7b"
                    : line.includes("~")
                    ? darkMode
                      ? "#f79009"
                      : "#ffb86c"
                    : darkMode
                    ? "#f85149"
                    : "#ff5555"
                  : isAsciiHeader
                  ? darkMode
                    ? "#a5b4fc"
                    : "#8be9fd"
                  : isOutput
                  ? darkMode
                    ? "#56d364"
                    : "#50fa7b"
                  : darkMode
                  ? "#e6edf3"
                  : "#f8f8f2",
                fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                fontSize: {xs: "0.8rem", md: "1rem"},
                mb: 0.2,
                whiteSpace: "pre",
                fontWeight: isAsciiHeader ? 600 : 400,
              }}
            >
              {isCommand && (
                <span style={{color: darkMode ? "#f85149" : "#ff5555"}}>
                  {line.split(" ")[0]}{" "}
                </span>
              )}
              {isCommand ? line.substring(2) : line}
            </Typography>
          );
        })}

        {/* Terminal prompt with cursor */}
        <Typography
          component="div"
          sx={{
            color: darkMode ? "#f85149" : "#ff5555",
            fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
            fontSize: {xs: "0.8rem", md: "1rem"},
            mt: 2,
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
      </Box>

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

export default TerraformPlanSection;
