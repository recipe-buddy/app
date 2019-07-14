/**
 * Stub auth check.
 *
 * @param token - Pass a token to auth check, otherwise the function will
 * use the getToken function to check localStorage.
 */
export const check = async (token?: string): Promise<boolean> => {
  const userToken = await (token || getToken())
  if (!userToken) return false

  // e.g. return await http.post('auth/check', { token: userToken })
  return true
}

// Stub password login
export const login = async (user: string, pass: string) => {}

// Stub OAuth login
export const oauth = async (payload: any) => {}

// Stub logout
export const logout = async (): Promise<boolean> => true

// Stub token retrieval
export const getToken = async (): Promise<string | null> => null
