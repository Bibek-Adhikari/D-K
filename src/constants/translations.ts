export interface ProductItem {
  id: string;
  nameEn: string;
  nameNe: string;
  categoryEn: 'Sanitaryware' | 'Plumbing' | 'Power Tools';
  categoryNe: 'सेनेटरीवेयर' | 'प्लम्बिङ' | 'पावर टुल्स';
  modelSpecEn: string;
  modelSpecNe: string;
  descriptionEn: string;
  descriptionNe: string;
  imageUrl: string;
  imageAlt: string;
  featuresEn: string[];
  featuresNe: string[];
  stockStatusEn: 'In Stock' | 'Bulk Available';
  stockStatusNe: 'स्टकमा उपलब्ध' | 'थोक अर्डर उपलब्ध';
  badgeEn: string;
  badgeNe: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'chrome-basin-faucet',
    nameEn: 'Chrome Basin Faucet',
    nameNe: 'क्रोम बेसिन धारा (Faucet)',
    categoryEn: 'Sanitaryware',
    categoryNe: 'सेनेटरीवेयर',
    modelSpecEn: 'Solid Brass Core • Multi-layer Chrome Finish',
    modelSpecNe: 'सोलिड ब्रास कोर • बहु-तह क्रोम फिनिस',
    descriptionEn: 'Heavy-duty single-lever bathroom faucet with ceramic disc cartridge, drip-free aerator, and corrosion-resistant mirror polish.',
    descriptionNe: 'सेरामिक डिस्क कार्ट्रिज, ड्रिप-फ्री एरेटर र खिया-प्रतिरोधी क्रोम फिनिस भएको टिकाउ र आधुनिक बाथरुम धारा।',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Chrome Basin Faucet with polished mirror finish',
    featuresEn: [
      'Ceramic disc valve cartridge',
      'High-pressure water flow aerator',
      'Anti-tarnish electroplated chrome',
      'Standard 1/2" plumbing connection'
    ],
    featuresNe: [
      'सेरामिक डिस्क भल्भ कार्ट्रिज (लिक-प्रुफ)',
      'पानीको उचित बहाव दिने एरेटर',
      'चम्किलो र खिया नलाग्ने क्रोम कोटिङ',
      'मानक १/२ इन्च प्लम्बिङ कनेक्सन'
    ],
    stockStatusEn: 'In Stock',
    stockStatusNe: 'स्टकमा उपलब्ध',
    badgeEn: 'Popular Sanitaryware',
    badgeNe: 'लोकप्रिय सेनेटरी'
  },
  {
    id: 'cpvc-ppr-pipes-fittings',
    nameEn: 'CPVC / PPR Pipes & Fittings',
    nameNe: 'सीपीभीसी र पीपीआर पाइप तथा फिटिङ्स',
    categoryEn: 'Plumbing',
    categoryNe: 'प्लम्बिङ',
    modelSpecEn: 'Class 1 & 2 • SDR 11 & SDR 13.5 Pressure Rated',
    modelSpecNe: 'क्लास १ र २ • SDR 11 र SDR 13.5 प्रेसर रेटेड',
    descriptionEn: 'High-temperature, chemical-resistant hot and cold water distribution pipes and joint fittings for residential & commercial projects.',
    descriptionNe: 'तातो तथा चिसो पानीको लागि उच्च तापक्रम र दबाब धान्न सक्ने, खिया र फोहोर नजम्ने उत्कृष्ट पाइप र फिटिङ्स।',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Industrial grade CPVC and PPR plumbing pipes and fittings',
    featuresEn: [
      'Hot & Cold pressure resistant up to 93°C',
      'Zero scale & algae build-up',
      'Solvent weld & heat fusion jointing',
      'ISI / ISO standard certified'
    ],
    featuresNe: [
      '९३°C सम्म तातो र चिसो पानी प्रतिरोधी',
      'लेउ र खिया नलाग्ने चिल्लो भित्री सतह',
      'सल्भेन्ट वेल्ड तथा हिट फ्युजन जोड्ने प्रविधि',
      'आईएसआई तथा आईएसओ गुणस्तर प्रमाणित'
    ],
    stockStatusEn: 'Bulk Available',
    stockStatusNe: 'थोक अर्डर उपलब्ध',
    badgeEn: 'Contractor Choice',
    badgeNe: 'ठेकेदारहरूको रोजाइ'
  },
  {
    id: 'cordless-drill-driver',
    nameEn: 'Cordless Drill Driver',
    nameNe: 'कर्डलेस ड्रिल ड्राइभर (२० भोल्ट)',
    categoryEn: 'Power Tools',
    categoryNe: 'पावर टुल्स',
    modelSpecEn: '20V Max Lithium-Ion • Brushless Motor',
    modelSpecNe: '२० भोल्ट म्याक्स लिथियम-आयन • ब्रसलेस मोटर',
    descriptionEn: 'Heavy-duty 2-speed variable drill driver with 18+1 torque clutch settings, LED work-light, and fast-charging dual battery pack.',
    descriptionNe: '१८+१ टर्क सेटिङ, एलईडी लाइट, र दुईवटा रिचार्जेबल ब्याट्री भएको व्यावसायिक निर्माण तथा फिटिङ ड्रिल।',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Professional 20V cordless drill driver power tool',
    featuresEn: [
      'Brushless motor with 60Nm torque',
      'Dual speed gear transmission (0-450 / 0-1700 RPM)',
      '13mm heavy-duty keyless chuck',
      '2x 4.0Ah Li-ion batteries included'
    ],
    featuresNe: [
      '६०Nm टर्क सहितको शक्तिशाली ब्रसलेस मोटर',
      'दुई गियर स्पिड ट्रान्समिसन (०-४५० / ०-१७०० RPM)',
      '१३ मिमी हेभी-ड्युटी किलेस चक',
      '२ वटा ४.०Ah लिथियम ब्याट्री सहित'
    ],
    stockStatusEn: 'In Stock',
    stockStatusNe: 'स्टकमा उपलब्ध',
    badgeEn: 'High Torque',
    badgeNe: 'उच्च शक्ति'
  },
  {
    id: 'ceramic-wash-basin',
    nameEn: 'Ceramic Wash Basin',
    nameNe: 'सेरामिक वाश बेसिन',
    categoryEn: 'Sanitaryware',
    categoryNe: 'सेनेटरीवेयर',
    modelSpecEn: 'Vitreous China • Glazed Easy-Clean Surface',
    modelSpecNe: 'भिट्रियस चाइना • न्यानो-ग्लेज्ड सजिलो सफाइ',
    descriptionEn: 'Elegant counter-top or wall-mounted ceramic wash basin featuring deep splash-free bowl geometry and stain-resistant glaze.',
    descriptionNe: 'दाग नबस्ने न्यानो-ग्लेज्ड सतह र छिटा नउफ्रिने गहिरो बनावट भएको आधुनिक डिजाइनको सेरामिक बेसिन।',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Luxury ceramic wash basin in modern bathroom setting',
    featuresEn: [
      'Nano-glazed antibacterial ceramic',
      'Pre-punched single faucet hole',
      'Integrated overflow prevention outlet',
      'Scratch & chemical resistant finish'
    ],
    featuresNe: [
      'न्यानो-ग्लेज्ड एन्टिब्याक्टेरियल सेरामिक',
      'सजिलो फिटिङको लागि पूर्व-तयार धारा प्वाल',
      'पानी बगेर नजाने ओभरफ्लो आउटलेट',
      'कोरिन तथा केमिकल प्रतिरोधी फिनिस'
    ],
    stockStatusEn: 'In Stock',
    stockStatusNe: 'स्टकमा उपलब्ध',
    badgeEn: 'Luxury Fixture',
    badgeNe: 'आधुनिक डिजाइन'
  }
];

