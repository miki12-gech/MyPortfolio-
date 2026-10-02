import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { getSystemKnowledgePrompt } from '../src/data/portfolioKnowledge.js';

// Vercel Serverless Function Config
export const config = {
  runtime: 'edge',
};

export default async function reqHandler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messages, contextData } = await req.json();
    
    const basePrompt = getSystemKnowledgePrompt();
    
    let contextInstructions = '';
    if (contextData && contextData.section) {
      contextInstructions = `
[CURRENT CONTEXT]
The user is currently viewing the ${contextData.section} section. 
If appropriate, tailor your responses to acknowledge this context (e.g. "As you can see in this section...").
`;
    }

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: basePrompt + contextInstructions + `
You are ASK MIKIALE, an AI portfolio assistant for Mikiale Getachew.
Personality: Professional, concise, technical, friendly, calm, confident, honest.
Do not sound like a marketing bot or a generic ChatGPT clone. Keep answers concise.
Important: When providing links, use the exact URL from the knowledge base without modifying it.
Never invent information. If you don't know, say "I don't have verified information about that in Mikiale's portfolio."
`,
      messages,
      maxTokens: 500,
      temperature: 0.2, // Keep it deterministic and accurate
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'SYSTEM CONNECTION UNAVAILABLE. Please try again.' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}
