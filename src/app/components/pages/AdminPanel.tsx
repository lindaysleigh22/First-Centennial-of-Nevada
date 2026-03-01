import { useState } from 'react';
import { UserPlus, Users, Shield, Mail, Lock, User } from 'lucide-react';
import { ModernOakIcon } from '../ModernOakIcon';
import { Auth } from '../Auth';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function AdminPanel() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-67c33aca/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            name: formData.name,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create employee account');
      }

      setSuccess(`Employee account created successfully for ${formData.email}`);
      setFormData({ email: '', password: '', name: '' });
    } catch (err: any) {
      setError(err.message || 'Failed to create employee account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Auth requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#375357]/10 to-[#c3937d]/10 px-6 py-3 rounded-full mb-6">
              <Shield className="w-5 h-5 text-[#375357]" />
              <span className="text-sm font-semibold text-[#375357]" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                ADMIN PANEL
              </span>
            </div>
            <h1 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
              EMPLOYEE MANAGEMENT
            </h1>
            <p className="text-lg text-[#333333]/60 font-light max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              Create and manage employee access to the Downloads portal
            </p>
          </div>

          {/* Create Employee Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#333333]/10 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#333333]" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                  CREATE EMPLOYEE ACCOUNT
                </h2>
                <p className="text-sm text-[#333333]/60 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                  Add new team members to access brand assets
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateEmployee} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#333333]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#375357]/30 focus:border-[#375357] transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

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
                    placeholder="john.doe@firstcentennial.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-2">
                  Temporary Password
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
                <p className="text-xs text-[#333333]/50 mt-2 ml-1">
                  Minimum 6 characters. Employee should change this after first login.
                </p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <p className="text-sm text-red-600 font-light">{error}</p>
                </div>
              )}

              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="text-sm text-green-600 font-light">{success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#375357] to-[#2d4246] text-white py-3 rounded-2xl font-light hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                <UserPlus className="w-5 h-5" />
                {isLoading ? 'Creating Account...' : 'Create Employee Account'}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#375357]/5 to-[#375357]/10 rounded-3xl p-6 border border-[#375357]/20">
              <div className="w-10 h-10 bg-[#375357] rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                ACCESS MANAGEMENT
              </h3>
              <p className="text-sm text-[#333333]/70 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Only employees with created accounts can access the Downloads portal. Accounts must be created by administrators.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#c3937d]/5 to-[#c3937d]/10 rounded-3xl p-6 border border-[#c3937d]/20">
              <div className="w-10 h-10 bg-[#c3937d] rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                SECURITY
              </h3>
              <p className="text-sm text-[#333333]/70 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                All passwords are securely encrypted. Employees should change their temporary password after first login for optimal security.
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-[#333333]/10">
            <h3 className="text-lg font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
              📋 INSTRUCTIONS
            </h3>
            <ol className="space-y-3 text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              <li className="flex gap-3">
                <span className="font-bold text-[#375357]">1.</span>
                <span>Fill in the employee's full name, company email, and create a temporary password</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#375357]">2.</span>
                <span>Click "Create Employee Account" to generate their login credentials</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#375357]">3.</span>
                <span>Share the login credentials with the employee securely (email, in-person, etc.)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#375357]">4.</span>
                <span>Direct them to the Downloads page where they can sign in and access brand assets</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Auth>
  );
}
