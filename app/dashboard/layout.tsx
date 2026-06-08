import { ReactNode } from 'react';
import { getUser } from '@/lib/dal';
import DashboardClient from './dashboard-client';

export const metadata = {
  title: 'Dashboard | Funeral Services',
};

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await getUser();

  return <DashboardClient user={user}>{children}</DashboardClient>;
}