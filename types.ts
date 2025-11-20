export enum WoodCategory {
  HARDWOOD = 'Hardwood',
  SOFTWOOD = 'Softwood',
  PLYWOOD = 'Plywood',
  LAMINATE = 'Laminate',
  TOOLS = 'Tools',
  FINISHES = 'Finishes',
  FURNITURE = 'Furniture'
}

export interface Product {
  id: string;
  name: string;
  category: WoodCategory;
  priceRange: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface OrderStatus {
  orderId: string;
  status: 'Pending' | 'Processing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  date: string;
  items: string;
  location: string;
}

export interface InquiryFormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  woodType: string;
  message: string;
}