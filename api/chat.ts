import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

function getFallbackStoreAnswer(prompt: string, lang: 'en' | 'ne'): string {
  const p = prompt.toLowerCase();
  const isNepali = /[\u0900-\u097F]/.test(prompt) || lang === 'ne';

  if (p.includes('time') || p.includes('hour') || p.includes('खुल्छ') || p.includes('समय') || p.includes('open') || p.includes('close')) {
    return isNepali
      ? `हाम्रो पसल हप्ताको सातै दिन खुल्छ:\n• सोमबार–शुक्रबार: बिहान ७:३० देखि साँझ ६:०० सम्म\n• शनिबार–आइतबार: बिहान ७:०० देखि साँझ ६:०० सम्म\nसम्पर्क फोन: ०१-५९२५७५७`
      : `Store Opening Hours:\n• Monday–Friday: 7:30 AM – 6:00 PM\n• Saturday–Sunday: 7:00 AM – 6:00 PM (Open 7 Days)\nContact: 01-5925757`;
  }

  if (p.includes('location') || p.includes('where') || p.includes('address') || p.includes('कहाँ') || p.includes('ठेगाना') || p.includes('चोक') || p.includes('map')) {
    return isNepali
      ? `हाम्रो पसल कैलाश चोक, मध्यपुर थिमी, बागमती प्रदेश, ८८४००, नेपालमा अवस्थित छ।\nसवारी साधन तथा सामान लोड-अनलोड गर्ने फराकिलो सुविधा छ।\nफोन: ०१-५९२५७५७।`
      : `Our Store Location: Kailash Chowk, Madhyapur Thimi, Bagmati Province, 88400, Nepal. Wide vehicular access for loading/unloading.\nPhone: 01-5925757.`;
  }

  if (p.includes('phone') || p.includes('call') || p.includes('number') || p.includes('सम्पर्क') || p.includes('फोन') || p.includes('नम्बर')) {
    return isNepali
      ? `हाम्रो सिधा सम्पर्क फोन नम्बर ०१-५९२५७५७ हो। तपाईं तुरुन्तै सामानको स्टक र थोक दररेट बुझ्न कल गर्न सक्नुहुन्छ।`
      : `Call our sales desk directly at 01-5925757 for immediate wholesale rates, stock confirmation, and site deliveries.`;
  }

  if (p.includes('cpvc') || p.includes('ppr') || p.includes('pipe') || p.includes('पाइप') || p.includes('फिटिङ्स') || p.includes('fitting')) {
    return isNepali
      ? `हामीसँग CPVC (SDR 11, SDR 13.5) तथा PPR तातो/चिसो पानी पाइप र सम्पूर्ण ब्रास फिटिङ्स थोक तथा खुद्रा मूल्यमा उपलब्ध छन्। १/२ इन्चदेखि २ इन्च र ठूला व्यावसायिक साइजसम्म स्टकमा छन्।`
      : `We stock complete certified CPVC (SDR 11 / SDR 13.5) and PPR pipes and brass fittings in 1/2", 3/4", 1", 1.25", 1.5", and 2" sizes with full contractor stock.`;
  }

  if (p.includes('faucet') || p.includes('tap') || p.includes('धारा') || p.includes('basin') || p.includes('बेसिन') || p.includes('sanitary') || p.includes('सेनेटरी')) {
    return isNepali
      ? `हामीसँग उच्च गुणस्तरका ब्रास कोर क्रोम बेसिन मिक्सर, सिरेमिक वाश बेसिन, आधुनिक कमोड, शावर सेट र सम्पूर्ण बाथरुम सेनेटरी फिटिङ्स उपलब्ध छन्।`
      : `We offer heavy-duty solid brass chrome basin faucets, nano-glazed ceramic basins, modern commodes, and luxury bathroom sanitary fixtures.`;
  }

  if (p.includes('drill') || p.includes('tool') || p.includes('औजार') || p.includes('power')) {
    return isNepali
      ? `हामीसँग २० भोल्ट म्याक्स ब्रसलेस कर्डलेस ड्रिल (२ वटा ब्याट्री र चार्जर सहित), एंगल ग्राइन्डर, ह्यामर ड्रिल तथा सम्पूर्ण निर्माण औजारहरू उपलब्ध छन्।`
      : `We stock 20V Max Brushless Cordless Drill Drivers with dual 4.0Ah batteries, rotary hammer drills, angle grinders, and building tools.`;
  }

  if (p.includes('paper') || p.includes('stationery') || p.includes('स्टेसनरी') || p.includes('कापी') || p.includes('रजिस्टर') || p.includes('a4') || p.includes('पेन') || p.includes('pen') || p.includes('school') || p.includes('office')) {
    return isNepali
      ? `हामीसँग प्रिमियम ७५/८० GSM A4 फोटोकपी पेपर (JK, Paperline), खाता वही रजिस्टर, विद्यार्थी स्पाइरल कापी, फाइल, जेल/बलपेन तथा सम्पूर्ण विद्यालय र कार्यालय स्टेसनरी थोक मूल्यमा उपलब्ध छन्।`
      : `We stock premium 75/80 GSM A4 copier paper reams (JK Copier, Paperline), hardbound accounting registers, spiral notebooks, box files, and stationery supplies for schools, colleges, and offices at wholesale rates.`;
  }

  return isNepali
    ? `डी एण्ड के हार्डवेयर तथा स्टेसनरी प्रा. लि. (कैलाश चोक, मध्यपुर थिमी) मा स्वागत छ। हामीसँग सम्पूर्ण हार्डवेयर, पाइप, सेनेटरी तथा स्टेसनरी सामानहरू उपलब्ध छन्। थप जानकारीको लागि कृपया ०१-५९२५७५७ मा फोन गर्नुहोस्।`
    : `Welcome to D&K Hardware and Stationery (Kailash Chowk, Madhyapur Thimi). We provide hardware, pipes, sanitaryware, power tools, and office/school stationery. Reach us at 01-5925757.`;
}

