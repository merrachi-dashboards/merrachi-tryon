# Merrachi Virtual Try-On App (Next.js)

This is a custom Shopify App built with **Next.js (App Router)** that adds a Virtual Try-On feature to your store using "Nano Banana2" AI.

## Features

- **Theme App Extension**: Adds a "Try On" button to product pages without modifying theme code.
- **Supabase Storage**: Securely stores user photos.
- **Prisma Database**: Links user photos to their customer ID.
- **AI Integration**: Connects to your hosted AI model for generating try-on images.
- **Next.js App Router**: Modern, server-side rendering and API routes.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_APP_URL=your_app_url
SCOPES=write_products,read_products,read_customers

# Supabase Storage & DB
NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT_REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_anon_key"
SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"

# AI Service (Nano Banana 2)
GEMINI_API_KEY="your_gemini_api_key"
```

### 3. Setup Supabase

1.  Create a new Supabase project.
2.  Create a **Storage Bucket** named `user-photos` (Public Read).
3.  Execute the SQL in `supabase/schema.sql` in your Supabase SQL Editor.

### 4. Configure App Proxy

1.  Go to your Shopify Partner Dashboard > App Setup.
2.  Scroll down to **App Proxy**.
3.  Set **Subpath prefix** to `apps`.
4.  Set **Subpath** to `try-on`.
5.  Set **Proxy URL** to `https://your-app-url.com/api/try-on`.

### 5. Run the App

```bash
npm run dev
```

### 6. Deploy Theme Extension

```bash
npm run deploy
```
