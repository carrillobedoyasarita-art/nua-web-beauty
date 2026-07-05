import { Product, Tip } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Base de Maquillaje Natural Glow',
    category: 'makeup',
    price: 45.00,
    brand: 'Natura',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop',
    description: 'Una base ligera que permite que tu piel respire.'
  },
  {
    id: '2',
    name: 'Sérum Ácido Hialurónico',
    category: 'skincare',
    price: 68.00,
    brand: 'ProCare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    description: 'Hidratación profunda para una piel radiante.'
  },
  {
    id: '3',
    name: 'Máscara de Pestañas Volume Up',
    category: 'makeup',
    price: 32.00,
    brand: 'Natura',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Aceite de Argán Reparador',
    category: 'haircare',
    price: 55.00,
    brand: 'BioHair',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Limpiador Facial Suave',
    category: 'skincare',
    price: 28.00,
    brand: 'Natura',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d538?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Kit de Estética Post-Tratamiento',
    category: 'esthetics',
    price: 120.00,
    brand: 'Professional Line',
    image: 'https://images.unsplash.com/photo-1570172619380-6bb04b84c6b7?q=80&w=800&auto=format&fit=crop',
  }
];

export const tips: Tip[] = [
  {
    id: '1',
    title: 'Rutina de Noche para Piel Radiante',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1590439474864-1599a0710ba2?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Descubre los pasos esenciales para despertar con una piel descansada y luminosa.'
  },
  {
    id: '2',
    title: 'Tips para el Cuidado Capilar en Verano',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Protege tu cabello del sol y el cloro con estos consejos infalibles.'
  },
  {
    id: '3',
    title: 'Maquillaje "No-Makeup" en 5 Minutos',
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Aprende a resaltar tu belleza natural con muy pocos productos.'
  }
];