let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, lang = 'en', history = [] } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getGenAI();

    if (!ai) {
      const reply = getFallbackStoreAnswer(message, lang);
      return res.status(200).json({
        reply,
        source: 'store-knowledge-fallback',
        geminiConfigured: false,
      });
    }

    const systemInstruction = `You are the expert sales, hardware, and stationery consultant for "D&K Hardware and Stationery" (D&K Hardware, Sanitary and Stationery Pvt. Ltd.), located at Kailash Chowk, Madhyapur Thimi, Bagmati Province, Nepal (Direct Phone: 01-5925757, WhatsApp: +977-9842692437).

Store Facts:
- Business Name: D&K Hardware and Stationery
- Address: Kailash Chowk, Madhyapur Thimi, Bagmati Province, 88400, Nepal.
- Phone: 01-5925757 (Direct shop landline for quotes and orders).
- Hours: Monday–Friday 7:30 AM – 6:00 PM; Saturday–Sunday 7:00 AM – 6:00 PM (Open 7 Days a week).
- Departments & Products:
  1. Plumbing & Piping: CPVC Pipes & Fittings (Class 1, SDR 11, SDR 13.5), PPR Hot/Cold Water Pipes (PN 16, PN 20), HDPE Pipes, Brass valves, ball valves, brass fittings, solvents.
  2. Sanitaryware & Bath: Chrome basin faucets, luxury ceramic wash basins, wall-mount shower mixer sets, commodes, bathroom accessories, drains.
  3. Power Tools & Machinery: 20V Max Brushless Cordless Drills (dual 4.0Ah batteries), Angle Grinders, Rotary Hammer Drills, impact drivers, bits, and blades.
  4. Building Hardware: Fasteners, high-tensile anchor bolts, screws, construction adhesives, locks, door fittings.
  5. Stationery & Paper: 75/80 GSM A4 photocopy paper (JK Copier, Paperline), hardbound accounting ledgers, visitor registers, student spiral notebooks, subject copies.
  6. Office & School Supplies: Lever arch box files, Kangaro staplers and punch machines, gel/ballpoint pens, geometry boxes, art & drawing materials.
  7. Electrical & Paints: Modular switches, LED panel lights, acrylic emulsion paints, primers, and Dr. Fixit waterproofing.
- Services: Bulk wholesale discounts for building contractors, schools, and offices, prompt site delivery across Madhyapur Thimi, Bhaktapur, Sallaghari, Koteshwor, and Kathmandu Valley, BOQ quotation estimates within 2 hours.

Instructions:
- Provide friendly, highly accurate, and technically sound advice in the user's language (Nepali if asked in Nepali or Devanagari, English if asked in English).
- When asked about plumbing differences (e.g. CPVC vs PPR, SDR 11 vs SDR 13.5), explain clearly with practical plumber-tested advice.
- When asked about stationery (e.g. bulk paper reams, office files, school supplies), explain options and volume discounts.
- When asked about prices, provide typical Nepal market wholesale ranges and encourage calling the store at 01-5925757, messaging WhatsApp (+977-9842692437), or submitting the BOQ/quote form for the best live rates.
- Keep answers concise, clear, and easy to read with bullet points when relevant.`;

    // Incorporate recent chat history if available
    const recentHistory = Array.isArray(history)
      ? history.slice(-4).map((h: any) => `${h.role === 'user' ? 'Customer' : 'Store Assistant'}: ${h.content}`).join('\n')
      : '';

    const promptWithContext = recentHistory
      ? `Previous conversation:\n${recentHistory}\n\nCustomer question: ${message}`
      : message;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptWithContext,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || getFallbackStoreAnswer(message, lang);

    return res.status(200).json({
      reply: replyText,
      source: 'gemini-3.8-flash',
      geminiConfigured: true,
    });
  } catch (err: any) {
    console.error('Gemini chat error in Vercel function:', err?.message || err);
    const reply = getFallbackStoreAnswer(req.body?.message || '', req.body?.lang || 'en');
    return res.status(200).json({
      reply,
      source: 'store-knowledge-fallback',
      geminiConfigured: false,
      error: err?.message || 'Gemini call failed',
    });
  }
}
