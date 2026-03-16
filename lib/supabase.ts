import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "https://dummy.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "dummy_anon_key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy_service_key";

// Public client — use in frontend (limited access, respects RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client — use ONLY in server-side API routes (bypasses RLS)
// Never expose supabaseServiceKey to the browser
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Upload file to Supabase Storage (uses admin client for write access)
export async function uploadToSupabase(
  file: File | Blob,
  path: string,
  bucket: string = "user-photos"
): Promise<string> {
  const { error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(path, file, { upsert: true });

  if (error) throw error;

  const { data } = supabaseAdmin.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
