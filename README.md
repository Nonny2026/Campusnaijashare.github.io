# CampusNaijaShare 🎓🇳🇬

> A secure, mobile-first web application for Nigerian students and staff to share study resources — notes, past questions, textbooks, and more.

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Backend   | Supabase (Auth, Database, Storage, RLS) |
| Database  | PostgreSQL (via Supabase) |
| Storage   | Supabase Storage (S3-compatible) |

## Getting Started

### Prerequisites
- Node.js 20+ (`node -v`)
- npm 10+ (`npm -v`)
- A [Supabase](https://supabase.com) project (free tier works)

### 1. Clone & Install

```bash
cd campus-naija-share
npm install
```

### 2. Configure Environment

Copy the example env and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_STORAGE_BUCKET=resources
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> You can find your URL and anon key at **Supabase Dashboard → Project Settings → API**.

### 3. Set Up Database

1. Go to your Supabase project → **SQL Editor**
2. Paste the contents of `supabase/schema.sql`
3. Click **Run** — this creates all tables, RLS policies, triggers, and seed data.

### 4. Create Storage Bucket

1. Go to **Storage** in your Supabase dashboard
2. Click **New Bucket** → name it `resources`
3. Set it to **Public** (or configure signed URLs for private access)

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
campus-naija-share/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/page.tsx       # Login page
│   │   │   ├── register/page.tsx    # Registration page
│   │   │   ├── callback/route.ts    # Email verification callback
│   │   │   └── signout/route.ts     # Sign out handler
│   │   ├── dashboard/page.tsx       # User dashboard
│   │   ├── resources/page.tsx       # Browse & search resources
│   │   ├── upload/page.tsx          # Upload with drag & drop
│   │   ├── layout.tsx               # Root layout with fonts & SEO
│   │   ├── page.tsx                 # Landing page
│   │   └── globals.css              # Design tokens & theme
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts            # Browser Supabase client
│   │   │   ├── server.ts            # Server Supabase client
│   │   │   └── middleware.ts        # Session refresh helper
│   │   ├── types.ts                 # TypeScript types for all models
│   │   └── constants.ts             # Site config & design tokens
│   └── middleware.ts                # Next.js middleware (auth sessions)
├── supabase/
│   └── schema.sql                   # Full database schema + seed data
├── .env.local.example               # Environment template
└── package.json
```

## Features (MVP)

- ✅ User authentication (email/password + email verification)
- ✅ User profiles (name, matric, gender, geo zone, course, level)
- ✅ Upload resources with metadata, drag-and-drop, progress bar
- ✅ Browse & search with filters (course, level, semester, year, type)
- ✅ Mobile-first responsive design with academic theme
- ✅ Row Level Security for all database tables
- ✅ Auto-profile creation on signup (database trigger)
- ⬜ Admin dashboard with analytics
- ⬜ Resource preview (PDF/images)
- ⬜ Moderation & reporting
- ⬜ Download tracking & signed URLs
- ⬜ CSV export for analytics

## Design

- **Colors**: Calm blue/teal primary palette with warm orange CTA accent
- **Typography**: Inter (body) + Poppins (headings) from Google Fonts
- **Components**: Rounded cards, glassmorphism, gradient hero, dark mode support
- **Accessibility**: Focus-visible rings, ARIA labels, `role="alert"`, `aria-live`

## Scripts

| Command        | Description            |
|----------------|------------------------|
| `npm run dev`  | Start dev server       |
| `npm run build`| Production build       |
| `npm run start`| Start production server|
| `npm run lint` | Run ESLint             |

## License

MIT