export const translations = {
  en: {
    brandName: 'D&k Hardware and Sanitary pvt ltd',
    brandShort: 'D&K Hardware',
    estd: 'ESTD. 2072 B.S. (2015 A.D.)',
    tagline: 'A Decade of Experience, and Trust.',
    heroDesc: 'Your reliable partner providing quality construction materials in Madhyapur Thimi, Bhaktapur for the past 10 years.',
    ourProducts: 'Our Services',
    yearsTrust: 'Years of Trust',
    happyClients: 'Happy Clients',
    qualityCheck: 'Quality Check',
    locationShort: 'Kailash Chowk, Madhyapur Thimi, Nepal',
    locationFull: 'Kailash Chowk, Madhyapur Thimi, Bagmati Province, 88400, Nepal',
    phone: '01-5925757',
    hours: {
      weekdays: 'Monday–Friday: 7:30 AM – 6:00 PM',
      weekends: 'Saturday–Sunday: 7:00 AM – 6:00 PM',
      combined: 'Mon–Fri: 7:30 AM – 6:00 PM | Sat–Sun: 7:00 AM – 6:00 PM',
      badge: 'Open 7 Days a Week'
    },
    hero: {
      badge: 'Direct Wholesale & Retail Hardware Supplier • Madhyapur Thimi',
      title: 'D&k Hardware and Sanitary pvt ltd',
      desc: 'Your certified regional source for premium CPVC/PPR plumbing, luxury sanitaryware, professional power tools, and comprehensive building supplies. Supplying contractors, plumbers, and homeowners with authentic brands at guaranteed wholesale prices.',
      callBtn: 'Call Now: 01-5925757',
      quoteBtn: 'Request BOQ Quote',
      directionsBtn: 'Kailash Chowk, Thimi',
      profileTitle: 'Store Highlights',
      openToday: 'Open Today',
      points: [
        { title: '100% Genuine & Certified', desc: 'Authorized supplier for top CPVC/PPR & sanitary brands.' },
        { title: 'Full Contractor Support', desc: 'Instant BOQ estimates, bulk discounts & customized orders.' },
        { title: 'Site Delivery Available', desc: 'Fast delivery across Madhyapur Thimi, Bhaktapur & Kathmandu.' }
      ],
      urgentMaterial: 'Need urgent material on site?'
    },
    stats: {
      stat1Value: '100%',
      stat1Label: 'Genuine Quality',
      stat2Value: '7 Days',
      stat2Label: 'Open Weekly',
      stat3Value: 'Wholesale',
      stat3Label: 'Direct Pricing',
      stat4Value: 'Madhyapur',
      stat4Label: 'Thimi Kailash Chowk'
    },
    products: {
      badge: 'Premium Inventory & Materials',
      title: 'Featured Products Catalog',
      desc: 'High-performance hardware, CPVC/PPR piping systems, and luxury sanitaryware in stock. Click "Add to BOQ Quote" to build your bulk inquiry list instantly.',
      liveBadge: 'Stock verified at Kailash Chowk branch',
      addToBoq: 'Add to BOQ Quote',
      added: 'Added to BOQ',
      specs: 'View Specifications',
      close: 'Close',
      techHighlights: 'Technical Highlights & Features'
    },
    boq: {
      badge: 'Contractors & Bulk Inquiries',
      title: 'BOQ & Price Quotation Form',
      desc: 'Submit your Bill of Quantities (BOQ), material specifications, or bulk order list. Our sales team at Kailash Chowk prepares custom contractor quotes with tiered discounts.',
      fullNameLabel: 'Contractor / Client Full Name',
      fullNamePlaceholder: 'e.g., Rajesh Shrestha / Shrestha Construction',
      phoneLabel: 'Contact Phone Number',
      phonePlaceholder: 'e.g., 98XXXXXXXX or 01-5925757',
      projectTypeLabel: 'Project Type',
      notesLabel: 'Site Location / Delivery Notes (Optional)',
      notesPlaceholder: 'e.g., Delivery required near Lokanthali or Radhe Radhe',
      itemsLabel: 'Material & Items List',
      itemsPlaceholder: 'Enter required items, quantities, pipe sizes, sanitary models, or paste your BOQ list here...',
      clear: 'Clear list',
      quickAddTitle: 'Quick Add Common Items:',
      submitBtn: 'Submit BOQ for Pricing',
      submitting: 'Generating Quotation...',
      inquiryRef: 'Inquiry Reference',
      quoteReceived: 'Quotation Request Received!',
      thankYou: 'Thank you',
      thankYouDesc: 'Our staff at Kailash Chowk is reviewing your list and will contact you promptly.',
      callStoreFast: 'Call Store to Fast-Track',
      copyDetails: 'Copy Quote Details',
      copied: 'Copied to Clipboard',
      submitAnother: 'Submit Another BOQ'
    },
    commitment: {
      badge: 'Our Quality Commitment',
      title: 'Never Compromise on Quality',
      highlightWord: 'Compromise',
      desc: 'For structures that endure for generations, we only stock genuine, pressure-tested CPVC/PPR pipes, lead-free brass faucets, and industry-grade hardware fixtures.'
    },
    about: {
      badge: 'About Our Store',
      title: 'Your Trusted Hardware & Sanitary Partner in Thimi',
      desc: 'Situated at the vital junction of Kailash Chowk in Madhyapur Thimi, D&k Hardware and Sanitary pvt ltd has grown into a cornerstone for local builders, plumbers, and homeowners. We provide comprehensive stock so your construction work never pauses.',
      points: [
        'Certified CPVC & PPR hot/cold piping systems',
        'Designer sanitaryware & water-saving brassware',
        'Commercial & residential contractor wholesale supply',
        'Direct road access with easy vehicle loading docks'
      ]
    },
    contact: {
      badge: 'Store Visit & Location',
      title: 'Find Us at Kailash Chowk, Thimi',
      desc: 'Visit our showroom and warehouse for direct purchasing, technical consultation, or bulk contractor pickup.',
      storefrontBadge: 'Official Storefront',
      storeLocationTitle: 'Store Location',
      loadingDockNote: 'Prime road frontage with vehicular loading space',
      phoneTitle: 'Direct Landline & Orders',
      phoneDesc: 'Call for instant stock verification, delivery dispatch, and wholesale quotes.',
      dialBtn: 'Dial 01-5925757',
      hoursTitle: 'Opening Hours',
      hoursSubtitle: 'Open 7 days a week for uninterrupted contractor supplies and emergency fittings.',
      getDirections: 'Get Directions on Google Maps',
      interactiveMap: 'Interactive Map Location:',
      openMapApp: 'Open in Google Maps App',
      dockFacility: 'Easy loading space for tippers, pickup trucks, and delivery vehicles.',
      callAhead: 'Call ahead for ready order pickup: 01-5925757'
    },
    footer: {
      desc: 'Premier partner for certified CPVC/PPR plumbing pipes, designer sanitary fixtures, high-torque power tools, and building hardware in Madhyapur Thimi, Nepal.',
      detailedLocation: 'Detailed Location',
      hoursTitle: 'Store Hours',
      customerLine: 'Contractor & Customer Line',
      deliveryScope: 'Bulk delivery available across Thimi, Bhaktapur, Sallaghari, Koteshwor, and Kathmandu.',
      copyright: 'All rights reserved.',
      backToTop: 'Back to Top'
    },
    chat: {
      greeting: 'Namaste! Welcome to D&k Hardware and Sanitary pvt ltd. I am your store AI assistant. How can I help you with plumbing, sanitaryware, power tools, or store info at Kailash Chowk, Thimi?',
      title: 'D&K AI Store Assistant',
      subtitle: 'Kailash Chowk, Thimi • Ask in English or Nepali',
      placeholder: 'Ask about pipes, sanitaryware, store hours, or BOQ...',
      send: 'Send',
      callInstead: 'Or Call Us Directly: 01-5925757',
      quickPrompts: [
        'Do you have CPVC pipes in stock?',
        'Where are you located in Thimi?',
        'What are your store hours?',
        'How can I submit a BOQ quotation?'
      ]
    },
    nav: {
      products: 'Products',
      boq: 'BOQ Quote',
      commitment: 'Commitment',
      location: 'Location & Hours',
      contact: 'Contact',
      callCta: 'Call Now: 01-5925757'
    }
  },
  ne: {
    brandName: 'डी एण्ड के हार्डवेयर एण्ड सेनेटरी प्रा. लि.',
    brandShort: 'डी एण्ड के हार्डवेयर',
    estd: 'स्थापना २०७२ वि.सं. (२०१५ ई.सं.)',
    tagline: 'एक दशकको अनुभव, र विश्वास।',
    heroDesc: 'विगत १० वर्षदेखि मध्यपुर थिमी, भक्तपुरमा गुणस्तरीय निर्माण सामग्री उपलब्ध गराउँदै आएको तपाईंको भरपर्दो साझेदार।',
    ourProducts: 'हाम्रा सेवाहरू',
    yearsTrust: 'वर्षको विश्वास',
    happyClients: 'सन्तुष्ट ग्राहक',
    qualityCheck: 'गुणस्तर जाँच',
    locationShort: 'कैलाश चोक, मध्यपुर थिमी, नेपाल',
    locationFull: 'कैलाश चोक, मध्यपुर थिमी, बागमती प्रदेश, ८८४००, नेपाल',
    phone: '०१-५९२५७५७',
    hours: {
      weekdays: 'सोमबार–शुक्रबार: बिहान ७:३० – साँझ ६:००',
      weekends: 'शनिबार–आइतबार: बिहान ७:०० – साँझ ६:००',
      combined: 'सोम–शुक्र: बिहान ७:३० – साँझ ६:०० | शनि–आइत: बिहान ७:०० – साँझ ६:००',
      badge: 'हप्ताको ७ दिन खुला'
    },
    hero: {
      badge: 'प्रत्यक्ष थोक तथा खुद्रा हार्डवेयर आपूर्तिकर्ता • मध्यपुर थिमी',
      title: 'डी एण्ड के हार्डवेयर एण्ड सेनेटरी प्रा. लि.',
      desc: 'गुणस्तरीय सीपीभीसी र पीपीआर प्लम्बिङ पाइप, आधुनिक सेनेटरीवेयर, भरपर्दा पावर टुल्स तथा सम्पूर्ण निर्माण सामग्रीहरूको आधिकारिक केन्द्र। ठेकेदार, प्लम्बर तथा घरधनीहरूलाई उचित थोक मूल्यमा सामान उपलब्ध गराउँदै।',
      callBtn: 'सम्पर्क: ०१-५९२५७५७',
      quoteBtn: 'BOQ कोटेसन अनुरोध',
      directionsBtn: 'कैलाश चोक, थिमी',
      profileTitle: 'पसलको मुख्य विशेषताहरू',
      openToday: 'आज खुला छ',
      points: [
        { title: '१००% गुणस्तरीय र प्रमाणित', desc: 'उत्कृष्ट सीपीभीसी/पीपीआर तथा सेनेटरी ब्रान्डहरूको आधिकारिक बिक्रेता।' },
        { title: 'ठेकेदारहरूलाई विशेष सुविधा', desc: 'तत्काल BOQ इस्टिमेट, विशेष छुट र सहज अर्डर व्यवस्था।' },
        { title: 'साइटमै डेलिभरी सुविधा', desc: 'मध्यपुर थिमी, भक्तपुर र काठमाडौं उपत्यकाभर छिटो डेलिभरी।' }
      ],
      urgentMaterial: 'साइटमा तत्काल सामग्री चाहियो?'
    },
    stats: {
      stat1Value: '१००%',
      stat1Label: 'गुणस्तरीय सामान',
      stat2Value: '७ दिन',
      stat2Label: 'हप्ताभर खुला',
      stat3Value: 'सुलभ',
      stat3Label: 'थोक मूल्य',
      stat4Value: 'मध्यपुर',
      stat4Label: 'थिमी कैलाश चोक'
    },
    products: {
      badge: 'उत्कृष्ट सामान तथा सामग्रीहरू',
      title: 'प्रमुख उत्पादनहरू (Featured Catalog)',
      desc: 'उच्च गुणस्तरका हार्डवेयर, सीपीभीसी/पीपीआर पाइप र आधुनिक सेनेटरी सामानहरू स्टकमा उपलब्ध छन्। आफ्नो सामान छनोट गर्न "BOQ कोटेसनमा थप्नुहोस्" थिच्नुहोस्।',
      liveBadge: 'कैलाश चोक शाखामा स्टक उपलब्ध',
      addToBoq: 'BOQ कोटेसनमा थप्नुहोस्',
      added: 'कोटेसनमा थपियो',
      specs: 'विस्तृत विवरण हेर्नुहोस्',
      close: 'बन्द गर्नुहोस्',
      techHighlights: 'प्राविधिक विशेषताहरू'
    },
    boq: {
      badge: 'ठेकेदार तथा ग्राहकहरूको लागि',
      title: 'BOQ तथा मूल्य कोटेसन फारम',
      desc: 'तपाईंको निर्माण सामग्रीको सूची (BOQ), आवश्यक सामान वा थोक अर्डर पठाउनुहोस्। कैलाश चोकस्थित हाम्रो टिमले विशेष छुट सहित तुरुन्तै मूल्य उपलब्ध गराउनेछ।',
      fullNameLabel: 'ठेकेदार वा ग्राहकको पूरा नाम',
      fullNamePlaceholder: 'उदाहरण: राजेश श्रेष्ठ / श्रेष्ठ कन्स्ट्रक्सन',
      phoneLabel: 'सम्पर्क फोन नम्बर',
      phonePlaceholder: 'उदाहरण: ९८XXXXXXXX वा ०१-५९२५७५७',
      projectTypeLabel: 'परियोजनाको प्रकार',
      notesLabel: 'साइट लोकेसन / डेलिभरी नोट (ऐच्छिक)',
      notesPlaceholder: 'उदाहरण: लोकन्थली वा राधे-राधे नजिक साइटमा डेलिभरी चाहिने',
      itemsLabel: 'सामग्री तथा सामानहरूको सूची (BOQ)',
      itemsPlaceholder: 'सामानको नाम, साइज, परिमाण वा आफ्नो BOQ तालिका यहाँ लेख्नुहोस्...',
      clear: 'सूची खाली गर्नुहोस्',
      quickAddTitle: 'छिटो थप्न सकिने सामान्य सामानहरू:',
      submitBtn: 'मूल्य कोटेसन पठाउनुहोस्',
      submitting: 'कोटेसन तयार हुँदैछ...',
      inquiryRef: 'इन्क्वायरी नम्बर',
      quoteReceived: 'कोटेसन अनुरोध प्राप्त भयो!',
      thankYou: 'धन्यवाद',
      thankYouDesc: 'कैलाश चोकस्थित हाम्रो स्टाफले तपाईंको सूची हेरेर तुरुन्तै सम्पर्क गर्नेछ।',
      callStoreFast: 'छिटो सम्पर्कको लागि फोन गर्नुहोस्',
      copyDetails: 'विवरण प्रतिलिपि गर्नुहोस्',
      copied: 'कपि गरियो',
      submitAnother: 'अर्को BOQ पठाउनुहोस्'
    },
    commitment: {
      badge: 'हाम्रो प्रतिबद्धता',
      title: 'गुणस्तरमा कहिल्यै सम्झौता छैन',
      highlightWord: 'सम्झौता',
      desc: 'दशकौंसम्म टिक्ने बलियो संरचनाको लागि हामी गुणस्तर प्रमाणित सीपीभीसी/पीपीआर पाइप, लिक-प्रुफ धाराहरू र भरपर्दा निर्माण सामग्री मात्र उपलब्ध गराउँछौं।'
    },
    about: {
      badge: 'हाम्रो बारेमा',
      title: 'थिमीमा तपाईंको भरपर्दो हार्डवेयर र सेनेटरी साथी',
      desc: 'मध्यपुर थिमीको मुख्य कैलाश चोकमा अवस्थित डी एण्ड के हार्डवेयर एण्ड सेनेटरी प्रा. लि. ले स्थानीय निर्माणकर्ता, प्लम्बर तथा घरधनीहरूलाई निरन्तर भरपर्दो सेवा प्रदान गर्दै आइरहेको छ।',
      points: [
        'प्रमाणित सीपीभीसी र पीपीआर तातो/चिसो पाइप प्रणाली',
        'आधुनिक सेनेटरीवेयर र लामो समय टिक्ने धाराहरू',
        'ठेकेदारहरूलाई विशेष थोक तथा खुद्रा आपूर्ति',
        'गाडी पार्किङ र सामान लोड गर्न सहज सडक पहुँच'
      ]
    },
    contact: {
      badge: 'पसल भ्रमण तथा लोकेसन',
      title: 'हामीलाई कैलाश चोक, थिमीमा भेट्नुहोस्',
      desc: 'प्रत्यक्ष सामान खरिद, प्राविधिक सल्लाह वा अर्डर संकलनको लागि हाम्रो पसलमा स्वागत छ।',
      storefrontBadge: 'आधिकारिक पसल',
      storeLocationTitle: 'पसलको ठेगाना',
      loadingDockNote: 'सामान लोड तथा अनलोड गर्न गाडीको सहज पहुँच',
      phoneTitle: 'सम्पर्क तथा अर्डर फोन',
      phoneDesc: 'स्टक बुझ्न, सामान पठाउन तथा थोक मूल्यको लागि फोन गर्नुहोस्।',
      dialBtn: 'फोन गर्नुहोस्: ०१-५९२५७५७',
      hoursTitle: 'खुल्ने समय',
      hoursSubtitle: 'हप्ताको सातै दिन निर्माण सामग्री तथा प्लम्बिङ सामानको लागि खुला रहने।',
      getDirections: 'Google Maps मा बाटो हेर्नुहोस्',
      interactiveMap: 'नक्सामा पसलको लोकेसन:',
      openMapApp: 'Google Maps एपमा खोल्नुहोस्',
      dockFacility: 'टिपर, पिकअप र डेलिभरी गाडीहरूको लागि सजिलो लोडिङ ठाउँ।',
      callAhead: 'तयार सामान लिन आउनुअघि फोन गर्नुहोस्: ०१-५९२५७५७'
    },
    footer: {
      desc: 'मध्यपुर थिमी, नेपालमा प्रमाणित सीपीभीसी/पीपीआर प्लम्बिङ पाइप, आधुनिक सेनेटरीवेयर, पावर टुल्स र हार्डवेयरको भरपर्दो केन्द्र।',
      detailedLocation: 'विस्तृत ठेगाना',
      hoursTitle: 'पसल खुल्ने समय',
      customerLine: 'ग्राहक तथा ठेकेदार हेल्पलाइन',
      deliveryScope: 'थिमी, भक्तपुर, सल्लाघारी, कोटेश्वर र काठमाडौंका साइटहरूमा थोक डेलिभरी सुविधा।',
      copyright: 'सर्वाधिकार सुरक्षित।',
      backToTop: 'माथि जानुहोस्'
    },
    chat: {
      greeting: 'नमस्ते! डी एण्ड के हार्डवेयर एण्ड सेनेटरी प्रा. लि. मा तपाईंलाई स्वागत छ। म यहाँको एआई सहायक हुँ। प्लम्बिङ, सेनेटरी, औजार वा कैलाश चोकस्थित पसल सम्बन्धी के जानकारी चाहिन्छ?',
      title: 'डी एण्ड के एआई सहायक',
      subtitle: 'कैलाश चोक, थिमी • नेपाली वा अङ्ग्रेजीमा सोध्नुहोस्',
      placeholder: 'पाइप, धारा, पसल खुल्ने समय वा BOQ बारे सोध्नुहोस्...',
      send: 'पठाउनुहोस्',
      callInstead: 'वा सिधै फोन गर्नुहोस्: ०१-५९२५७५७',
      quickPrompts: [
        'सीपीभीसी पाइप स्टकमा छ?',
        'पसल थिमीको कुन ठाउँमा छ?',
        'पसल कति बजेसम्म खुल्छ?',
        'BOQ कोटेसन कसरी पठाउने?'
      ]
    },
    nav: {
      products: 'सामानहरू',
      boq: 'BOQ कोटेसन',
      commitment: 'प्रतिबद्धता',
      location: 'लोकेसन र समय',
      contact: 'सम्पर्क',
      callCta: 'कल गर्नुहोस्: ०१-५९२५७५७'
    }
  }
};
