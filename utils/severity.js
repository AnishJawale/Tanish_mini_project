function getSeverity(level) {
  switch (level) {
    case "HIGH":
      return {
        level: "HIGH",
        message: "🚨 HIGH - Immediate medical attention required!"
      };
    case "MEDIUM":
      return {
        level: "MEDIUM",
        message: "⚠️ MEDIUM - Monitor condition and consult doctor"
      };
    default:
      return {
        level: "LOW",
        message: "✅ LOW - Manageable at home"
      };
  }
}

module.exports = { getSeverity };