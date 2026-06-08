import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/dal';
import LoginForm from '@/components/forms/login-form';


export const metadata = {
  title: 'Login | Funeral Services',
  description: 'Login to your account',
};

export default async function LoginPage() {
  // If already logged in, redirect to dashboard
  const session = await getSession();
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4" style={{ backgroundImage: `url('https://www.image2url.com/r2/default/images/1780910399102-ea2ec2de-881e-4509-b4a3-2c72652ca985.png')` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative w-full max-w-md space-y-8">
        {/* Logo/Brand */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            RGRN
          </h1>
          <p className="mt-2 text-lg font-medium text-gray-200 drop-shadow">
            Funeral Services Management
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Sign in to your account to continue
            </p>
          </div>

          <LoginForm />

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
            </span>
            <Link
              href="/signup"
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-300">
          <p>
            By signing in, you agree to our{' '}
            <a href="#" className="hover:underline text-gray-200">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
