export type ProductCategory =
  | 'Hardware & Tools'
  | 'Plumbing & Sanitary'
  | 'Stationery & Paper'
  | 'Office & School'
  | 'Electrical & Paint';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  modelSpec: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  stockStatus: 'In Stock' | 'Bulk Available' | 'Order on Request';
  badge?: string;
  brand?: string;
  nepaliName?: string;
  priceEstimate?: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  projectType: string;
  itemsList: string;
  notes?: string;
  siteLocation?: string;
  email?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleNe: string;
  description: string;
  descriptionNe: string;
  iconName: string;
  details: string[];
  targetAudience: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleNe: string;
  excerpt: string;
  excerptNe: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  questionNe: string;
  answer: string;
  answerNe: string;
  category: 'General' | 'Hardware' | 'Stationery' | 'Delivery & Orders';
}

export type ActiveView =
  | 'home'
  | 'products'
  | 'services'
  | 'about'
  | 'blog'
  | 'contact'
  | 'privacy'
  | 'terms';
