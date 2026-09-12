import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ quotes: [] });
  }

  if (req.method === 'POST') {
    try {
      const { fullName, phone, projectType, notes, itemsList } = req.body || {};

      if (!fullName || !phone || !itemsList) {
        return res.status(400).json({ error: 'Full name, phone, and items list are required.' });
      }

      const inquiryId = `DK-${Math.floor(100000 + Math.random() * 900000)}`;

      return res.status(200).json({
        success: true,
        inquiryId,
        message: 'BOQ quote inquiry successfully submitted.',
        record: {
          id: inquiryId,
          fullName,
          phone,
          projectType: projectType || 'Contractor / Construction',
          notes: notes || '',
          itemsList,
          createdAt: new Date().toISOString(),
          status: 'New',
        },
      });
    } catch (err: any) {
      return res.status(500).json({ error: 'Failed to process BOQ quote.' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
