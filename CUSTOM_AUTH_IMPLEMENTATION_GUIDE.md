# 🔐 Custom Authentication Implementation Guide
## For Developer - First Centennial Title of Nevada

**Last Updated:** February 27, 2026  
**Status:** Ready for Backend Integration  
**Estimated Implementation Time:** 2-4 hours

---

## 📋 **OVERVIEW**

The website has been **fully prepared** for your custom authentication system. All Supabase authentication has been removed and replaced with a clean service layer that you can implement with your own backend.

### ✅ What's Been Done:
- ✅ Created `/src/app/services/authService.ts` - All auth functions in one place
- ✅ Updated `/src/app/components/Auth.tsx` - Uses the new service
- ✅ Removed auto-login bypass (security issue fixed)
- ✅ Removed all Supabase auth dependencies from frontend
- ✅ Clean, professional UI maintained (no changes needed)

### 🎯 What You Need to Do:
1. **Implement 3 functions** in `/src/app/services/authService.ts`
2. **Update API endpoints** to match your backend
3. **Test the authentication flow**
4. **(Optional)** Remove unused Supabase packages

---

## 🚀 **IMPLEMENTATION STEPS**

### **STEP 1: Review the Auth Service File**

Open `/src/app/services/authService.ts`

You'll find **3 main functions** to implement:

```typescript
1. signIn(email, password)     // Login functionality
2. signOut()                    // Logout functionality  
3. checkAuth()                  // Session validation
```

Each function has:
- ✅ Clear documentation
- ✅ TODO comments explaining what to do
- ✅ Example code you can adapt
- ✅ Proper TypeScript types

---

### **STEP 2: Update Your Backend Endpoints**

The service currently expects these endpoints (you can change them):

| Function | Default Endpoint | Method | Purpose |
|----------|-----------------|--------|---------|
| `signIn()` | `/api/auth/login` | POST | Authenticate user |
| `signOut()` | `/api/auth/logout` | POST | End user session |
| `checkAuth()` | `/api/auth/validate` | GET | Verify token is valid |

**Replace these with your actual API endpoints.**

---

### **STEP 3: Implement signIn() Function**

**Location:** `/src/app/services/authService.ts` - Line ~35

#### What it should do:
1. Send email + password to your login endpoint
2. Receive authentication token from backend
3. Store token in localStorage
4. Return user data

#### Example Implementation:

```typescript
export async function signIn(email: string, password: string): Promise<AuthResponse> {
  try {
    // Replace with YOUR actual API endpoint
    const response = await fetch('https://your-backend.com/api/auth/login', {
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

    // Store the authentication token
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
```

#### Expected Backend Response Format:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-123",
    "email": "employee@firstcentennial.com",
    "name": "John Smith"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### **STEP 4: Implement signOut() Function**

**Location:** `/src/app/services/authService.ts` - Line ~67

#### What it should do:
1. (Optional) Call backend logout endpoint to invalidate token
2. Clear localStorage tokens
3. Clear any stored user data

#### Example Implementation:

```typescript
export async function signOut(): Promise<void> {
  try {
    const token = localStorage.getItem('auth_token');
    
    // OPTIONAL: Call your logout endpoint if you need server-side cleanup
    if (token) {
      await fetch('https://your-backend.com/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }

    // Always clear local data (even if API call fails)
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  } catch (error) {
    console.error('Sign out error:', error);
    // Clear local data even on error
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }
}
```

---

### **STEP 5: Implement checkAuth() Function**

**Location:** `/src/app/services/authService.ts` - Line ~97

#### What it should do:
1. Check if auth token exists in localStorage
2. (Optional) Validate token with backend
3. Return user data if valid
4. Clear token if expired/invalid

#### Example Implementation:

```typescript
export async function checkAuth(): Promise<AuthResponse> {
  try {
    const token = localStorage.getItem('auth_token');

    if (!token) {
      return { success: false, error: 'No authentication token found' };
    }

    // Validate token with your backend
    const response = await fetch('https://your-backend.com/api/auth/validate', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Token is invalid/expired - clear it
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
```

#### Expected Backend Response:

```json
{
  "valid": true,
  "user": {
    "id": "user-123",
    "email": "employee@firstcentennial.com",
    "name": "John Smith"
  }
}
```

