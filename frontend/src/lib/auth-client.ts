import { createAuthClient } from "better-auth/react"

// Create the auth client to connect via our Next.js rewrite proxy
export const authClient = createAuthClient({
  // Use a relative path so the browser treats cookies as first-party
  baseURL: typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000")
})

export const { signIn, signUp, useSession } = authClient;
