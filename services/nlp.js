const knownSymptoms = [
  "fever","cough","fatigue","body ache","chills",
  "headache","nausea","vomiting","chest pain",
  "shortness of breath","dizziness","stomach pain",
  "diarrhea","sweating","blurred vision"
];

function extractSymptoms(text) {
  text = text.toLowerCase();
  return knownSymptoms.filter(sym => text.includes(sym));
}

module.exports = { extractSymptoms };