const knowledgeBase = require("../knowledgeBase.json");

function findDisease(userSymptoms) {
  let bestMatch = null;
  let maxMatch = 0;

  for (let key in knowledgeBase) {
    const disease = knowledgeBase[key];

    const matchCount = disease.symptoms.filter(sym =>
      userSymptoms.includes(sym)
    ).length;

    if (matchCount > maxMatch) {
      maxMatch = matchCount;
      bestMatch = disease;
    }
  }

  return {
    disease: bestMatch,
    confidence: (maxMatch / userSymptoms.length) * 100
  };
}

module.exports = { findDisease };