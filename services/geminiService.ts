import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getWoodRecommendation = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "AI service is currently unavailable. Please contact the store directly.";
  }

  try {
    const productList = PRODUCTS.map(p => `${p.name} (${p.category}): ${p.description}`).join('\n');
    
    const prompt = `
      You are a knowledgeable wood consultant for Maddirala Trades in Andhra Pradesh.
      
      Here is our product catalog:
      ${productList}
      
      The user is asking: "${userQuery}"
      
      Based on their request, suggest the best product from our catalog.
      Explain why in 2-3 sentences. Be professional, helpful, and concise.
      If the request is unrelated to wood, politely redirect them to our contact number.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I couldn't generate a specific recommendation. Please visit our store for expert advice.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are having trouble connecting to the AI consultant. Please call us at 9949125305.";
  }
};