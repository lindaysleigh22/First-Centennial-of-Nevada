/**
 * Custom Authentication Service
 * 
 * DEVELOPER TODO: Implement these functions with your own backend API
 * Replace the placeholder implementations with actual API calls to your authentication system
 */

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
  token?: string;
}

/**
 * Sign in with email and password
 * 
 * @param email - User's email address
 * @param password - User's password
 * @returns Promise with authentication response
 * 
 * DEVELOPER TODO: Replace this with your actual login API call
 * Example:
 * ```
 * const response = await fetch('https://your-api.com/auth/login', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ email, password })
 * });
 * const data = await response.json();
 * if (data.token) {
 *   localStorage.setItem('auth_token', data.token);
 * }
 * return data;
 * ```
 */
export async function signIn(email: string, password: string): Promise<AuthResponse> {
  try {
    // TODO: Replace with your actual API endpoint
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || 'Invalid credentials',
      };
    }

    const data = await response.json();

    // Store authentication token (if your system uses tokens)
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
    }

    return {
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
      },
      token: data.token,
    };
  } catch (error: any) {
    console.error('Sign in error:', error);
    return {
      success: false,
      error: error.message || 'Failed to sign in',
    };
  }
}

/**
 * Sign out current user
 * 
 * DEVELOPER TODO: Implement logout logic
 * - Clear authentication tokens
 * - Call logout endpoint if needed
 * - Clear any stored user data
 */
export async function signOut(): Promise<void> {
  try {
    // TODO: If you have a logout endpoint, call it here
    const token = localStorage.getItem('auth_token');
    
    if (token) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }

    // Clear stored authentication data
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  } catch (error) {
    console.error('Sign out error:', error);
    // Always clear local data even if API call fails
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }
}

/**
 * Check if user is currently authenticated
 * 
 * DEVELOPER TODO: Implement session validation
 * - Check if token exists and is valid
 * - Optionally verify token with backend
 * - Return user data if authenticated
 */
export async function checkAuth(): Promise<AuthResponse> {
  try {
    const token = localStorage.getItem('auth_token');

    if (!token) {
      return { success: false, error: 'No authentication token found' };
    }

    // TODO: Replace with your actual session validation endpoint
    const response = await fetch('/api/auth/validate', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      localStorage.removeItem('auth_token');
      return { success: false, error: 'Session expired' };
    }

    const data = await response.json();

    return {
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
      },
      token,
    };
  } catch (error: any) {
    console.error('Auth check error:', error);
    return {
      success: false,
      error: error.message || 'Failed to validate session',
    };
  }
}

/**
 * Get current authentication token
 */
export function getAuthToken(): string | null {
  return localStorage.getItem('auth_token');
}

/**
 * Get stored user data
 */
export function getStoredUser(): User | null {
  const userData = localStorage.getItem('user_data');
  if (userData) {
    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Store user data locally
 */
export function storeUser(user: User): void {
  localStorage.setItem('user_data', JSON.stringify(user));
}
