# Aura Boutique

India's premium luxury boutique fashion e-commerce platform.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion 12
- Radix UI

## Getting Started

```bash
cp .env.example .env.local
# Fill in your env vars

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
app/           -> Next.js App Router pages and layouts
components/    -> Reusable UI components
lib/           -> Data fetching, utilities, types
public/        -> Static assets
```

## Important
This project uses Next.js 16 canary-era behavior. Before changing routing or metadata APIs, check the installed Next docs in `node_modules/next/dist/docs/`.

## Deployment
Deploy on Vercel. Set all production env vars in the Vercel project settings.
