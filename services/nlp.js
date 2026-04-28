const symptomMap = {
  fever: ["fever", "high temperature", "temperature"],
  cough: ["cough", "dry cough"],
  fatigue: ["fatigue", "tired", "weak", "low energy"],
  "body ache": ["body ache", "muscle pain", "body pain"],
  chills: ["chills", "shivering"],
  headache: ["headache", "head pain", "migraine"],
  nausea: ["nausea", "feel like vomiting"],
  vomiting: ["vomiting", "throwing up"],
  "chest pain": ["chest pain", "tight chest"],
  "shortness of breath": ["shortness of breath", "breathing problem", "can't breathe"],
  dizziness: ["dizziness", "lightheaded", "giddiness"],
  "stomach pain": ["stomach pain", "abdominal pain"],
  diarrhea: ["diarrhea", "loose motion"],
  sweating: ["sweating", "excess sweat"],
  "blurred vision": ["blurred vision", "unclear vision"]
};

function extractSymptoms(text) {
  if (!text) return [];

  text = text.toLowerCase();
  let detected = [];

  for (let key in symptomMap) {
    for (let phrase of symptomMap[key]) {
      if (text.includes(phrase)) {
        detected.push(key);
        break;
      }
    }
  }

  return detected;
}

module.exports = { extractSymptoms };