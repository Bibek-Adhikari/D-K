import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GEMINI_API_KEY;
  const isConfigured = !!apiKey && apiKey !== 'MY_GEMINI_API_KEY';

  return res.status(200).json({
    status: 'ok',
    store: 'D&K Hardware and Stationery',
    location: 'Kailash Chowk, Madhyapur Thimi',
    phone: '01-5925757',
    geminiConfigured: isConfigured,
    environment: 'vercel-serverless',
  });
}
