import { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'chrome-basin-faucet',
    name: 'Chrome Basin Faucet',
    category: 'Sanitaryware',
    modelSpec: 'Solid Brass Core • Multi-layer Chrome Finish',
    description: 'Heavy-duty single-lever bathroom faucet with ceramic disc cartridge, drip-free aerator, and corrosion-resistant polished chrome coating.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Chrome Basin Faucet with polished mirror finish',
    features: ['Ceramic disc valve cartridge', 'High-pressure water flow aerator', 'Anti-tarnish electroplated chrome', 'Standard 1/2" plumbing connection'],
    stockStatus: 'In Stock',
    badge: 'Popular Sanitaryware'
  },
  {
    id: 'cpvc-ppr-pipes-fittings',
    name: 'CPVC / PPR Pipes & Fittings',
    category: 'Plumbing',
    modelSpec: 'Class 1 & 2 • SDR 11 & SDR 13.5 Pressure Rated',
    description: 'High-temperature, chemical-resistant hot and cold water distribution pipes and joint fittings for residential & commercial building projects.',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Industrial grade CPVC and PPR plumbing pipes and fittings',
    features: ['Hot & Cold pressure resistant up to 93°C', 'Zero scale & algae build-up', 'Solvent weld & heat fusion jointing', 'ISI / ISO standard certified'],
    stockStatus: 'Bulk Available',
    badge: 'Contractor Choice'
  },
  {
    id: 'cordless-drill-driver',
    name: 'Cordless Drill Driver',
    category: 'Power Tools',
    modelSpec: '20V Max Lithium-Ion • Brushless Motor',
    description: 'Heavy-duty 2-speed variable drill driver with 18+1 torque clutch settings, LED work-light, and fast-charging dual battery pack for builders and technicians.',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Professional 20V cordless drill driver power tool',
    features: ['Brushless motor with 60Nm torque', 'Dual speed gear transmission (0-450 / 0-1700 RPM)', '13mm heavy-duty keyless chuck', '2x 4.0Ah Li-ion batteries included'],
    stockStatus: 'In Stock',
    badge: 'High Torque'
  },
  {
    id: 'ceramic-wash-basin',
    name: 'Ceramic Wash Basin',
    category: 'Sanitaryware',
    modelSpec: 'Vitreous China • Glazed Easy-Clean Surface',
    description: 'Elegant counter-top or wall-mounted ceramic wash basin featuring deep splash-free bowl geometry and stain-resistant glaze formulation.',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Luxury ceramic wash basin in modern bathroom setting',
    features: ['Nano-glazed antibacterial ceramic', 'Pre-punched single faucet hole', 'Integrated overflow prevention outlet', 'Scratch & chemical resistant finish'],
    stockStatus: 'In Stock',
    badge: 'Luxury Fixture'
  }
];

export const BUSINESS_INFO = {
  name: 'D&k Hardware and Sanitary pvt ltd',
  shortName: 'D&k Hardware',
  location: 'Kailash Chowk, Madhyapur Thimi, Bagmati Province, 88400, Nepal',
  phone: '01-5925757',
  phoneDisplay: '01-5925757',
  phoneTel: 'tel:01-5925757',
  hours: {
    weekdays: 'Monday–Friday: 7:30 AM – 6:00 PM',
    weekends: 'Saturday–Sunday: 7:00 AM – 6:00 PM',
    combined: 'Mon–Fri: 7:30 AM – 6:00 PM | Sat–Sun: 7:00 AM – 6:00 PM'
  },
  mapUrl: 'https://maps.app.goo.gl/2DAWSwKv6mQhUzQL9',
  mapEmbedUrl: 'https://www.google.com/maps?q=Kailash+Chowk,+Madhyapur+Thimi,+Nepal&output=embed'
};
