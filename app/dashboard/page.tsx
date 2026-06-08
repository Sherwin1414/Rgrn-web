import { getUser } from '@/lib/dal';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard | Funeral Services',
};

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome, {user.full_name}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Manage your funeral arrangements and services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/dashboard/arrangements"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 transition-colors"
        >
          <h3 className="font-bold text-lg">View Arrangements</h3>
          <p className="text-sm mt-1 text-blue-100">Check your funeral arrangements status</p>
        </Link>
        <Link
          href="/dashboard/documents"
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-6 transition-colors"
        >
          <h3 className="font-bold text-lg">Upload Documents</h3>
          <p className="text-sm mt-1 text-purple-100">Upload required documentation</p>
        </Link>
      </div>
    </div>
  );
}