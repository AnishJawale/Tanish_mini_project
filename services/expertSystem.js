const knowledgeBase = require("../knowledgeBase.json");

function normalize(text) {
  return text.toLowerCase().trim();
}

function findDisease(userSymptoms) {
  if (!userSymptoms || userSymptoms.length === 0) {
    return {
      disease: null,
      confidence: 0,
      message: "No symptoms detected"
    };
  }

  let bestMatch = null;
  let maxScore = 0;

  const normalized = userSymptoms.map(s => normalize(s));

  for (let key in knowledgeBase) {
    const disease = knowledgeBase[key];
    let score = 0;

    disease.symptoms.forEach(sym => {
      normalized.forEach(userSym => {
        if (
          userSym.includes(sym) ||
          sym.includes(userSym)
        ) {
          score++;
        }
      });
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = disease;
    }
  }

  const confidence = Math.min(
    (maxScore / normalized.length) * 100,
    100
  );

  if (confidence < 30) {
    return {
      disease: null,
      confidence,
      message: "⚠️ Not enough data. Please describe symptoms clearly."
    };
  }

  return {
    disease: bestMatch,
    confidence
  };
}

module.exports = { findDisease };