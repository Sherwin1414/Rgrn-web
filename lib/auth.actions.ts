'use server';

import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { createSession, deleteSession, verifySession } from '@/lib/session';

export async function loginAction(email: string, password: string) {
  try {
    // Sign in with Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !authData.user) {
      return {
        success: false,
        error: authError?.message || 'Failed to sign in',
      };
    }

    // Fetch user role from database
    console.log('Looking up user with id:', authData.user.id);
    const { data: users, error: userError } = await supabase
      .from('users')
      .select('id, role')
      .eq('id', authData.user.id);

    if (userError) {
      console.error('Login fetch user error:', userError);
      return {
        success: false,
        error: userError.message || userError.details || 'Database error fetching user',
      };
    }

    if (!users || users.length === 0) {
      console.error('No user found with id:', authData.user.id);
      return {
        success: false,
        error: 'No user record found. Please contact support.',
      };
    }

    const userData = users[0];

    // Create session
    await createSession(userData.id, userData.role);

    return {
      success: true,
      role: userData.role,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

export async function signupAction(
  full_name: string,
  email: string,
  phone: string,
  address: string,
  password: string
) {
  try {
    // Sign up with Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError || !authData.user) {
      return {
        success: false,
        error: authError?.message || 'Failed to sign up',
      };
    }

    // Create user record in database
    const { error: insertError } = await supabase
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        full_name,
        phone,
        address,
        role: 'customer',
      });

    if (insertError) {
      console.error('Signup insert error:', insertError);
      return {
        success: false,
        error: insertError.message || insertError.details || 'Failed to create user profile',
      };
    }

    // Create session
    await createSession(authData.user.id, 'customer');

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

export async function logoutAction() {
  try {
    // Sign out from Supabase
    await supabase.auth.signOut();
    
    // Delete session cookie
    await deleteSession();

    redirect('/login');
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to logout',
    };
  }
}
