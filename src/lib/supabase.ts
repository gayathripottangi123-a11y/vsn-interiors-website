import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  material: string;
  sizes: string[];
  colors: string[];
  image_url: string | null;
  featured: boolean;
  display_order: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_location: string;
  rating: number;
  review: string;
  project_type: string | null;
  created_at: string;
  is_featured: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
  product_interest?: string;
}
