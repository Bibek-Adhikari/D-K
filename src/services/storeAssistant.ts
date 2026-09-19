export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export interface AssistantResponse {
  reply: string;
  source?: 'gemini-3.8-flash' | 'store-knowledge-fallback';
  geminiConfigured?: boolean;
}

export async function askGeminiStoreAssistant(
  prompt: string,
  lang: 'en' | 'ne',
  history: ChatMessage[] = []
): Promise<AssistantResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt, lang, history }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.reply === 'string' && data.reply.trim()) {
        return {
          reply: data.reply,
          source: data.source || 'gemini-3.8-flash',
          geminiConfigured: data.geminiConfigured ?? true,
        };
      }
    }
  } catch (error) {
    console.warn('Network request to /api/chat failed, using local store knowledge:', error);
  }

  // Graceful fallback to rich local store knowledge base
  return {
    reply: answerStoreInquiryLocal(prompt, lang),
    source: 'store-knowledge-fallback',
    geminiConfigured: false,
  };
}

export async function checkAiHealth(): Promise<{ geminiConfigured: boolean; status: string }> {
  try {
    const res = await fetch('/api/health');
    if (res.ok) {
      const data = await res.json();
      return {
        geminiConfigured: !!data.geminiConfigured,
        status: data.status || 'ok',
      };
    }
  } catch {
    // ignore
  }
  return { geminiConfigured: false, status: 'offline' };
}

