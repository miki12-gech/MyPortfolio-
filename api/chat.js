import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq';
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
    const rawBody = await req.json();
    const contextData = rawBody.contextData;
    
    // Normalize AI SDK v7 UIMessage format (parts) to standard format (content)
    const messages = (rawBody.messages || []).map(m => {
      if (m.content) return { role: m.role, content: m.content };
      if (m.parts && Array.isArray(m.parts)) {
        const textContent = m.parts
          .filter(p => p.type === 'text')
          .map(p => p.text)
          .join('');
        return { role: m.role, content: textContent };
      }
      return { role: m.role, content: '' };
    });
    
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
      model: groq('qwen/qwen3.8-27b'),
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

    return result.toUIMessageStreamResponse();
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
