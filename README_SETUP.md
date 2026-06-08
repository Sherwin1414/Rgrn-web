# Funeral Services Management Platform

A production-ready, full-stack funeral services web application built with Next.js 15, Supabase, and modern UI technologies. This platform allows families to browse services, book arrangements, upload documents, and manage payments all through a secure, user-friendly interface.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Server Actions, Next.js Middleware
- **Database**: Supabase PostgreSQL with Row-Level Security (RLS)
- **Authentication**: Supabase Auth with JWT Sessions
- **Storage**: Supabase Storage
- **Email**: Resend (for transactional emails)
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod Validation
- **PDF Generation**: pdf-lib
- **Hosting**: Vercel (free tier)

## Project Structure

```
funeral-web/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes (login, signup)
│   ├── (dashboard)/       # Protected customer dashboard
│   ├── (admin)/           # Admin dashboard (Phase 4)
│   ├── api/               # API routes (Phase 5+)
│   ├── layout.tsx         # Root layout with dark mode
│   └── page.tsx           # Public home page
├── lib/
│   ├── supabase.ts        # Supabase client configuration
│   ├── session.ts         # JWT session management
│   ├── dal.ts             # Data Access Layer with auth checks
│   ├── auth.actions.ts    # Server actions for auth
│   └── email.ts           # Email utility functions (Phase 5)
├── components/
│   ├── ui/                # Reusable UI components
│   ├── forms/             # Form components (login, signup, etc.)
│   ├── logout-button.tsx  # Logout component
│   └── theme-toggle.tsx   # Dark mode toggle
├── types/
│   └── index.ts           # TypeScript types for all entities
├── utils/                 # Helper utilities
├── supabase/
│   └── migrations/        # Database migrations (SQL)
├── middleware.ts          # Next.js middleware for route protection
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── .env.example           # Environment variables template
└── .env.local             # Local environment variables (DO NOT COMMIT)
```

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
cd funeral-web
npm install
```

### 2. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Copy your credentials:
   - `NEXT_PUBLIC_SUPABASE_URL` (Project URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Anon Key)
   - `SUPABASE_SERVICE_ROLE_KEY` (Service Role Key - from Settings > API)

### 3. Set Up Environment Variables

Create `.env.local` in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Authentication
SESSION_SECRET=generate-with-openssl-rand-base64-32

# Email Service (Resend) - Phase 5
RESEND_API_KEY=your_resend_api_key_here

# Application
NODE_ENV=development
```

**Generate SESSION_SECRET:**
```bash
openssl rand -base64 32
```

### 4. Set Up Database Schema

1. Go to your Supabase project → SQL Editor
2. Copy the SQL from `supabase/migrations/001_initial_schema.sql`
3. Paste and execute in the SQL Editor
4. Then execute `supabase/migrations/002_rls_policies.sql`

Alternatively, use Supabase CLI:
```bash
npm install -g supabase@latest
supabase link --project-ref your-project-id
supabase migration up
```

### 5. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Current Implementation Status

### ✅ Phase 1: Foundation & Core Setup (COMPLETE)
- [x] Next.js 15 project initialized
- [x] TypeScript configured with strict mode
- [x] Project folder structure created
- [x] Core dependencies installed (Supabase, React Hook Form, Zod, etc.)
- [x] Supabase client setup (public & admin clients)
- [x] JWT session management (stateless, httpOnly cookies)
- [x] Data Access Layer (DAL) with role-based authorization
- [x] Next.js middleware for route protection
- [x] Database schema with all core tables
- [x] Row-Level Security (RLS) policies configured
- [x] Authentication pages (login, signup)
- [x] Auth server actions (sign up, login, logout)
- [x] Dashboard layout with sidebar navigation
- [x] Theme toggle (light/dark mode)
- [x] Home page with hero, services, testimonials
- [x] Placeholder dashboard pages (documents, payments, notifications, profile)
- [x] Arrangements page with list view

### ⏳ Phase 2: Public Website (NOT STARTED)
- [ ] About page
- [ ] Services page with detailed descriptions
- [ ] Packages page with comparison
- [ ] Pricing page
- [ ] FAQ page
- [ ] Contact page with email form (Resend integration)
- [ ] Navigation component with mobile menu
- [ ] SEO optimization

### ⏳ Phase 3: Customer Portal (NOT STARTED)
- [ ] Arrangements CRUD and detail views
- [ ] Document upload functionality
- [ ] Payment tracking and payment request workflow
- [ ] Notifications inbox
- [ ] Profile editing
- [ ] Invoice/receipt generation

### ⏳ Phase 4: Admin Dashboard (NOT STARTED)
- [ ] Admin dashboard with analytics
- [ ] Customer management (CRUD)
- [ ] Arrangement management
- [ ] Package management
- [ ] Staff management
- [ ] Payment management
- [ ] Reports module

### ⏳ Phase 5: Automation & Advanced Features (NOT STARTED)
- [ ] Email templates (Resend)
- [ ] Automated emails on key events
- [ ] Payment request workflow
- [ ] Messaging system notifications
- [ ] File security and validation