---

## 🔒 **SECURITY CONSIDERATIONS**

### ✅ Best Practices Already Implemented:

1. **Token Storage:** Using localStorage (industry standard for SPAs)
2. **Error Handling:** All errors logged and handled gracefully
3. **Auto-Cleanup:** Tokens removed on logout/expiration
4. **Type Safety:** Full TypeScript types for all responses

### ⚠️ Security Recommendations for Your Backend:

1. **Use HTTPS Only** - Never transmit credentials over HTTP
2. **Implement Token Expiration** - Tokens should expire (e.g., 24 hours)
3. **Rate Limiting** - Prevent brute force login attempts
4. **Password Requirements** - Minimum 8 characters, complexity rules
5. **Secure Headers** - CORS, CSP, X-Frame-Options, etc.
6. **Hash Passwords** - Use bcrypt or Argon2 (never store plain text)
7. **Session Invalidation** - Logout should invalidate tokens server-side

---

## 🧪 **TESTING YOUR IMPLEMENTATION**

### Test Checklist:

#### 1. **Login Flow**
- [ ] Navigate to `/brand-kit` or `/downloads` (protected pages)
- [ ] Should see login screen
- [ ] Enter valid credentials
- [ ] Should redirect to requested page
- [ ] Should see user email in top-right corner

#### 2. **Session Persistence**
- [ ] Login successfully
- [ ] Refresh the page
- [ ] Should still be logged in (token validated)
- [ ] Should NOT see login screen again

#### 3. **Logout Flow**
- [ ] Click "Sign Out" button (top-right)
- [ ] Should be logged out
- [ ] Navigate to `/brand-kit`
- [ ] Should see login screen again

#### 4. **Invalid Credentials**
- [ ] Enter wrong password
- [ ] Should see error message
- [ ] Should NOT be logged in
- [ ] Error should be user-friendly

#### 5. **Token Expiration**
- [ ] Login successfully
- [ ] Wait for token to expire (or manually delete from backend)
- [ ] Refresh page
- [ ] Should be logged out automatically

#### 6. **Network Errors**
- [ ] Disconnect internet
- [ ] Try to login
- [ ] Should see error message (not crash)

---

## 📝 **TYPESCRIPT TYPES REFERENCE**

### User Type:
```typescript
interface User {
  id: string;          // Unique user identifier
  email: string;       // User's email address
  name?: string;       // Optional display name
}
```

### AuthResponse Type:
```typescript
interface AuthResponse {
  success: boolean;    // Whether operation succeeded
  user?: User;         // User data if successful
  error?: string;      // Error message if failed
  token?: string;      // Authentication token
}
```

---

## 🗂️ **FILE STRUCTURE**

```
src/
├── app/
│   ├── components/
│   │   └── Auth.tsx              ← UI Component (no changes needed)
│   └── services/
│       └── authService.ts        ← IMPLEMENT THIS FILE
```

**You only need to edit:** `/src/app/services/authService.ts`

---

## 🎨 **UI/UX - Already Complete**

The authentication UI is **fully designed and functional**:

- ✅ Beautiful login form with frosted glass effect
- ✅ Email and password input fields
- ✅ Error message display (red alert box)
- ✅ Loading states with animated logo
- ✅ User profile badge (top-right when logged in)
- ✅ Sign out button
- ✅ Mobile responsive
- ✅ Matches company brand colors

**You don't need to modify any UI code** - just implement the backend logic!

---

## 🔄 **AUTHENTICATION FLOW DIAGRAM**

```
┌─────────────────────────────────────────────────────────┐
│  User visits protected page (/brand-kit or /downloads) │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  checkAuth() called   │
         └───────┬───────────────┘
                 │
        ┌────────┴────────┐
        │                 │
   ✅ Token Valid    ❌ No Token/Invalid
        │                 │
        ▼                 ▼
  ┌──────────┐      ┌──────────────┐
  │ Show     │      │ Show Login   │
  │ Content  │      │ Screen       │
  └──────────┘      └──────┬───────┘
                           │
                    User enters credentials
                           │
                           ▼
                  ┌─────────────────┐
                  │ signIn() called │
                  └────────┬────────┘
                           │
                  ┌────────┴────────┐
                  │                 │
            ✅ Valid           ❌ Invalid
                  │                 │
                  ▼                 ▼
         ┌──────────────┐    ┌──────────┐
         │ Store token  │    │ Show     │
         │ Show content │    │ Error    │
         └──────────────┘    └──────────┘
```

