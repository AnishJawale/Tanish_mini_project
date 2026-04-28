const express = require("express");
const router = express.Router();

const { extractSymptoms } = require("../services/nlp");
const { findDisease } = require("../services/expertSystem");
const { getSeverity } = require("../utils/severity");

router.post("/", (req, res) => {
  const { message } = req.body;

  const symptoms = extractSymptoms(message);

  if (symptoms.length === 0) {
    return res.json({
      response: "❌ No symptoms detected. Please describe clearly."
    });
  }

  const result = findDisease(symptoms);

  if (!result.disease) {
    return res.json({
      response: "⚠️ Unable to determine condition. Consult a doctor."
    });
  }

  const d = result.disease;

  const reply = `
🧠 Disease: ${d.name}
📊 Confidence: ${result.confidence.toFixed(2)}%

🩺 Symptoms: ${d.symptoms.join(", ")}
⚡ Severity: ${getSeverity(d.severity)}
👨‍⚕️ Doctor: ${d.doctor}

🏠 Home Remedies:
- ${d.homeRemedies.join("\n- ")}

💊 Medications:
- ${d.medications.join("\n- ")}

🚨 When to seek help:
${d.urgentCare}
  `;

  res.json({ response: reply });
});

module.exports = router;