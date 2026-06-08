'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import LogoutButton from '@/components/logout-button';
import ThemeToggle from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';
import type { User } from '@/types';

export default function DashboardClient({ children, user }: { children: ReactNode; user: User }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg lg:hidden"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/" className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
              RGRN Funeral
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <span className="hidden sm:block text-sm text-slate-600 dark:text-slate-400">{user.full_name}</span>
            <LogoutButton />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static top-0 left-0 z-40
          w-64 h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-4
          transform transition-transform duration-200 ease-in-out
          lg:transform-none lg:block lg:h-[calc(100vh-65px)]
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <span className="font-bold text-slate-900 dark:text-white">{user.full_name}</span>
          </div>
          <nav className="space-y-1 mt-12 lg:mt-0">
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/dashboard/arrangements', label: 'My Arrangements' },
              { href: '/dashboard/documents', label: 'Documents' },
              { href: '/dashboard/payments', label: 'Payments' },
              { href: '/dashboard/notifications', label: 'Notifications' },
              { href: '/dashboard/profile', label: 'Profile' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-sm sm:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-65px)] overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}