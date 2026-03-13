/*
  # VSN Interiors Database Schema

  ## Overview
  Creates database tables for VSN Interiors luxury furniture website

  ## New Tables
  
  ### `products`
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text) - Product name
  - `category` (text) - Product category (Steel Cupboards, Office Desks, etc.)
  - `description` (text) - Product description
  - `material` (text) - Material type (default: Stainless Steel)
  - `sizes` (text[]) - Available sizes
  - `colors` (text[]) - Available color options
  - `image_url` (text) - Product image URL
  - `featured` (boolean) - Whether product is featured
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz) - Record creation timestamp

  ### `testimonials`
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `client_name` (text) - Client's name
  - `client_location` (text) - Client's location
  - `rating` (integer) - Rating (1-5 stars)
  - `review` (text) - Testimonial content
  - `project_type` (text) - Type of project
  - `created_at` (timestamptz) - Record creation timestamp
  - `is_featured` (boolean) - Whether testimonial is featured

  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique submission identifier
  - `name` (text) - Contact name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `message` (text) - Contact message
  - `product_interest` (text) - Product they're interested in
  - `status` (text) - Submission status (default: new)
  - `created_at` (timestamptz) - Submission timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for products and testimonials
  - Authenticated insert for contact submissions
  - Public insert allowed for contact form (with rate limiting consideration)
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  material text DEFAULT 'Stainless Steel',
  sizes text[] DEFAULT ARRAY[]::text[],
  colors text[] DEFAULT ARRAY[]::text[],
  image_url text,
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_location text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  project_type text,
  created_at timestamptz DEFAULT now(),
  is_featured boolean DEFAULT false
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  product_interest text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Products policies: Public read access
CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Testimonials policies: Public read access for featured testimonials
CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

-- Contact submissions policies: Anyone can insert (for public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);

-- Insert sample products
INSERT INTO products (name, category, description, material, sizes, colors, featured, display_order) VALUES
  ('Executive Steel Cupboard', 'Steel Cupboards', 'Premium stainless steel cupboard with reinforced shelves and modern locking system. Perfect for offices and homes.', 'Stainless Steel', ARRAY['Small (3ft)', 'Medium (5ft)', 'Large (6ft)'], ARRAY['Silver', 'Black', 'White', 'Custom'], true, 1),
  ('Premium Office Desk', 'Office Desks', 'Ergonomic office desk with spacious work surface and integrated cable management. Built for productivity.', 'Stainless Steel Frame', ARRAY['Standard (4ft)', 'Large (5ft)', 'Executive (6ft)'], ARRAY['Walnut', 'Oak', 'White', 'Black', 'Custom'], true, 2),
  ('Industrial Storage Rack', 'Industrial Racks', 'Heavy-duty industrial rack system with adjustable shelving. Ideal for warehouses and factories.', 'Industrial Grade Steel', ARRAY['6 Shelf', '8 Shelf', '10 Shelf', 'Custom'], ARRAY['Grey', 'Blue', 'Orange', 'Custom'], true, 3),
  ('Luxury Home Almirah', 'Home Almirahs', 'Elegant steel almirah with mirror finish and soft-close doors. Combines security with sophistication.', 'Stainless Steel', ARRAY['Single Door', 'Double Door', 'Triple Door'], ARRAY['Gold', 'Silver', 'Rose Gold', 'Custom'], true, 4);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_location, rating, review, project_type, is_featured) VALUES
  ('Rajesh Kumar', 'Vizianagaram', 5, 'Exceptional quality and service! VSN Interiors transformed our office with their premium steel furniture. The attention to detail is remarkable.', 'Commercial Office', true),
  ('Priya Sharma', 'Vizianagaram', 5, 'Absolutely love our new home almirah! The craftsmanship is outstanding and the custom gold finish is stunning. Highly recommended!', 'Residential', true),
  ('Venkat Industries', 'Vizianagaram', 5, 'We equipped our entire warehouse with their industrial racks. Extremely durable and great value for money. Professional team!', 'Industrial', true),
  ('Lakshmi Reddy', 'Vizianagaram', 5, 'The executive desks are perfect for our startup office. Modern design, excellent quality, and great customer service!', 'Commercial Office', true);