# Madina Departmental Store - Grocery E-commerce

A complete Next.js grocery storefront for Madina Departmental Store with Bangla/English support, cart, WhatsApp checkout, Supabase database persistence, and an owner-friendly admin dashboard.

## Sample Admin Login

- URL: `/admin`
- Email: `admin@madina.local`
- Password: `Madina@123`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase Database Setup

The project now supports permanent product, settings, and banner storage using Supabase.

1. Create a free Supabase project at `https://supabase.com`.
2. In Supabase, open **SQL Editor**.
3. Copy all SQL from `supabase-schema.sql` and run it.
4. In Supabase, open **Project Settings > API**.
5. Copy your **Project URL**.
6. Copy your **service_role key**. Keep this key private.
7. Create a `.env.local` file in this project folder:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_EMAIL=admin@madina.local
ADMIN_PASSWORD=Madina@123
ADMIN_SESSION_SECRET=change-this-to-a-long-random-secret
```

8. Restart the dev server with `npm run dev`.

When Supabase is configured, the website automatically seeds the default products, settings, and banners into the database if the table is empty. Dashboard changes then persist permanently in Supabase.

## Admin Dashboard Guide

1. Go to `/admin`.
2. Log in with the sample credentials above.
3. Use **Products** to add, edit, delete, upload images, update prices, stock, offers, and discounts.
4. Use **Store Settings** to change phone number, WhatsApp number, shop address, delivery area, delivery fee, and hours.
5. Use **Homepage Banners** to update title, subtitle, button text, banner image, and active status.
6. Changes are saved automatically in the browser.

If Supabase environment variables are missing, the app falls back to browser storage so the demo still works. The dashboard shows the current database status.

## Vercel Deployment

1. Push this folder to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Framework preset: **Next.js**.
4. Add these Vercel environment variables from your Supabase project:

```bash
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_EMAIL
ADMIN_PASSWORD
ADMIN_SESSION_SECRET
```

5. Build command: `npm run build`.
6. Output directory: `.next`.
7. Deploy.

## Delivery Rule

Checkout clearly states delivery is only available in Bashundhara R/A, Dhaka. WhatsApp messages include this delivery area and customer order details.
