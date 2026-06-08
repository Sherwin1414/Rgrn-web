import { getUser } from '@/lib/dal';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const metadata = {
  title: 'My Arrangements | Funeral Services',
};

export default async function ArrangementsPage() {
  const user = await getUser();

  const { data: arrangements } = await supabase
    .from('arrangements')
    .select('*')
    .eq('customer_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Arrangements</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Track all your funeral service arrangements
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        {arrangements && arrangements.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Service Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Cost</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {arrangements.map((arrangement) => (
                  <tr key={arrangement.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">
                      {new Date(arrangement.service_date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      {arrangement.location}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium capitalize">
                        {arrangement.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">
                      ${arrangement.total_cost || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Link
                        href={`/dashboard/arrangements/${arrangement.id}`}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">No arrangements yet</p>
            <Link
              href="/packages"
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Browse Packages
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
