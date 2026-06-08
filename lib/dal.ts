import 'server-only';

import { cache } from 'react';
import { redirect } from 'next/navigation';
import { verifySession } from './session';
import { supabase } from './supabase';
import { User } from '@/types';

// Cache the user session for the current request
export const getSession = cache(async () => {
  return await verifySession();
});

// Get current user - redirects to login if not authenticated
export const getUser = cache(async () => {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  // Fetch full user data from database
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', session.userId)
    .single();

  if (error || !user) {
    console.error('Failed to fetch user:', error);
    redirect('/login');
  }

  return user as User;
});

// Require admin role - throws error if not admin
export const requireAdmin = cache(async () => {
  const session = await getSession();
  if (!session || (session.role !== 'admin' && session.role !== 'super_admin')) {
    throw new Error('Unauthorized: Admin access required');
  }
  return session;
});

// Require staff or admin role
export const requireStaffOrAdmin = cache(async () => {
  const session = await getSession();
  if (!session || !['staff', 'admin', 'super_admin'].includes(session.role)) {
    throw new Error('Unauthorized: Staff access required');
  }
  return session;
});

// Optional: Get user by ID if you need to reference another user
export async function getUserById(userId: string) {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Failed to fetch user by ID:', error);
    return null;
  }

  return user as User;
}

// Helper to check if user can access a resource
export async function canAccessArrangement(arrangementId: string) {
  const session = await getSession();
  if (!session) return false;

  // Admins can access all arrangements
  if (['admin', 'super_admin'].includes(session.role)) {
    return true;
  }

  // Customers can only access their own arrangements
  if (session.role === 'customer') {
    const { data: arrangement, error } = await supabase
      .from('arrangements')
      .select('customer_id')
      .eq('id', arrangementId)
      .single();

    if (error) {
      console.error('Failed to check arrangement access:', error);
      return false;
    }

    return arrangement?.customer_id === session.userId;
  }

  // Staff can access assigned arrangements
  if (session.role === 'staff') {
    const { data: assignment, error } = await supabase
      .from('staff_assignments')
      .select('id')
      .eq('arrangement_id', arrangementId)
      .eq('staff_id', session.userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 is "no rows returned"
      console.error('Failed to check staff arrangement access:', error);
    }

    return !!assignment;
  }

  return false;
}

// Helper to check if user can access user profile
export async function canAccessUserProfile(targetUserId: string) {
  const session = await getSession();
  if (!session) return false;

  // Users can access their own profile
  if (session.userId === targetUserId) return true;

  // Admins can access all profiles
  if (['admin', 'super_admin'].includes(session.role)) return true;

  return false;
}
