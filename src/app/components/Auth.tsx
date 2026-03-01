import { useState, useEffect } from 'react';
import { Lock, User, Mail, LogOut } from 'lucide-react';
import { ModernOakIcon } from './ModernOakIcon';
import * as authService from '../services/authService';

// Custom authentication service
// Developer: Implement the functions in /src/app/services/authService.ts

interface AuthProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

interface User {
  id: string;
  email: string;
}

export function Auth({ children, requireAuth = true }: AuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Check authentication status on mount
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const result = await authService.checkAuth();
      
      if (result.success && result.user) {
        setIsAuthenticated(true);
        setUser(result.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (err) {
      console.error('Auth check error:', err);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const result = await authService.signIn(formData.email, formData.password);

      if (result.success && result.user) {
        setIsAuthenticated(true);
        setUser(result.user);
        authService.storeUser(result.user);
        setFormData({ email: '', password: '' });
      } else {
        setError(result.error || 'Failed to sign in');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    }
  };

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      setIsAuthenticated(false);
      setUser(null);
      setFormData({ email: '', password: '' });
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f6f4] to-white">
        <div className="text-center">
          <ModernOakIcon size={80} className="mx-auto mb-6 animate-pulse" />
          <p className="text-[#333333]/60 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!requireAuth || isAuthenticated) {
    return (
      <>
        {isAuthenticated && user && (
          <div className="fixed top-24 right-6 z-50">
            <div className="bg-white/80 backdrop-blur-xl border border-[#333333]/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-[#333333]/70 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                  {user.email}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="px-3 py-1.5 bg-[#375357] text-white rounded-full text-xs font-light hover:bg-[#2d4246] transition-all duration-300 flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </div>
        )}
        {children}
      </>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f6f4] via-white to-[#e5dcd3] py-12 px-6">
      <div className="max-w-md w-full">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <ModernOakIcon size={100} className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-[#333333] mb-2" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
            SIGN IN
          </h1>
          <p className="text-[#333333]/60 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            Access brand assets and downloads
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#333333]/10 p-8">
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-[#333333]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#375357]/30 focus:border-[#375357] transition-all duration-300"
                  placeholder="you@firstcentennial.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-[#333333]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#375357]/30 focus:border-[#375357] transition-all duration-300"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-sm text-red-600 font-light">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#375357] to-[#2d4246] text-white py-3 rounded-2xl font-light hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#333333]/40 mt-6 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
          For access, contact your system administrator
        </p>
      </div>
    </div>
  );
}
