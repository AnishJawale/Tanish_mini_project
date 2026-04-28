function getSeverity(level) {
  if (level === "HIGH") {
    return "🚨 HIGH - Immediate attention required!";
  }
  if (level === "MEDIUM") {
    return "⚠️ MEDIUM - Monitor condition";
  }
  return "✅ LOW - Manageable at home";
}

module.exports = { getSeverity };