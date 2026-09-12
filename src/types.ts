export interface Product {
  id: string;
  name: string;
  category: 'Sanitaryware' | 'Plumbing' | 'Power Tools';
  modelSpec: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  stockStatus: 'In Stock' | 'Bulk Available';
  badge?: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  projectType: string;
  itemsList: string;
  notes?: string;
  siteLocation?: string;
}
