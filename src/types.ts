export interface Product {
  id: string;
  name: string;
  category: 'makeup' | 'skincare' | 'haircare' | 'esthetics';
  price: number;
  image: string;
  brand?: string;
  description?: string;
}

export interface Tip {
  id: string;
  title: string;
  category: 'skincare' | 'hair' | 'makeup';
  image: string;
  excerpt: string;
}

export interface Policy {
  title: string;
  content: string;
}
