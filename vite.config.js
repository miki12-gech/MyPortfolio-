import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { getSystemKnowledgePrompt } from './src/data/portfolioKnowledge.js';

// Custom plugin to handle Vercel Serverless Functions locally in Vite
const vercelApiMock = () => ({
  name: 'vercel-api-mock',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/chat' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString() });
        req.on('end', async () => {
          try {
            const { messages, contextData } = JSON.parse(body);
            const basePrompt = getSystemKnowledgePrompt();
            
            let contextInstructions = '';
            if (contextData && contextData.section) {
              contextInstructions = `
[CURRENT CONTEXT]
The user is currently viewing the ${contextData.section} section. 
If appropriate, tailor your responses to acknowledge this context.
`;
            }

            const result = await streamText({
              model: openai('gpt-4o-mini'),
              system: basePrompt + contextInstructions + `
You are ASK MIKIALE, an AI portfolio assistant for Mikiale Getachew.
Personality: Professional, concise, technical, friendly, calm, confident, honest.
Never invent information. If you don't know, say "I don't have verified information about that in Mikiale's portfolio."
`,
              messages,
              maxTokens: 500,
              temperature: 0.2,
            });

            result.pipeDataStreamToResponse(res);
          } catch (error) {
            console.error('Local API Error:', error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'SYSTEM CONNECTION UNAVAILABLE.' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiMock()],
})
