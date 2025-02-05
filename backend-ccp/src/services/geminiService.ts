import { getMotivationalPhrasesModel } from "../models/geminiModels";
import { saveMotivationalPhrases } from './firebaseService';

export const updateMotivationalPhrases = async () => {
  try {
      const newPhrases = await generateMotivationalPhrases();
      await saveMotivationalPhrases(newPhrases);
  } catch (error) {
      console.error("Error updating motivational phrases:", error);
  }
};

export const generateMotivationalPhrases = async () => {
  try {
    const model = getMotivationalPhrasesModel();

    const prompt = `I am designing a browser extension called Cozy Corner Plants. Please generate 9 motivational phrases a plant might say to the player when they interact with it. These phrases should be positive, uplifting, and inspiring, encouraging growth and positivity. Please return just the list of phrases in plain text format, separated by line breaks, without any numbering or extra information.`;

    const result = await model.generateContent(prompt);
    
    const candidates = result.response?.candidates || [];
    if (!candidates.length) {
      throw new Error("No candidates found in the response.");
    }

    const content = candidates[0]?.content?.parts?.[0]?.text || "";
    if (!content) {
      throw new Error("No content text available in the response.");
    }

    try {
      const phrases = JSON.parse(content).map((item: { phrase: string }, index: number) => ({
        id: index + 1,
        phrase: item.phrase,
      }));
      return phrases;
    } catch (e) {
      console.error("Error parsing JSON:", e);
      throw new Error("Invalid response from Gemini API.  Expected JSON array.");
    }
  } catch (error) {
    console.error("Error generating motivational phrases:", error);
    throw error;
  };
}

const sixHours = 6 * 60 * 60 * 1000;
setInterval(updateMotivationalPhrases, sixHours);

updateMotivationalPhrases();
