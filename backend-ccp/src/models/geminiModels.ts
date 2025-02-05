import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export const getMotivationalPhrasesModel = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment variables");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const schema = {
    description: "List of motivational phrases",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        phrase: {
          type: SchemaType.STRING,
          description: "A motivational phrase",
          nullable: false,
        },
      },
      required: ["phrase"],
    },
  };

  return genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });
};
