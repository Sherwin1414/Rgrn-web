import { ReactNode } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { getUser } from '@/lib/dal';
import LogoutButton from '@/components/logout-button';
import ThemeToggle from '@/components/theme-toggle';

export const metadata = {
  title: 'Dashboard | Funeral Services',
};

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await getUser();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold text-xl text-slate-900 dark:text-white">
            RGRN Funeral
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">{user.full_name}</span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-4">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/arrangements"
              className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              My Arrangements
            </Link>
            <Link
              href="/dashboard/documents"
              className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Documents
            </Link>
            <Link
              href="/dashboard/payments"
              className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Payments
            </Link>
            <Link
              href="/dashboard/notifications"
              className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Notifications
            </Link>
            <Link
              href="/dashboard/profile"
              className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Profile
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
