export type UserRole = 'customer' | 'staff' | 'admin' | 'super_admin';

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  address: string;
  role: UserRole;
  created_at?: string;
  updated_at?: string;
}