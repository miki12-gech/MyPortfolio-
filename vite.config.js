import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq';
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

            // Fallback for local testing if API key is not configured
            if (!process.env.GROQ_API_KEY) {
              // Simulate a basic streaming response
              res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
              res.write('0:"[LOCAL MOCK] I am currently running in offline mock mode because the OPENAI_API_KEY is not set in the .env file. "\n');
              setTimeout(() => {
                res.write('0:"However, my UI and streaming capabilities are fully functional! "\n');
                setTimeout(() => {
                  res.write('0:"Once you add a valid OpenAI key, I will connect to the real intelligence."\n');
                  res.end();
                }, 500);
              }, 500);
              return;
            }

            const result = await streamText({
              model: groq('openai/gpt-oss-120b'),
              system: basePrompt + contextInstructions + `
You are ASK MIKIALE, an AI portfolio assistant for Mikiale Getachew.
Personality: Professional, concise, technical, friendly, calm, confident, honest.
Never invent information. If you don't know, say "I don't have verified information about that in Mikiale's portfolio."
`,
              messages,
              maxTokens: 500,
              temperature: 0.2,
            });

            if (typeof result.pipeUIMessageStreamToResponse === 'function') {
              result.pipeUIMessageStreamToResponse(res);
            } else {
              // Fallback for edge cases
              res.end();
            }
          } catch (error) {
            console.error('Local API Error:', error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message || error.toString() || 'SYSTEM CONNECTION UNAVAILABLE.' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };

  return {
    plugins: [react(), vercelApiMock()],
  };
})
