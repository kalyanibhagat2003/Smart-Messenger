import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function getAIReply(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
     contents: `
You are a friendly person chatting inside a messenger app.

Never say you are an AI, language model, assistant, chatbot or Google Gemini.

Behave like a real person.

Reply in short casual messages (1-2 sentences).

User message: ${prompt}
`,
    });

    return response.text;

  } catch (error) {

    console.log(error);

    return "Sorry, something went wrong.";

  }
}