# Merrachi Main Dashboard

The central intelligence hub for Merrachi, powered by Next.js and AI. This dashboard provides advanced analysis, automated reporting, and AI-driven insights for business operations.

## 🚀 Features

- **AI-Powered Analysis**: Deep insights leveraging Google and Anthropic AI models.
- **Dynamic Dashboards**: Real-time data visualization and operational tracking.
- **Interactive Chat**: Natural language interface for data querying and business logic.
- **Template Management**: Standardized data structures for consistent reporting.
- **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/) with Google & Anthropic
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Database/Auth**: [Supabase](https://supabase.com/)
- **Data Parsing**: [PapaParse](https://www.papaparse.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm / yarn / pnpm / bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/merrachi-dashboards/merrachi-main-dashboard.git
   cd merrachi-main-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your credentials (see `.env.example` if available).

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app`: Next.js App Router (pages and API routes)
- `src/components`: Reusable UI components
- `src/lib`: Shared utilities and library configurations
- `Template`: CSV templates for data imports
- `public`: Static assets (logos, icons)

## 📦 Scripts

- `npm run dev`: Starts the development server with automatic port clearing.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.

---

© 2026 Merrachi. All rights reserved.
