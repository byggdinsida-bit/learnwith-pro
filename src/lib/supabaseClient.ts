import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Lazily create a singleton client. If env saknas returnerar vi undefined
let cachedClient: ReturnType<typeof createClient> | undefined;

export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return undefined;
  }
  if (!cachedClient) {
    cachedClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }
  return cachedClient;
}

export type SupabaseClientType = NonNullable<ReturnType<typeof getSupabaseClient>>;