---

## 🚨 **TROUBLESHOOTING**

### Issue: "Failed to sign in" error

**Possible Causes:**
1. Backend API endpoint URL is wrong
2. CORS not configured on backend
3. Backend returning unexpected response format
4. Network connectivity issue

**Debug Steps:**
1. Open browser DevTools → Network tab
2. Try to login
3. Check the `/api/auth/login` request
4. Look at Response tab to see what backend returned
5. Compare with expected format in this guide

---

### Issue: "Session expired" on every page load

**Possible Causes:**
1. Token not being stored correctly
2. `checkAuth()` endpoint returning error
3. Token validation failing on backend

**Debug Steps:**
1. Open browser DevTools → Application → Local Storage
2. Check if `auth_token` exists after login
3. Open Console tab
4. Look for "Auth check error" messages
5. Verify backend `/api/auth/validate` endpoint works

---

### Issue: Login form doesn't show error messages

**Possible Causes:**
1. `signIn()` function not returning proper `AuthResponse`
2. Error not being caught correctly

**Debug Steps:**
1. Open browser Console
2. Look for JavaScript errors
3. Check that `signIn()` returns `{ success: false, error: "message" }`

---

## 📞 **NEED HELP?**

### Common Questions:

**Q: Can I use JWT tokens?**  
A: Yes! Store the JWT in localStorage as `auth_token` and include it in Authorization header.

**Q: Can I use session cookies instead of localStorage?**  
A: Yes, but you'll need to modify the storage methods. Replace `localStorage.setItem()` with cookie handling.

**Q: Do I need to implement all 3 functions?**  
A: At minimum, implement `signIn()` and `checkAuth()`. `signOut()` can just clear localStorage if you don't have a backend logout endpoint.

**Q: Can I add user roles (admin, employee, etc.)?**  
A: Yes! Add a `role` field to the User type and return it from your backend. The UI already supports this.

**Q: What if my backend uses different field names?**  
A: Just map them in the auth service. For example:
```typescript
user: {
  id: data.userId,        // Your backend uses "userId"
  email: data.userEmail,  // Your backend uses "userEmail"
  name: data.fullName,    // Your backend uses "fullName"
}
```

---

## ✅ **COMPLETION CHECKLIST**

Before marking this as done:

- [ ] Replaced all `/api/auth/*` endpoints with actual backend URLs
- [ ] Implemented `signIn()` function
- [ ] Implemented `signOut()` function
- [ ] Implemented `checkAuth()` function
- [ ] Tested successful login
- [ ] Tested failed login (wrong password)
- [ ] Tested logout
- [ ] Tested page refresh (session persistence)
- [ ] Tested network errors
- [ ] Verified token stored in localStorage
- [ ] Verified CORS configured on backend
- [ ] Verified HTTPS enabled (for production)
- [ ] Removed any console.log() debugging statements (optional)

---

## 🎯 **QUICK START (TL;DR)**

1. Open `/src/app/services/authService.ts`
2. Find the 3 TODO sections
3. Replace `/api/auth/*` with your actual API endpoints
4. Implement the fetch logic for your backend
5. Make sure responses match the expected format
6. Test login/logout flow
7. ✅ Done!

---

## 📊 **ESTIMATED IMPLEMENTATION TIME**

| Task | Time |
|------|------|
| Review this guide | 15 min |
| Update API endpoints | 10 min |
| Implement signIn() | 30 min |
| Implement signOut() | 15 min |
| Implement checkAuth() | 30 min |
| Testing & debugging | 60 min |
| **Total** | **2-3 hours** |

---

## 🎊 **AFTER IMPLEMENTATION**

Once you're done:

1. ✅ Update deployment documentation with backend API URL
2. ✅ Configure environment variables (if any)
3. ✅ Test on staging environment
4. ✅ Test on production
5. ✅ Create test user accounts for the team
6. ✅ Document credential reset process

---

**Good luck with the implementation! The foundation is solid and ready for your backend. 🚀**