export function answerStoreInquiryLocal(prompt: string, lang: 'en' | 'ne'): string {
  const p = prompt.toLowerCase();
  const isNepaliInput = /[\u0900-\u097F]/.test(prompt) || lang === 'ne';

  if (p.includes('time') || p.includes('hour') || p.includes('खुल्छ') || p.includes('समय') || p.includes('open') || p.includes('close')) {
    if (isNepaliInput) {
      return `हाम्रो पसल हप्ताको सातै दिन खुल्छ:\n• सोमबार–शुक्रबार: बिहान ७:३० देखि साँझ ६:०० सम्म\n• शनिबार–आइतबार: बिहान ७:०० देखि साँझ ६:०० सम्म\nसम्पर्क फोन: ०१-५९२५७५७`;
    }
    return `Store Opening Hours:\n• Monday–Friday: 7:30 AM – 6:00 PM\n• Saturday–Sunday: 7:00 AM – 6:00 PM\nWe are open 7 days a week! Phone: 01-5925757.`;
  }

  if (p.includes('location') || p.includes('where') || p.includes('address') || p.includes('कहाँ') || p.includes('ठेगाना') || p.includes('चोक') || p.includes('map')) {
    if (isNepaliInput) {
      return `हाम्रो पसल कैलाश चोक, मध्यपुर थिमी, बागमती प्रदेश, ८८४००, नेपालमा अवस्थित छ।\nमुख्य सडकमा गाडी पार्किङ र सामान लोड गर्न सजिलो सुविधा छ।\nगुगल म्याप: https://maps.app.goo.gl/2DAWSwKv6mQhUzQL9`;
    }
    return `Our Store Location:\nKailash Chowk, Madhyapur Thimi, Bagmati Province, 88400, Nepal.\nWe have convenient road access and loading dock facilities.\nGoogle Maps link: https://maps.app.goo.gl/2DAWSwKv6mQhUzQL9`;
  }

  if (p.includes('phone') || p.includes('call') || p.includes('number') || p.includes('सम्पर्क') || p.includes('फोन') || p.includes('नम्बर')) {
    if (isNepaliInput) {
      return `हाम्रो सिधा फोन नम्बर ०१-५९२५७५७ हो। तपाईं तुरुन्तै सामानको स्टक वा थोक मूल्य बुझ्न कल गर्न सक्नुहुन्छ।`;
    }
    return `You can reach our shop directly at 01-5925757 for immediate stock verification, wholesale rates, or orders.`;
  }

  if (p.includes('cpvc') || p.includes('ppr') || p.includes('pipe') || p.includes('पाइप') || p.includes('फिटिङ्स') || p.includes('fitting')) {
    if (isNepaliInput) {
      return `हामीसँग उच्च गुणस्तरका प्रमाणित CPVC तथा PPR पाइप र सम्पूर्ण फिटिङ्स (SDR 11, SDR 13.5, १/२ इन्चदेखि ठूला साइजसम्म) पर्याप्त स्टकमा उपलब्ध छन्। तातो र चिसो पानी दुवैको लागि उपयुक्त छन्।`;
    }
    return `Yes! We carry complete ISI/ISO certified CPVC and PPR hot/cold water pipes and joint fittings in Class 1/2, SDR 11, and SDR 13.5 with full contractor bulk supplies in stock.`;
  }

  if (p.includes('faucet') || p.includes('tap') || p.includes('धारा') || p.includes('क्रोम') || p.includes('basin') || p.includes('बेसिन') || p.includes('sanitary') || p.includes('सेनेटरी')) {
    if (isNepaliInput) {
      return `हामीसँग सोलिड ब्रास कोर भएको क्रोम बेसिन धारा (Faucet), न्यानो-ग्लेज्ड सेरामिक वाश बेसिन, कमोड, शावर र सम्पूर्ण बाथरुम सेनेटरीवेयर उपलब्ध छन्।`;
    }
    return `We stock premium sanitaryware including solid-brass Chrome Basin Faucets with ceramic cartridges, luxury Ceramic Wash Basins, and complete bathroom fittings.`;
  }

  if (p.includes('drill') || p.includes('tool') || p.includes('औजार') || p.includes('टुल्स') || p.includes('power')) {
    if (isNepaliInput) {
      return `हामीसँग २० भोल्ट म्याक्स ब्रसलेस कर्डलेस ड्रिल ड्राइभर (दुईवटा ४.०Ah ब्याट्री र १८+१ टर्क सहित) तथा अन्य विभिन्न पावर टुल्स र निर्माण औजारहरू उपलब्ध छन्।`;
    }
    return `We stock 20V Max Brushless Cordless Drill Drivers (with dual 4.0Ah Li-ion batteries and 60Nm torque) as well as heavy-duty professional building power tools.`;
  }

  if (p.includes('boq') || p.includes('quote') || p.includes('price') || p.includes('rate') || p.includes('कोटेसन') || p.includes('मूल्य') || p.includes('अर्डर')) {
    if (isNepaliInput) {
      return `आवश्यक सामानको सूचीसहित कैलाश चोकस्थित पसलमा सिधै ०१-५९२५७५७ मा फोन गरेर तत्काल थोक छुट सहितको मूल्य बुझ्न सक्नुहुन्छ।`;
    }
    return `Call our desk at 01-5925757 with your material list to get an immediate bulk price discount for your site.`;
  }

  if (p.includes('delivery') || p.includes('डेलिभरी') || p.includes('गाडी') || p.includes('site')) {
    if (isNepaliInput) {
      return `हामी मध्यपुर थिमी, भक्तपुर, सल्लाघारी, लोकन्थली, कोटेश्वर तथा काठमाडौं उपत्यकाका निर्माण स्थल (साइट) मा सिधै सामान डेलिभरी गर्छौं।`;
    }
    return `We provide prompt site delivery across Madhyapur Thimi, Bhaktapur, Lokanthali, Sallaghari, Koteshwor, and the greater Kathmandu Valley for contractor orders.`;
  }

  if (isNepaliInput) {
    return `डी एण्ड के हार्डवेयर एण्ड सेनेटरी प्रा. लि. (कैलाश चोक, मध्यपुर थिमी) मा स्वागत छ। हामीसँग सीपीभीसी/पीपीआर पाइप, सेनेटरीवेयर, पावर टुल्स र सम्पूर्ण हार्डवेयर उपलब्ध छन्। थप जानकारीको लागि कृपया ०१-५९२५७५७ मा फोन गर्नुहोस्।`;
  }
  return `Welcome to D&k Hardware and Sanitary pvt ltd located at Kailash Chowk, Madhyapur Thimi! We specialize in CPVC/PPR pipes, sanitaryware, power tools, and building supplies. Feel free to call us at 01-5925757.`;
}