### ⏳ Phase 6: Deployment & Polish (NOT STARTED)
- [ ] Security hardening
- [ ] Performance optimization
- [ ] Testing (unit and integration)
- [ ] Seed data script
- [ ] Vercel deployment
- [ ] Domain setup
- [ ] Monitoring and analytics

## Database Schema Overview

### Core Tables
- **users**: User accounts with roles (customer, staff, admin, super_admin)
- **funeral_packages**: 4 service tiers (Basic, Standard, Premium, VIP)
- **arrangements**: Customer funeral bookings
- **payments**: Payment records (status, amount, method)
- **documents**: Uploaded files (death cert, IDs, authorizations)
- **staff**: Staff members (directors, drivers, assistants)
- **staff_assignments**: Link staff to arrangements
- **messages**: Notifications sent to users
- **audit_logs**: Admin action tracking

## Security Features Implemented

✅ Row-Level Security (RLS) at database level
✅ JWT session validation in middleware
✅ Role-based access control (RBAC)
✅ Protected routes for authenticated users
✅ Input validation with Zod
✅ Server-side authorization checks
✅ Secure httpOnly cookies (production)
✅ CSRF protection (Next.js built-in)

## User Roles & Permissions

### Customer
- View their own profile
- Create and manage arrangements
- Upload documents
- View and track payments
- Receive notifications

### Staff
- View assigned arrangements
- Update arrangement statuses
- View staff assignments

### Admin
- CRUD all customers and arrangements
- Manage packages and staff
- Track payments
- Generate reports
- View audit logs

### Super Admin
- All admin permissions + system management

## Key Features

1. **Secure Authentication**: Email/password with JWT sessions
2. **Mobile-Responsive UI**: Works seamlessly on all devices
3. **Dark Mode Support**: Light/dark theme toggle
4. **Role-Based Access**: Middleware enforces permissions
5. **Type-Safe**: Full TypeScript implementation
6. **Database Security**: RLS policies at table level
7. **Compassionate Design**: Professional, elegant UI/UX

## Development Tips

### Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Check for type errors
npx tsc --noEmit
```

### Adding New Routes

1. Create directory under `app/(route-group)/page-name/`
2. Add `page.tsx` for the page
3. Add `layout.tsx` if needed for shared layout
4. Import necessary utilities from `lib/`

### Adding Database Tables

1. Create SQL migration in `supabase/migrations/`
2. Add RLS policies for security
3. Add TypeScript types in `types/index.ts`
4. Create server actions in `lib/` for database operations

### Form Handling

All forms use React Hook Form + Zod:
```tsx
const form = useForm({ resolver: zodResolver(schema) });
```

Validation happens automatically, errors are caught.

## Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public API key | `eyJ0...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin API key (server-only) | `eyJ0...` |
| `SESSION_SECRET` | JWT signing key (keep secret!) | Generated via `openssl rand -base64 32` |
| `RESEND_API_KEY` | Resend email API key | `re_...` |
| `NODE_ENV` | Environment | `development` or `production` |

## Free Tier Limits & Considerations

### Supabase Free Tier
- 500,000 rows per database
- 1 GB file storage
- 50 MB monthly bandwidth
- Up to 2 concurrent connections

### Vercel Free Tier
- 100 GB bandwidth per month
- Automatic deployments
- Preview deployments
- Serverless functions included

### Resend Free Tier
- 100 emails per day
- Transactional emails only
- Domain verification required

## Deployment Checklist

Before deploying to production:

- [ ] Set all environment variables on Vercel
- [ ] Verify Supabase RLS policies are enabled
- [ ] Test authentication flow completely
- [ ] Configure custom domain
- [ ] Set up Resend domain verification
- [ ] Enable HTTPS everywhere
- [ ] Test database backups
- [ ] Configure monitoring
- [ ] Create runbook for common tasks

## Next Steps

1. Configure Supabase with the SQL migrations
2. Set up environment variables
3. Run development server and test auth flow
4. Proceed to Phase 2: Public Website pages
5. Then implement Phase 3: Customer Portal features

## Support & Troubleshooting

### Common Issues

**Supabase Connection Error**
- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Ensure Supabase project is running
- Check CORS settings in Supabase

**Authentication Not Working**
- Verify `SESSION_SECRET` is set
- Check if user table has correct structure
- Clear browser cookies and try again

**Database Migration Failed**
- Go to Supabase SQL Editor
- Copy migration scripts directly
- Execute them one at a time

## File Locations Reference

Key files you might need to modify:

- Auth config: `lib/session.ts`, `lib/dal.ts`
- Types: `types/index.ts`
- Database migrations: `supabase/migrations/`
- Dashboard layout: `app/(dashboard)/layout.tsx`
- Home page: `app/page.tsx`
- Middleware: `middleware.ts`

## License

MIT License - Feel free to use this for personal or commercial projects.

## Contributing

This is a custom project. For bug reports or improvements, create an issue or pull request.

---

**Happy building! 🚀**
