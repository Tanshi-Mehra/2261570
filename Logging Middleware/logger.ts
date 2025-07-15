type LogLevel = "debug" | "info" | "warn" | "error" | "fatal";
type Package =
  | "api"
  | "component"
  | "hook"
  | "page"
  | "state"
  | "style"
  | "auth"
  | "config"
  | "middleware"
  | "utils";

interface LogPayload {
  stack: "frontend";
  level: LogLevel;
  package: Package;
  message: string;
}
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoi..."; // (Paste the full token)

export async function logEvent(
  level: LogLevel,
  pkg: Package,
  message: string
) {
  const payload: LogPayload = {
    stack: "frontend",
    level,
    package: pkg,
    message,
  };

  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("✅ Log sent:", data.message);
  } catch (err) {
    console.error("❌ Logging failed:", err);
  }
}
