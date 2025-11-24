import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../data";

let aiClient: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.warn("API_KEY is missing from environment variables.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const initializeChat = async (): Promise<void> => {
  const client = getClient();
  try {
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "Error: AI System offline. Please check API configuration.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({
      message
    });
    return response.text || "I processed that, but have no words.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Malfunction: Unable to process request at this time.";
  }
};
